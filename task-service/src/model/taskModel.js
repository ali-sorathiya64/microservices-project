import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    userId: {
        type:String,
        unique:true,
    },
    createdAT:{
        type:Date,
        default:Date.now(),
    }
})


export const Task = mongoose.model("task",taskSchema);
