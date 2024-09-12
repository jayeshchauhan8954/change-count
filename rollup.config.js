import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: './src/index.js',
    output: {
        dir: 'dist',
        format: 'es',
        name: 'change-count',
    },
    external: ['react', 'react-dom'],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react'],
            babelHelpers: 'bundled',
        }),
    ],
});
