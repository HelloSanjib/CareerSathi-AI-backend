import express from "express"
import { googleAuth, logOut, debugAuth } from "../controllers/auth.controller.js"

const authRouter = express.Router()


authRouter.post("/google",googleAuth)
authRouter.get("/logout",logOut)
authRouter.get("/debug",debugAuth)


export default authRouter