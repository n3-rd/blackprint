<script>
	import HistoryEntry from './sub-components/HistoryEntry.svelte';

	let history = localStorage.getItem('links');
	let entries = history ? JSON.parse(history) : [];

	$: {
		entries = history ? JSON.parse(history) : [];
	}

	setInterval(() => {
		history = localStorage.getItem('links');
	}, 1000);

	function clearHistory() {
		localStorage.removeItem('links');
		entries = [];
	}
</script>

<div class="menu bg-base-200 w-[25%] rounded-box h-screen">
	<div class="overflow-y-scroll relative w-full">
		<ul class="menu-list">
			<li class="menu-title">History</li>
			{#each entries as entry}
				<HistoryEntry entryText={entry} />
			{/each}
		</ul>
	</div>
</div>
