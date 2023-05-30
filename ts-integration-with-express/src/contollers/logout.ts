import { Request, Response } from "express";
import { controller, get } from "./decorators";

@controller("")
class LogoutController {
  @get("/logout")
  getLogout(req: Request, res: Response): void {
    req.session = undefined;

    res.redirect("/");
  }
}
