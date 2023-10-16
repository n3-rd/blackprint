<script>
	import QrJs from './QrJs.svelte';
	import { qrcodeText, qrcodeName } from './stores';
	import clipboard from 'clipboardy';

	/**
	 * @type {string}
	 */
	let qrText;
	$: qrText = $qrcodeText;

	const copyLink = async () => {
		await clipboard.write(qrText);
	};
</script>

<div class="h-full w-full flex justify-center items-center">
	<div class="card w-96 bg-base-100 shadow-xl">
		<figure class="bg-white py-4 flex justify-center items-center">
			<QrJs
				codeValue={qrText}
				squareSize="250"
				foregroundColor="#000000"
				backgroundColor="#ffffff"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">{$qrcodeName}</h2>
			<div class="tooltip text-left cursor-pointer" data-tip={qrText}>
				<p>{qrText.slice(0, 30)}</p>
			</div>
			<div class="card-actions justify-end">
				<a class="btn btn-primary" href={qrText} target="_blank"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="23"
						height="23"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ffffff"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><g fill="none" fill-rule="evenodd"
							><path
								d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
							/></g
						></svg
					></a
				>
				<button class="btn btn-primary" on:click={() => copyLink()}>Copy Link</button>
			</div>
		</div>
	</div>
</div>
