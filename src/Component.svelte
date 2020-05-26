<script>
	import { createEventDispatcher } from 'svelte'
	import {
		testString,
		parseString,
		formatToString,
		fromEPSG3857ToMSK64,
		fromMSK64ToEPSG3857,
		fromEPSG3857ToWGS84,
		fromWGS84ToEPSG3857
	} from './format'
	import GlobalStyle from './GlobalStyle.svelte'
	import Toggle from './Toggle.svelte'
	import PointInput from './PointInput.svelte'
	import Textarea from './Textarea.svelte'
	export let format = 'dms'
	export let multiple = false
	export let coordinate = false // Current point
	export let coordinates = [] // Array of points
	export let multitool = false
	export let bufferization = false
	export let projection = 'WGS84'

	const dispatch = createEventDispatcher()

	const bufferMetrics = [
		{ text: 'м', value: 1 },
		{ text: 'км', value: 1000 }
	]

	let bufferMetric = 1

	let coordinateInput = ''
	let coordinateTextarea = ''
	let buffer = 0
	let shape = 'polygon'

	const projectionList = [
		{ label: 'WGS84', value: 'WGS84' },
		{ label: 'MSK', value: 'MSK' }
	]

	$: changeProjection = (coordinate, decode = true) => {
		if (decode) {
			if (projection == 'WGS84') return fromEPSG3857ToWGS84(coordinate)
			if (projection == 'MSK') return fromEPSG3857ToMSK64(coordinate)
		} else {
			if (projection == 'WGS84') return fromWGS84ToEPSG3857(coordinate)
			if (projection == 'MSK') return fromMSK64ToEPSG3857(coordinate)
		}
		return coordinate
	}

	const onChange = (force = false) => {
		if (force || coordinates.length > 0)
			dispatch('change', {
				...(bufferization ? { buffer: buffer * bufferMetric } : {}),
				coordinates,
				...(multitool && coordinates.length > 1 ? { shape: shape } : {})
			})
	}

	const handleFormatChange = ({ detail: v }) => {
		format = v
	}

	const handleAddCoordinate = () => {
		if (testString(coordinateInput)) {
			const coordinate = changeProjection(parseString(coordinateInput, 'dd'), false)
			console.log(coordinate)

			if (!multiple) coordinates = [coordinate]
			else coordinates = [coordinate, ...coordinates]
			coordinateInput = ''
			onChange()
		}
	}

	const handleDelInputCoordinate = () => {
		coordinateInput = ''
	}

	const handleAddMultipleCoordinate = () => {
		coordinateTextarea.split('\n').map(el => {
			if (testString(el)) {
				coordinates = [changeProjection(parseString(el, 'dd'), false), ...coordinates]
			}
		})

		coordinateTextarea = ''
		onChange()
	}
	const handleDeleteMultipleCoordinate = () => {
		coordinateTextarea = ''
	}

	const handleDelCoordinate = idx => () => {
		coordinates = coordinates.filter((_, i) => i !== idx)
		onChange(true)
	}

	const handleShapeChange = ({ detail: v }) => {
		shape = v
		onChange()
	}

	const handleProjectionChange = ({ detail: v }) => {
		projection = v
		onChange()
	}
</script>

<GlobalStyle />

<div class="component">

	<!-- dms / dd -->

	<div class="row">
		<div>Координаты:</div>
		<Toggle left={{ text: 'DMS', value: 'dms' }} right={{ text: 'DD', value: 'dd' }} on:change={handleFormatChange} />
	</div>

	<!-- projection -->

	<div class="row">
		<div>Проекция:</div>
		<Toggle
			left={{ text: 'WGS84', value: 'WGS84' }}
			right={{ text: 'МСК-64', value: 'MSK' }}
			value={shape == 'WGS84'}
			on:change={handleProjectionChange}
		/>
	</div>

	<!-- points input -->
	{#if multiple}
		<div class="row">
			<Textarea bind:value={coordinateTextarea} on:add={handleAddMultipleCoordinate} on:del={handleDeleteMultipleCoordinate} />
		</div>
	{/if}

	<!-- point input -->

	{#if !multiple}
		<div class="row">
			<PointInput bind:value={coordinateInput} on:add={handleAddCoordinate} on:del={handleDelInputCoordinate} />
		</div>
	{/if}

	<!-- point coordinates -->

	<div class="multiplerows">
		{#each coordinates as coordinate, i}
			<div>
				<PointInput value={formatToString(changeProjection(coordinate), format)} disabled={true} on:del={handleDelCoordinate(i)} />
			</div>
		{/each}
	</div>

	<!-- cursor coordinates -->

	{#if coordinate}
		<div class="row">
			<div>{formatToString(changeProjection(coordinate), format)}</div>
		</div>
	{/if}

	<!-- buferization -->

	{#if bufferization}
		<div class="row">
			<div>Буферизация</div>
			<input bind:value={buffer} on:change={onChange} type="number" min="0" step="any" style="flex: 1 1 auto; width: 0" />
			<select bind:value={bufferMetric} on:change={onChange}>
				{#each bufferMetrics as metric}
					<option value={metric.value}>{metric.text}</option>
				{/each}
			</select>
		</div>
	{/if}

	<!-- line / polygon -->

	{#if coordinates.length > 1 && multitool}
		<div class="row">
			<Toggle
				left={{ text: 'Линия', value: 'line' }}
				right={{ text: 'Полигон', value: 'polygon' }}
				value={shape == 'polygon'}
				on:change={handleShapeChange}
			/>
		</div>
	{/if}
</div>

<style lang="postcss">
	.component {
		@apply p-4 border border-black rounded-lg;
		width: 300px;

		& > * {
			@apply mb-4;

			&:last-child {
				@apply mb-0;
			}
		}
	}

	.row {
		@apply flex flex-row justify-between;

		& > * {
			@apply mr-4;
			&:last-child {
				@apply mr-0;
			}
		}
	}

	.multiplerows {
		@apply flex flex-col;

		& > * {
			@apply mb-1;
			&:last-child {
				@apply mb-0;
			}
		}
	}
</style>
