import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflex-Clone-2024/",
  build: {
    outDir: "dist",
  },
});


// import { defineConfig } from "vite";
// export default defineConfig({
//   server: {
//     host: true, // binds to 0.0.0.0 and localhost
//     port: 5173,
//     strictPort: true, // fail if busy instead of silently switching
//     open: "/Amazon_clone/", // auto-open the right path
//   },
// });


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react()],
//   base: "/Netflix-Clone-2024/",
//   build: {
//     outDir: "dist",
//   },
// });
