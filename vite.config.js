import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    ViteStaticCopy({
      targets: [
        {
          src: "_redirects",
          dest: "",
        },
      ],
    }),
  ],
});
