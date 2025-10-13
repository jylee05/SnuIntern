import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// import basicSsl from "@vitejs/plugin-basic-ssl"; // https 설정 하기 위해

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react(), basicSsl()],
  plugins: [react()],
});
