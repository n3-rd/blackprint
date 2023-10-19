<script>
	import ColorPicker from 'svelte-awesome-color-picker';
	import { foregroundColor, qrcodeText } from '../stores';
	import { setQrCode } from '$lib/main';

	/**
	 * @type {string}
	 */
	export let hex;
	const change = () => {
		foregroundColor.set(hex);
		setQrCode($qrcodeText);
	};
</script>

<ColorPicker bind:hex on:input={() => change()} label="Foreground Color" />
