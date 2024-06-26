import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    start: {ssr: true},
    build: {
        rollupOptions: {
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js'
        }
    }
})

