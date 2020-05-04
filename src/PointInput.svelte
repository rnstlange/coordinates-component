<script>
	import { createEventDispatcher } from 'svelte'
	export let value = ''
	export let disabled = false

	const dispatch = createEventDispatcher()

	const handleAddClick = () => dispatch('add')
	const handleDelClick = () => dispatch('del')
</script>

<div class="component">
	<input type="text" class="input" bind:value {disabled} />
	{#if value}
		<button on:click={handleDelClick}>🗑</button>
	{/if}
	{#if !disabled}
		<button on:click={handleAddClick}>➕</button>
	{/if}
</div>

<style lang="postcss">
	.component {
		@apply flex flex-row;

		& > * {
			@apply mr-1;

			&:last-child {
				@apply mr-0;
			}
		}
	}

	.input {
		@apply rounded-full px-2 flex-auto w-0;
	}

	button {
		@apply px-1;
	}
</style>
