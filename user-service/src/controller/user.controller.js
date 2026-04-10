import { User } from "../model/userModel.js"

export const userCreate = async(req,res)=>{

    const {name , email} = req.body;


    try{
    if (!name || ! email){
        return res.status(400).json({
            success:false,
            message:"Please fill all the details"
        })
    }


        const user = await User.create({
            name,
            email
        })

        return res.status(200).json({
            user,

            success:true,
            message:"User created successfully"
        })
    


    
    }

    catch(error){
        return res.status(500).json({
            success:false,
            message:error
        })
    }


    

}

export const getUsers=async(req,res)=>{

    try{

        const user =  await User.find();

        res.status(200).json({
            success:true,
            Users :user
        })


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}