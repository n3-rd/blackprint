<script>
	import QrJs from './QrJs.svelte';
	import { qrcodeText, qrcodeName } from './stores';

	/**
	 * @type {string}
	 */
	let qrText;
	$: qrText = $qrcodeText;
</script>

<div class="h-full w-full flex justify-center items-center">
	<div class="card w-96 bg-base-100 shadow-xl">
		<figure class="bg-white py-4 flex justify-center items-center">
			<QrJs
				codeValue={qrText}
				squareSize="200"
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
				<button class="btn btn-primary">Copy Link</button>
			</div>
		</div>
	</div>
</div>
