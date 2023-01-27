<script>
	import { onMount } from 'svelte';
	import { svelteStore, GRID, connectStoreSync, makeKey } from '../lib/grid.store.js';
	const COLORS = {
		WHITE: '#ffffff',
		BLACK: '#000000'
	};
	let selectedColor = COLORS.BLACK;

	onMount(() => {
		connectStoreSync();
	});

	/**
	 * @param {string} key
	 */
	function toggleCell(key) {
		$svelteStore.grid[key] = { color: selectedColor };
	}
</script>

<div>
	{#each { length: GRID.ROWS } as _, rowI}
		<div class="row">
			{#each { length: GRID.COLS } as col, colI}
				{@const key = makeKey(rowI, colI)}
				<div class="col">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="cell"
						on:click={() => toggleCell(key)}
						style="background-color: {$svelteStore.grid[key]?.color || COLORS.WHITE};"
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>

<div>
	<input type="color" bind:value={selectedColor} />
</div>

<style>
	:global(body) {
		background-color: bisque;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.row + .row {
		border-top: 1px solid #ccc;
	}
	.col {
		width: 10px;
		height: 10px;
	}
	.col + .col {
		border-left: 1px solid #ccc;
	}
	.cell {
		width: 100%;
		height: 100%;
	}
	div:has(> .row) {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	div:has(> input) {
		margin-top: 16px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	[type='color'] {
		width: 64px;
		height: 32px;
		background-color: transparent;
		border: 0;
	}
</style>
