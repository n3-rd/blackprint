<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<div class="navbar bg-base-300">
	<div class="flex-1">
		<div class="normal-case text-xl font-bold px-4">BLACKprINT</div>
	</div>
	<div class="flex-none">
		<label class="label cursor-pointer flex gap-3">
			<span class="label-text">Change Theme</span>
			<input
				type="checkbox"
				class="toggle"
				data-toggle-theme="dark,light"
				data-act-class="ACTIVECLASS"
				bind:
			/>
		</label>
	</div>
</div>
