// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
import { browser } from '$app/environment';

if (browser) {
    document.addEventListener('DOMContentLoaded', () => {
        const teams = document.querySelectorAll('.team');

        teams.forEach((team: Element) => {
            team.addEventListener('click', () => {
                const scoreElem = team.querySelector('.team-score');
                if (scoreElem) {
                    const currentScore = parseInt(scoreElem.textContent || "0", 10);
                    const newScore = currentScore + 10;

                    // Animation: score increment
                    scoreElem.textContent = newScore.toString();

                    // Note: We're asserting `scoreElem` as an `HTMLElement` here to access the `style` property
                    (scoreElem as HTMLElement).style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        (scoreElem as HTMLElement).style.transform = 'scale(1)';
                    }, 300);
                }
            });
        });
    });
}