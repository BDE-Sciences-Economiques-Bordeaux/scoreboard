<script lang="ts">
	import GlobalCategoryScoreCard from './GlobalCategoryScoreCard.svelte';

	
	const getScores = async () => {
		const res = await fetch("https://script.googleapis.com/v1/scripts/AKfycbz_TVlzziJz7EyBgZ5KXOrce2u-t4vCKVb9nuwk1QdV:run", {method: "POST"});
		
		if (res.status != 200) {
			throw new Error("System error: " + res.status.toString());
		}

		const scoresJson = await res.json();
		return scoresJson;
	}
	let scorePromise: Promise<any> = getScores();
</script>

<svelte:head>
	<title>Olympiades Scoreboard</title>
	<meta name="description" content="Olympiades Scoreboard" />
</svelte:head>

{#await scorePromise}
	Loading scores...
{:then categories}
	{#each categories as category}
		<GlobalCategoryScoreCard category={category.name} teams={category.teams} />
	{/each}
{:catch someError}
	{someError.message}
	<button on:click={() => scorePromise = getScores()}>
		Réessayer
	</button>
{/await}


