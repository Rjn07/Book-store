import User from "../models/usermodel.js";
import bcrypt, { compare } from 'bcrypt'

export  const signup=async (req,res)=>{
    try {

        const {fullname, email,password}=req.body;
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({message:"email is already exists"})
        }
        const hashPassword=await bcrypt.hash(password,10);
        const createdUser= new User({
            fullname:fullname,
            email:email,
            password:hashPassword
        })
        await createdUser.save()
        res.status(201).json({message:"user created sucessfully"})
        
    } catch (error) {
        console.log("Error :"+error.message)
        res.status(501).json({message:"internal server error"})

        
    }
}
export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            res.status(400).json({messsage:"invalid user"})
        }else{
            res.status(200).json({message:"login sucessfully",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
            })
        }
    } catch (error) {
        console.log("ERROR:"+ error.message);
        res.status(500).json({message:"internal server error"})
        
    }
   
       
    

}