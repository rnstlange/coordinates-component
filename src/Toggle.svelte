<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let left
	export let right
	export let value = false

	const handleChange = () => dispatch('change', value ? right.value : left.value)
</script>

<label class="toggle-container">
	<span class="text">{left.text}</span>

	<div class="toggle {value ? 'active' : ''}">
		<input class="checkbox" type="checkbox" bind:checked={value} on:change={handleChange} />
		<span class="line" />
		<span class="dot" />
	</div>

	<span class="text">{right.text}</span>
</label>

<style lang="postcss">
	.toggle-container {
		@apply flex items-center cursor-pointer !important;
	}

	.toggle {
		@apply relative mx-3 !important;
	}
	.toggle.active .dot {
		transform: translateX(100%) !important;
	}

	.checkbox {
		@apply border border-solid border-gray-500 rounded-md hidden !important;
	}

	.line {
		@apply block w-16 h-6 bg-gray-400 rounded-full shadow-inner !important;
	}

	.dot {
		@apply absolute w-8 h-8 bg-white rounded-full shadow inset-y-0 left-0 !important;
		top: -0.25rem !important;
		left: -0.25rem !important;
		transition: all 0.3s ease-in-out !important;
	}
</style>
