import express from "express";

import itemsRoutes from "./routes/items.routes.js";
import loginRoutes from "./routes/login.routes.js";
import postsRoutes from "./routes/posts.routes.js";

const app = express();
app.use(itemsRoutes);
app.use(loginRoutes);
app.use(postsRoutes);

app.listen(3000, () => {
  console.log("Server running on port ", 3000);
});
