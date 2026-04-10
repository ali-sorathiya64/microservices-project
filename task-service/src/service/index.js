import amqb from "amqplib"

let channel,connection;

export const connectRabbitMQWithRetry =async(retries = 5 , delay = 3000)=>{


    while(retries){
        try{
            connection = await amqb.connect("amqp://rabbitmq"); //  connection 
            channel = await connection.createChannel(); //  creating a channel of a conncection
            await channel.assertQueue("task_created"); // task created queue exist if it's not the assertqueue will connect
            console.log("RabbitMQ Connected");
            return;
        }
        catch(error){
            console.error("Rbbit mq connection error");
            console.log(error);
            retries--;
            console.log("Rabbit MQ conncection error " + retries);
            await new Promise(res => setTimeout(res,delay));
        }
    }

  

}


  export const getChannel =()=>{
        if(!channel){
            throw new Error("No channel initialized");
        }

        return channel;
    }