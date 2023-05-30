import "reflect-metadata";
import {
  MetadataKeys,
  Methods,
  RouteHandlerDescriptorModel,
} from "../../models";

function routerBinder(method: string) {
  return function (path: string) {
    return function (
      target: any,
      key: string,
      desc: RouteHandlerDescriptorModel
    ) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.GET);
export const post = routerBinder(Methods.POST);
