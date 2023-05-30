import { Request, Response } from "express";

const logoutGetHandler = (req: Request, res: Response) => {
  req.session = undefined;

  res.redirect("/");
};

export { logoutGetHandler };
