import { Router } from "express";
import express from "express";

export class AppRouter {
  public static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}
