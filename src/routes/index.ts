import { Router } from "express";

import { movieRoutes } from "./movie.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);

export { routes };
