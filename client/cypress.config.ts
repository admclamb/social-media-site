import { defineConfig } from "cypress";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl,
  },
});

export {};
