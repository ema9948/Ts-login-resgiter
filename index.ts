import express from "express"
import userRoute from "./router/user"
import "dotenv/config"
import  "./db/config"
import cors from "cors"
const app= express()

app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/api/user/",userRoute)

const PORT:number = 5000 || process.env.PORT

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`))
