<script>
	import ColorPicker from 'svelte-awesome-color-picker';
	import { backgroundColor, qrcodeText } from '../stores';
	import { setQrCode } from '$lib/main';

	/**
	 * @type {string}
	 */
	export let hex;
	const change = () => {
		backgroundColor.set(hex);
		setQrCode($qrcodeText);
	};
</script>

<ColorPicker bind:hex on:input={() => change()} label="Background Color" />
