import express from "express"
import connectDb from "./db/Db.js";
import router from "./routes/user.route.js";

const app = express();

const PORT = process.env.PORT  || 8000 ;


connectDb();


app.use(express.json())



app.use("/api/v1",router)


app.get("/",(req,res)=>{
    res.send("Hello from my user service")
})


app.listen(PORT ,()=> console.log(` User service server started on ${PORT}`))
