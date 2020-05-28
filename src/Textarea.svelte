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
		<button class="button" on:click={handleAddClick}>
			<FaPlus />
		</button>
	{/if}
</div>

<style lang="postcss">
	.component {
		@apply flex flex-row items-end w-full;

		& > * {
			@apply mr-1;

			&:last-child {
				@apply mr-0;
			}
		}
	}

	.input {
		@apply border border-solid border-gray-500 rounded-md px-2 py-1 flex-auto min-h-12 w-full;
	}

	.button {
		@apply border border-solid border-gray-500 rounded-md px-1 h-6 w-6 flex;
	}
</style>
