<script lang="ts">
	export let teamName: string;
	export let score: number;
</script>

<div class="team">
	<span class="team-name">{teamName}</span>
	<span class="team-score">{score}</span>
</div>

<style>
	/* Styles specific to the TeamScoreCard can go here */
</style>
