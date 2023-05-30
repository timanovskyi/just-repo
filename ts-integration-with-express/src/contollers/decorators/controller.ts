import "reflect-metadata";
import { AppRouter } from "../../app-router";
import { MetadataKeys, Methods } from "../../models";
import { bodyValidator } from "../utils";

export function controller(routerPrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );
      const method = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      ) as Methods;
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        [];

      const requiredProps =
        Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) ||
        [];

      const validator = bodyValidator(requiredProps);
      if (path && method) {
        router[method](
          `${routerPrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    });
  };
}
