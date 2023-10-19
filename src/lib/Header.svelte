<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Adjust from './sub-components/Adjust.svelte';
	import ColorModal from './ColorModal.svelte';
	import GithubIcon from './sub-components/GithubIcon.svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="navbar bg-base-300">
	<div class="flex-1">
		<div class="normal-case text-xl font-bold px-4">BLACKprINT</div>
	</div>
	<div class="flex-none gap-3">
		<a href="http://github.com/n3-rd/blueprint" target="_blank">
			<GithubIcon color="#a6adba" />
		</a>
		<div class="dropdown dropdown-hover">
			<button tabindex="0" class="btn m-1">
				<Adjust color="#a6adba" />
			</button>

			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<ColorModal />
			</div>
		</div>
		<label class="label cursor-pointer flex gap-3">
			<span class="label-text">Change Theme</span>
			<input
				type="checkbox"
				class="toggle"
				data-toggle-theme="dark,light"
				data-act-class="ACTIVECLASS"
			/>
		</label>
	</div>
</div>
