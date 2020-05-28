<script>
	import { createEventDispatcher } from 'svelte'
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte'
	export let value = ''
	export let disabled = false

	const dispatch = createEventDispatcher()

	const handleAddClick = () => dispatch('add')
</script>

<div class="component">
	<textarea class="input" bind:value {disabled} />
	{#if !disabled}
		<button on:click={handleAddClick}>
			<FaPlus />
		</button>
	{/if}
</div>

<style lang="postcss">
	.component {
		@apply flex flex-row items-end w-full !important;

		& > * {
			@apply mr-1 !important;

			&:last-child {
				@apply mr-0 !important;
			}
		}
	}

	.input {
		@apply rounded-md px-2 flex-auto h-10 w-full min-h-full !important;
	}

	button {
		@apply px-1 h-6 w-6 !important;
	}
</style>
