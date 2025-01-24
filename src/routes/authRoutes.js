import { Router } from "express";
import { Signup, Signin } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", Signup);
authRouter.post("/signin", Signin);

export default authRouter;