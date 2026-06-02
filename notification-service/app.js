

import amqp from "amqplib"

let connection,channel;

const start =   async(retries=5, delay=5000)=>{

    try {
        connection = await amqp.connect("amqp://rabbitmq")
        channel = await connection.createChannel();
        
        await channel.assertQueue("task-created");
        console.log('Notification service is listening to messages');
        channel.consume("task_created",(msg)=>{
            const taskData = JSON.parse(msg.content.toString());
            console.log("Notification new task : " + taskData.title);
            console.log("Notification new task : " + taskData);
            channel.ack(msg);
        })
        
    } catch (error) {
        console.error("RabbitMQ Connection error : " + error);
    }
    
}
start();