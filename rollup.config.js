import pkg from './package.json'

import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import strip from '@rollup/plugin-strip'
import { terser } from 'rollup-plugin-terser'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase())

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/index.js',
	output: [
		{
			sourcemap: true,
			format: 'esm',
			file: pkg.module
		},
		{
			sourcemap: true,
			format: 'iife',
			name,
			file: pkg.main
		}
	],
	plugins: [
		svelte({
			dev: !production,
			format: 'esm',
			immutable: true,
			hydratable: true,
			accessors: true,
			preprocess: sveltePreprocess({ postcss: true }),
			css: true
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		!production && serve(),
		!production && livereload('build'),

		production && strip(),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}

function serve() {
	let started = false

	return {
		writeBundle() {
			if (!started) {
				started = true

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				})
			}
		}
	}
}
