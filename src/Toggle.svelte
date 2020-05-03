<script>
	import {createEventDispatcher} from 'svelte'

	const dispatch = createEventDispatcher()

	export let left
	export let right
	export let value = false

	$: dispatch('change', value ? right.value : left.value)

</script>

<label class="toggle-container">
	<span class="text">{left.text}</span>

	<div class="toggle {value ? 'active' : ''}">
		<input class="checkbox" type="checkbox" bind:checked={value} on:change={() => dispatch('change', value ? right.value : left.value)}>
		<span class="line"></span>
		<span class="dot"></span>
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
	.toggle.active .dot{
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
		top: -.25rem;
		left: -.25rem;
		transition: all .3s ease-in-out;
	}
</style>
