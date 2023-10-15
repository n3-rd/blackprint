<script>
	import { modalOpen } from './stores';
</script>

{#if $modalOpen}
	<dialog id="my_modal_5" class="modal modal-open modal-bottom sm:modal-middle">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Hello!</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>
			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button in form, it will close the modal -->
					<button class="btn" on:click={() => modalOpen.set(false)}>Close</button>
				</form>
			</div>
		</div>
	</dialog>
{/if}
