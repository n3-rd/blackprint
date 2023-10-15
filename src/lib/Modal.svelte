<script>
	import { modalOpen } from './stores';
	import clipboard from 'clipboardy';
	import UrlInfo from './sub-components/UrlInfo.svelte';

	let link = '';

	const paste = async () => {
		let text = await clipboard.read();
		link = text;
	};

	const isValidUrl = (/** @type {string} */ urlString) => {
		var urlPattern = new RegExp(
			'^(https?:\\/\\/)?' + // validate protocol
				'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
				'((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
				'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
				'(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
				'(\\#[-a-z\\d_]*)?$',
			'i'
		); // validate fragment locator
		return !!urlPattern.test(urlString);
	};
</script>

{#if $modalOpen}
	<dialog id="my_modal_5" class="modal modal-open modal-bottom sm:modal-middle">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Paste a link</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full"
				bind:value={link}
			/>
			<div class="modal-action flex justify-between w-full">
				<div>
					<button class="btn btn-primary" on:click={() => paste()}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
							/><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg
						></button
					>
				</div>
				<form method="dialog" class="flex gap-3">
					<!-- if there is a button in form, it will close the modal -->
					<button class="btn" on:click={() => modalOpen.set(false)}>Close</button>
					<button class="btn btn-primary">Get QRcode</button>
				</form>
			</div>
			{#if !isValidUrl(link)}
				<UrlInfo />
			{/if}
		</div>
	</dialog>
{/if}
