<script>
	import { createEventDispatcher } from 'svelte'
	export let list = []
	export let value = 1

	const dispatch = createEventDispatcher()

	const handleChange = v => {
		dispatch('change', value)
	}
</script>

<div class="component">
	{#each list as el}
		<label>
			<input type="radio" value={el.value} bind:group={value} on:change={e => handleChange(e.target.value)}>
			{el.label}
		</label>
	{/each}
</div>
