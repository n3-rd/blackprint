<script>
	import clipboard from 'clipboardy';

	/**
	 * @type {string}
	 */
	export let linkToCopy;

	const copyLink = async (/** @type {string} */ text) => {
		await clipboard.write(text);
	};
</script>

<button class="btn btn-primary" on:click={() => copyLink(linkToCopy)}>Copy Link</button>
