<script>
	import { createEventDispatcher } from 'svelte'
	export let value = ''
	export let disabled = false

	const dispatch = createEventDispatcher()

	const handleAddClick = () => dispatch('add')
	const handleDelClick = () => dispatch('del')
</script>

<div>
	<input type="text" class="rounded-full px-2" bind:value={value} disabled={disabled}>
	{#if value}
		<button class="px-1" on:click={handleDelClick}>🗑️</button>
	{/if}
	{#if !disabled}
		<button class="px-1" on:click={handleAddClick}>➕</button>
	{/if}
</div>
