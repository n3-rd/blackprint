<script>
	import { onMount, onDestroy } from 'svelte';
	import { backgroundColor, foregroundColor } from './stores';

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

	/**
	 * @type {string}
	 */
	export let foregroundValue;

	/**
	 * @type {string}
	 */
	export let backgroundValue;

	/**
	 * @typedef {Object} QRCodeOptions
	 * @property {string} text
	 * @property {number} width
	 * @property {number} height
	 * @property {string} colorDark
	 * @property {string} colorLight
	 * @property {number} correctLevel
	 * @property {boolean} [useSVG]
	 */

	/**
	 * @typedef {Object} QRCodeInstance
	 * @property {() => void} clear
	 * @property {(text: string) => void} makeCode
	 * @property {QRCodeOptions} _htOption
	 * @property {() => void} [redraw]
	 */

	/**
	 * @type {QRCodeInstance}
	 */
	let qrcode;

	$: {
		if (qrcode) {
			qrcode.clear();
			qrcode.makeCode(codeValue);
			qrcode._htOption.colorDark = foregroundValue;
			qrcode._htOption.colorLight = backgroundValue;
			if (qrcode.redraw) {
				qrcode.redraw();
			}
		}
		foregroundValue = $foregroundColor;
		backgroundValue = $backgroundColor;
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
				colorDark: foregroundValue,
				colorLight: backgroundValue,
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
