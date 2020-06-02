<script>
	import { createEventDispatcher } from 'svelte'
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte'
	import FaTrash from 'svelte-icons/fa/FaTrash.svelte'
	export let value = ''
	export let disabled = false

	const dispatch = createEventDispatcher()

	const handleAddClick = () => dispatch('add')
	const handleDelClick = () => dispatch('del')
</script>

<div class="component">
	<textarea class="input" bind:value {disabled} />
	<div class="control">
		{#if value}
			<button class="button" on:click={handleDelClick}>
				<FaTrash />
			</button>
		{/if}
		{#if !disabled}
			<button class="button" on:click={handleAddClick}>
				<FaPlus />
			</button>
		{/if}
	</div>
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

	.control {
		@apply flex flex-col justify-between h-full;
		& > * {
			&:last-child {
				@apply mt-auto;
			}
		}
	}

	.input {
		@apply border border-solid border-gray-500 rounded-md px-3 py-1 flex-auto min-h-16 w-full !important;
	}

	.button {
		@apply border border-solid border-gray-500 rounded-md px-1 h-8 w-8 flex !important;
	}
</style>
