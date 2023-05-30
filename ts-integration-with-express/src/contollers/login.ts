import { Request, Response } from "express";
import { controller, get, post, requiredProps } from "./decorators";

@controller("")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(
      `
    <form method="POST">
         <div>
            <label>Email</label>
            <input type="email" name="email">
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    `
    );
  }

  @post("/login")
  @requiredProps("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (email === "t@t" && password === "pass") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }
}
