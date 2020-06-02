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
	import Toggle from './Toggle.svelte'
	import PointInput from './PointInput.svelte'
	import PointsInput from './PointsInput.svelte'
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

	const handleCoordinate = coordinate => {
		if (testString(coordinate)) {
			const result = changeProjection(parseString(coordinate, 'dd'), false)
			if (Array.isArray(result) && result[0] && result[1]) {
				return result
			}
		}
		return false
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
		try {
			if (testString(coordinateInput)) {
				const coordinate = handleCoordinate(coordinateInput)

				if (coordinate) {
					if (!multiple) coordinates = [coordinate]
					else coordinates = [coordinate, ...coordinates]
					onChange()
				}
				coordinateInput = ''
			}
		} catch (e) {
			console.error(e)
		} finally {
			coordinateInput = ''
		}
	}

	const handleDelInputCoordinate = () => {
		coordinateInput = ''
	}

	const handleAddMultipleCoordinate = () => {
		try {
			const result = coordinateTextarea
				.split('\n')
				.map(handleCoordinate)
				.filter(el => !!el)

			console.log(result)
			coordinates = [...coordinates, ...result]
			onChange()
		} catch (e) {
			console.error(e)
		} finally {
			coordinateTextarea = ''
		}
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

	$: f = coordinate => {
		try {
			return formatToString(changeProjection(coordinate), format)
		} catch (e) {
			console.error(e)
			return ''
		}
	}
</script>

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
			<PointsInput bind:value={coordinateTextarea} on:add={handleAddMultipleCoordinate} on:del={handleDeleteMultipleCoordinate} />
		</div>
	{/if}

	<!-- point input -->

	{#if !multiple}
		<div class="row">
			<PointInput bind:value={coordinateInput} on:add={handleAddCoordinate} on:del={handleDelInputCoordinate} />
		</div>
	{/if}

	<!-- point coordinates -->

	{#if coordinates && coordinates.length && coordinates.length > 0}
		<div class="multiplerows">
			{#each coordinates as coordinate, i}
				<div>
					<PointInput value={f(coordinate)} disabled={true} on:del={handleDelCoordinate(i)} />
				</div>
			{/each}
		</div>
	{/if}

	<!-- cursor coordinates -->

	{#if coordinate}
		<div class="row">
			<div>{f(coordinate)}</div>
		</div>
	{/if}

	<!-- buferization -->

	{#if bufferization}
		<div class="row">
			<div>Буферизация</div>
			<input bind:value={buffer} class="input" on:change={onChange} type="number" step="any" />
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
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
	.component {
		@apply p-6 border border-black rounded-lg text-2xl !important;
		width: 35rem !important;
		max-height: 50rem !important;
		overflow-y: auto !important;

		& > * {
			@apply mb-6 !important;

			&:last-child {
				@apply mb-0 !important;
			}
		}
	}

	.row {
		@apply flex flex-row justify-between !important;

		& > * {
			@apply mr-6 !important;
			&:last-child {
				@apply mr-0 !important;
			}
		}
	}

	.multiplerows {
		@apply flex flex-col !important;

		& > * {
			@apply mb-1 !important;
			&:last-child {
				@apply mb-0 !important;
			}
		}
	}

	.input {
		@apply border border-solid border-gray-500 rounded-sm pl-3 flex-auto w-0 !important;
	}
</style>
