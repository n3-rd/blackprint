<script>
	import { setQrCode } from '$lib/main';

	let history = localStorage.getItem('links');
	let entries = history ? JSON.parse(history) : [];

	$: {
		entries = history ? JSON.parse(history) : [];
	}

	setInterval(() => {
		history = localStorage.getItem('links');
	}, 1000);

	/**
	 * @param {string} entry
	 * @param {MouseEvent} event
	 */
	function removeEntry(entry, event) {
		entries = entries.filter((/** @type {string} */ e) => e !== entry);
		localStorage.setItem('links', JSON.stringify(entries));
		event.stopPropagation();
	}

	/**
	 * @type {string}
	 */
	export let entryText;
</script>

<li>
	<button
		class="menu-item px-2 py-4 w-full overflow-hidden truncate flex justify-between"
		on:click={() => setQrCode(entryText)}
		title={entryText}
	>
		<span class="truncate overflow-hidden">{entryText}</span>
		<button
			class="icon"
			on:click|stopPropagation={(event) => removeEntry(entryText, event)}
			aria-label={`Remove ${entryText}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="23"
				height="23"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#e70000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<polyline points="3 6 5 6 21 6" />
				<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
				<line x1="10" y1="11" x2="10" y2="17" />
				<line x1="14" y1="11" x2="14" y2="17" />
			</svg>
		</button>
	</button>
</li>
