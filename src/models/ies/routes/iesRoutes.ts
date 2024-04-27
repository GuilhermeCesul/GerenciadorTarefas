import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { iesControllers } from "../controllers/iesControllers";

export const iesRoutes = (fastify: FastifyInstance, options: RouteShorthandOptions, done: () => void) => {
    fastify.register(iesControllers)
    done();
}
