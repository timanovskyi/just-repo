import { RequestHandler } from "express";

export function bodyValidator(keys: string[]): RequestHandler {
  return function (req, res, next) {
    if (!req.body) {
      res.status(422).send("Invalid request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`missing property ${key}`);
        return;
      }
    }

    next();
  };
}