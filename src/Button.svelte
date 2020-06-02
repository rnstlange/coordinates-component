<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>

<button class="component" on:click={() => dispatch('click')}>
	<slot />
</button>

<style lang="postcss">
	.component {
		@apply border border-solid border-gray-500 rounded-md px-1 h-8 w-8 flex !important;
	}
</style>
