import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-glassy-blog.com',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});