<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<div class="columnTitles">
		<div>Title</div>
		<div>Date</div>
		<div>Compeititors</div>
	</div>
	{#each data.matches as match}
		{#if match.opponents.toString() != ''}
			<div class="match">
				<h1>{match.league.name} <img src={match.league.image_url} alt="" /></h1>
				<h3>{match.begin_at}</h3>
				<ul>
					{#each match.opponents as opp}
						<li>{opp.opponent.name}</li>
					{/each}
				</ul>
			</div>
		{/if}
	{/each}
</div>

<style>
	:global(body) {
		background-color: #262421;
		box-sizing: border-box;
		padding: 3rem;
	}

	.match {
		background-color: #7fa650;
		border-radius: 15px;
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-bottom: 4rem;
		color: white;
	}

	.match * {
		margin: 0;
	}

	.match img {
		height: 20px;
		width: 20px;
	}

	.columnTitles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		color: #de9b35;
	}
</style>
