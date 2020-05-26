const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.html', './src/**/*.svelte'],
	whitelistPatterns: [/svelte-/, /html/, /body/, /input/, /select/, /button/],
	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

const cssnano = require('cssnano')({
	preset: 'default'
})

const production = !process.env.ROLLUP_WATCH

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('postcss-import'),
		require('autoprefixer'),
		...(production ? [purgecss, cssnano] : [])
	]
}
