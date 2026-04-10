import mongoose from "mongoose";

const connection_string ="mongodb://mongo:27017/task-service";


const connectDb =async ()=>{


     try{

    await mongoose.connect(connection_string)

    console.log("Database Connected  successfully")
     }
     catch(error){
        console.log("Issue in connection")
        process.exit(1)
     }
    
}

export default connectDb;



