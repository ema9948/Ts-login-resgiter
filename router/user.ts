import { Router} from "express"
import { login, register } from "../controller/userController"

const userRoute:Router = Router()

userRoute.post("/login",login)
userRoute.post("/register",register)

export default userRoute