<script>
	import { parseString, formatToString } from './format'
	import GlobalStyle from './GlobalStyle.svelte'
	import Toggle from './Toggle.svelte'
	import PointInput from './PointInput.svelte'
	export let format = 'dms'
	export let multiple = false
	export let buffer_metric = 'm'
	export let buffer = false // Buffer value
	export let coordinate = false // Current point
	export let coordinates = [] // Array of points
	export let shape = 'polygon'

	let coordinateInput = ''
</script>

<GlobalStyle />

<div>
	<!-- dms / dd -->
	<div>
		<div>Координаты</div>
		<Toggle left={{text: 'DMS', value: 'dms'}} right={{text: 'DD', value: 'dd'}} on:change={({detail: v}) => format = v} />
	</div>
	<!-- point coordinates -->
	<div>
		<PointInput bind:value={coordinateInput} on:add={() => {coordinates = [parseString(coordinateInput, 'dms'), ...coordinates]; coordinateInput = ''}} on:del={() => coordinateInput = ''}/>
		{#each coordinates as coordinate, i}
			<PointInput value={formatToString(coordinate, format)} disabled={true} on:del={() => coordinates = coordinates.filter((_, idx) => idx !== i)}/>
		{/each}
	</div>
	<!-- cursor coordinates -->
	<div></div>
	<!-- buferization -->
	<div></div>
	<!-- line / polygon -->
	<div>
		<Toggle left={{text: 'Линия', value: 'line'}} right={{text: 'Полигон', value: 'polygon'}} value={shape == 'polygon'} on:change={({detail: v}) => shape = v} />
	</div>
</div>

<style>
</style>
