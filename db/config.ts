import mongoose from "mongoose";
import "dotenv/config"

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.URI}`).then(()=> console.log("DB OK"))

