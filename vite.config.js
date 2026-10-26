
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { pizzas } from "./src/pizzas.js";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "pizza-api-local",

      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url, "http://localhost");

          const match = url.pathname.match(
            /^\/api\/pizzas\/([^/]+)\/?$/
          );

          if (!match) {
            return next();
          }

          const id = decodeURIComponent(match[1]);

          const pizza = pizzas.find(
            (item) =>
              item.id.toLowerCase() === id.toLowerCase()
          );

          res.setHeader(
            "Content-Type",
            "application/json; charset=utf-8"
          );

          if (!pizza) {
            res.statusCode = 404;
            res.end(
              JSON.stringify({ error: "Pizza no encontrada" })
            );
            return;
          }

          res.statusCode = 200;
          res.end(JSON.stringify(pizza));
        });
      },
    },
  ],
});
