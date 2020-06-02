<script>
	import { createEventDispatcher } from 'svelte'
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte'
	import FaTrash from 'svelte-icons/fa/FaTrash.svelte'
	import Button from './Button.svelte'
	export let value = ''
	export let disabled = false

	const dispatch = createEventDispatcher()

	const handleAddClick = () => dispatch('add')
	const handleDelClick = () => dispatch('del')
</script>

<div class="component">
	<input type="text" class="input" bind:value {disabled} />
	{#if value}
		<Button class="button" on:click={handleDelClick}>
			<FaTrash />
		</Button>
	{/if}
	{#if !disabled}
		<Button class="button" on:click={handleAddClick}>
			<FaPlus />
		</Button>
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
</style>
