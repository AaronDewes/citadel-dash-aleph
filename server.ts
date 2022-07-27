import { serve } from "https://deno.land/x/aleph@1.0.0-alpha.90/server/mod.ts";
import ssr from "https://deno.land/x/aleph@1.0.0-alpha.90/runtime/react/ssr.ts";
import routes from "./routes/_export.ts";

serve({
  baseUrl: import.meta.url,
  router: {
    glob: "./routes/**/*.{tsx,ts}",
    routes,
  },
  unocss: "preset",
  ssr,
  dev: {
    reactRefresh: true,
  },
});
