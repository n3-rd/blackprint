<script>
	import BackgroundPicker from './sub-components/BackgroundPicker.svelte';
	import ForegroundPicker from './sub-components/ForegroundPicker.svelte';
</script>

<h3 class="font-bold text-lg">Colors</h3>
<div class="flex flex-col gap-3 py-3">
	<ForegroundPicker hex="#ffffff" />
	<BackgroundPicker hex="#000000" />
</div>
