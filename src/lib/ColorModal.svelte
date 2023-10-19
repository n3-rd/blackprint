<script>
	import { backgroundColor, foregroundColor } from './stores';
	import BackgroundPicker from './sub-components/BackgroundPicker.svelte';
	import ForegroundPicker from './sub-components/ForegroundPicker.svelte';

	setInterval(() => {
		console.log('back', $backgroundColor);
		console.log('fore', $foregroundColor);
	}, 1000);
</script>

<h3 class="font-bold text-lg">Colors</h3>
<div class="flex flex-col gap-3 py-3">
	<ForegroundPicker hex="#ffffff" />
	<BackgroundPicker hex="#000000" />
</div>
