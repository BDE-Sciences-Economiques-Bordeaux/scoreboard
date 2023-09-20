<script lang="ts">
	import TeamScoreCard from './TeamScoreCard.svelte';
	export let category: string;
	export let teams: any = [];

    $: sortedTeams = [...teams].sort((a, b) => b.score - a.score);
</script>

<section class="category">
	<h2>{category}</h2>
    {#each sortedTeams as team}
        <TeamScoreCard bind:score={team.score} teamName={team.name} />
    {/each}
</section>

<style>
	/* Styles specific to the GlobalCategoryScoreCard can go here */
</style>
