import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'assessment',
            filename: 'remoteEntry.js',
            remotes: {
                product: 'http://localhost:3003/assets/remoteEntry.js',
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    }
});
