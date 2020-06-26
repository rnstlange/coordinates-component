const app = new CoordinatesComponent({
	target: document.body,
	props: {
		multiple: true,
		multitool: true,
		bufferization: true
	}
})

app.$on('change', e => console.log(e.detail))
