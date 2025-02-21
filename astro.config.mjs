import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';
import dotenv from 'dotenv';
import partytown from '@astrojs/partytown'

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],
  devToolbar: {
    enabled: false
  },
  output: 'server',
  adapter: netlify()
});