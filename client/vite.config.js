import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api/v1': {
  //       target: 'http://localhost:7000', // Backend server URL
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/v1/, '')
  //     }
  //   }
  // }
});

// https://vitejs.dev/config/
// export default defineConfig(({ mode })=>{
//   const env = loadEnv(mode, process.cwd(), '');
//   return{
//     // define:{
//     //   'process.env.REACT_APP_BASEURL':JSON.stringify(env.REACT_APP_BASEURL)
//     // },
//     plugins: [react()],
//     server: {
//       proxy: {
//         '/api/v1': {
//           target: 'http://localhost:3000', // Change this to your backend server URL
//           changeOrigin: true,
//           secure: false,
//           rewrite: (path) => path.replace(/^\/api\/v1/, '')
//         }
//       }
//     }
//   }
  
// })

// esbuild: {
//   loader: 'jsx',
//   include: /.*\.js$/,
// }
