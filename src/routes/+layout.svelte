<script>
	import ColorModal from '$lib/ColorModal.svelte';
	import Header from '$lib/Header.svelte';
	import History from '$lib/History.svelte';
	import Modal from '$lib/Modal.svelte';
	import OpenModalButton from '$lib/OpenModalButton.svelte';
	import '../app.css';
</script>

<div class="flex fixed w-screen">
	<History />

	<div class="flex-1">
		<Modal />

		<Header />

		<slot />
	</div>
</div>
<OpenModalButton />
