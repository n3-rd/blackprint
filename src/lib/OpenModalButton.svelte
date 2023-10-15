<script>
	import { modalOpen } from './stores';
</script>

<div class="absolute bottom-8 right-8">
	<button class="btn btn-circle btn-primary" on:click={() => modalOpen.set(true)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="34"
			height="34"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#ffffff"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg
		>
	</button>
</div>
