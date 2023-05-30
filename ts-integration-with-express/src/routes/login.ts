import { Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const loginGetHandler = (req: Request, res: Response) => {
  res.send(
    `
    <form method="POST">
         <div>
            <label>Email</label>
            <input type="email" name="email" id="">  
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" id="">  
        </div>
        <button type="submit">Submit</button>
      </form>
    `
  );
};

const loginPostHandler = (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "t@t" && password === "pass") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
};

export { loginGetHandler, loginPostHandler };
