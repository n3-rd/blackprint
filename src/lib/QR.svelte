<script>
	import QrJs from './QrJs.svelte';
	import { qrcodeText, qrcodeName, foregroundColor, backgroundColor } from './stores';
	import OpenLinkButton from './sub-components/OpenLinkButton.svelte';
	import CopyLinkButton from './sub-components/CopyLinkButton.svelte';

	/**
	 * @type {string}
	 */
	let qrText;
	$: qrText = $qrcodeText;
	/**
	 * @type {string}
	 */
	let foreground;
	/**
	 * @type {string}
	 */
	let background;

	$: {
		foreground = $foregroundColor;
		background = $backgroundColor;
	}
</script>

<div class="h-full w-full flex justify-center items-center">
	<div class="card w-96 bg-base-100 shadow-xl">
		<figure
			class="py-4 flex justify-center items-center transition-colors duration-200"
			style="background-color: {foreground};"
		>
			<QrJs
				codeValue={qrText}
				squareSize="250"
				foregroundValue={foreground}
				backgroundValue={background}
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">{$qrcodeName}</h2>
			<div class="tooltip text-left cursor-pointer" data-tip={qrText}>
				<p>{qrText.slice(0, 30)}</p>
			</div>
			<div class="card-actions justify-end">
				<OpenLinkButton link={qrText} />
				<CopyLinkButton linkToCopy={qrText} />
			</div>
		</div>
	</div>
</div>
