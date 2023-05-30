import { RequestHandler } from "express";

export interface RouteHandlerDescriptorModel extends PropertyDescriptor {
  value?: RequestHandler;
}
