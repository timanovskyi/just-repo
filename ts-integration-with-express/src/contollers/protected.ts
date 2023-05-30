import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";

@controller("")
class ProtectedController {
  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send("Welcome to protected route, logged in user");
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}
