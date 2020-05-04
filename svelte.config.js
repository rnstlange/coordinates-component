const sveltePreprocess = require('svelte-preprocess')
const postcssConfig = require('./postcss.config')

module.exports = {
	preprocess: sveltePreprocess({
		postcss: postcssConfig
	})
}
