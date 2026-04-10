import {Task} from "../model/taskModel.js";
import { connectRabbitMQWithRetry, getChannel } from "../service/index.js";

export const createTask =async(req,res)=>{

    const {title,description,userId}  = req.body;

    try {

        if (!title || !description){
          return res.status(404).json({
            success:false,
            message:"Please fill all the details"
          })
        }

      const task = await Task.create({
    title, description,userId
      })

      const message = {
            taskId: task._id,
            userId,
            title
        };

    
   let channel;

        try {
            channel = getChannel(); 
        } catch (err) {
            return res.status(503).json({
                success: false,
                message: "RabbitMQ not connected"
            });
        }

        channel.sendToQueue(
            "task_created",
            Buffer.from(JSON.stringify(message))
        );
     


      return res.status(200).json({
        task
      })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error
        })
    }


}

export const getTasks =async (req,res) =>{

    try{
        const task = await Task.find();




        return res.status(201).json({
         task
        })


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }



}