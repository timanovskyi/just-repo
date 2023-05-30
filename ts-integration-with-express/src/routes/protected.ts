import { NextFunction, Request, Response } from "express";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

const protectedGetHandler = (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user");
};

export { protectedGetHandler, requireAuth };
