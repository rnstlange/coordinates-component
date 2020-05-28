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
	<input type="text" class="input" bind:value {disabled} />
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

<style lang="postcss">
	.component {
		@apply flex flex-row items-center w-full !important;

		& > * {
			@apply mr-1 !important;

			&:last-child {
				@apply mr-0 !important;
			}
		}
	}

	.input {
		@apply border border-solid border-gray-500 rounded-full px-3 flex-auto w-0 !important;
	}

	.button {
		@apply border border-solid border-gray-500 rounded-md px-1 h-8 w-8 flex !important;
	}
</style>
