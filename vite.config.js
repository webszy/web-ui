import { defineConfig } from 'vite'
import * as path from 'path'
import Banner from 'vite-plugin-banner'
import {version}from './package.json'
export default defineConfig({
    root: path.resolve(__dirname,'./src'),
    plugins: [
        Banner(`
        * name: @webszy/ui
        * version:${version}
        * time:${new Date().toISOString()}
        `),
    ],
    build: {
        outDir:path.resolve(__dirname,'./dist'),
        target:'es6',
        emptyOutDir:true,
        lib: {
            formats:['umd'],
            entry: path.resolve(__dirname, './src/main.js'),
            name: 'wbLoading',
            fileName: (format) => `web-ui.${format}.js`
        }
    },
    resolve:{
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css:{

    }
})
