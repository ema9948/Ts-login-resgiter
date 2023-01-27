import express from "express"
import userRoute from "./router/user"
import "dotenv/config"
import  "./db/config"
const app= express()

app.use(express.json())
app.use("/api/user/",userRoute)

const PORT:number = 5000 || process.env.PORT

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`))
