import { defineConfig } from 'vite'
import * as path from 'path'
export default defineConfig({
    root: path.resolve(__dirname,'./src'),
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
