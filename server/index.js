import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'
dotenv.config();

const app = express()
app.use(cors())
// app.use(
//    express.urlencoded({ extended: true })
// );
app.use(express.json({ limit: "50mb" }))

app.get('/', (req, res) => {
   res.send({ message: "hello from realState Backend server..." })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/properties', propertyRouter)

const startServer = async () => {
   try {
      // connect to database
      connectDB(process.env.MONGODB_URL)

      app.listen(8080, () => console.log("Server on port: http://localhost:8080 and https://refine-real-estate.onrender.com"))
   } catch (error) {
      console.log(error)
   }
}

startServer()