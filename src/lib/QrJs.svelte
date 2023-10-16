<script>
	import { onMount, onDestroy } from 'svelte';

	/**
	 * value of the code example: google.com
	 *
	 * @type {string}
	 */
	export let codeValue;
	/**
	 * size of the code example: 200
	 *
	 * @type {string}
	 */
	export let squareSize;

	export let foregroundColor = '#000000';

	export let backgroundColor = '#ffffff';

	/**
	 * @type {{ clear: () => void; makeCode: (arg0: string) => void; }}
	 */
	let qrcode;

	$: {
		if (qrcode) {
			qrcode.clear();
			qrcode.makeCode(codeValue);
		}
	}

	onMount(() => {
		let script = document.createElement('script');
		script.src = '/qrcode.js';
		document.head.append(script);

		script.onload = function () {
			// @ts-ignore
			qrcode = new QRCode('qrcode', {
				text: codeValue,
				width: squareSize,
				height: squareSize,
				colorDark: foregroundColor,
				colorLight: backgroundColor,
				// @ts-ignore
				correctLevel: QRCode.CorrectLevel.H
			});
		};
	});

	onDestroy(() => {
		if (qrcode) {
			qrcode.clear();
		}
	});
</script>

<div id="qrcode" class="w-full h-full flex justify-center items-center" />
