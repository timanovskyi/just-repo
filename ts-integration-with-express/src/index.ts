import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./contollers/";
import { AppRouter } from "./app-router";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [""] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log("started port"));
