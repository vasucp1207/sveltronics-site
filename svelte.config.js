import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),

    prerender: {
      entries: ['*'],
      handleMissingId: 'warn',
    },
  },

  package: {
    dir: 'client',
    emitTypes: true,
  },

  preprocess: vitePreprocess()
};

export default config;
