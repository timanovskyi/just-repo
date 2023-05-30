import { Router } from "express";
import { loginGetHandler, loginPostHandler } from "./login";
import { homeGetHandler } from "./home";
import { logoutGetHandler } from "./logout";
import { protectedGetHandler, requireAuth } from "./protected";

const router = Router();

router.get("/login", loginGetHandler);
router.post("/login", loginPostHandler);
router.get("/logout", logoutGetHandler);
router.get("/", homeGetHandler);
router.get("/protected", requireAuth, protectedGetHandler);
export { router };
