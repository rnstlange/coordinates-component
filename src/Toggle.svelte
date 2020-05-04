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
		@apply flex items-center cursor-pointer;
	}

	.toggle {
		@apply relative mx-2;
	}
	.toggle.active .dot {
		transform: translateX(100%);
	}

	.checkbox {
		@apply hidden;
	}

	.line {
		@apply block w-10 h-4 bg-gray-400 rounded-full shadow-inner;
	}

	.dot {
		@apply absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0;
		top: -0.25rem;
		left: -0.25rem;
		transition: all 0.3s ease-in-out;
	}
</style>
