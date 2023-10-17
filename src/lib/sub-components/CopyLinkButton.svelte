<script>
	import clipboard from 'clipboardy';

	export let linkToCopy;

	const copyLink = async (text) => {
		await clipboard.write(text);
	};
</script>

<button class="btn btn-primary" on:click={() => copyLink(linkToCopy)}>Copy Link</button>
