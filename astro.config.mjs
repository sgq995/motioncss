import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://motioncss.com',
  integrations: [
    tailwind(),
    solidJs(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
