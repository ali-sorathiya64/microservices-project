import express from "express"
import connectDb from "./db/Db.js";
import taskRouter from "./routes/task.route.js";
import { connectRabbitMQWithRetry } from "./service/index.js";

const app = express();

const PORT = process.env.PORT  || 8001 ;


connectDb();


app.use(express.json())



app.use("/api/v1/task",taskRouter);


app.get("/",(req,res)=>{
    res.send("Hello from my side")
})


app.listen(PORT ,async()=> {
   try {
    await connectRabbitMQWithRetry();
   } catch (error) {
    console.error("Failed to connect to RabbitMQ:", error);
   } 

 
    console.log(`task service server started on ${PORT}` ) } )

