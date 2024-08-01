const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const JWT = require("jsonwebtoken");

const signupController = async(req,res)=>{
    try{
        // const {email,password} = req.body;
        const existUser = await User.findOne({email:req.body.email});
        if(existUser){
            res.status(200).json({
                success:false,
                message:"User already Exists"
            })
        }
        const salt = await bcryptjs.genSaltSync(10);
        const hashedPassword = await bcryptjs.hash(req.body.password,salt);
        req.body.password=hashedPassword;
        const user = await User.create(req.body);
        // user.password=undefined;
        res.status(201).json({
            success:true,
            message:"User registered successfully..",
            user
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Error in registering user",
            e
        })
    }
}

const loginController = async(req,res)=>{
    try{
        // const {email,password} = req.body;
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(404).json({
                success:false,
                message:"Invalid Credentials",
            })    
        }
         //check role
       if(user.role != req.body.role) {
        return res.status(500).send({
          success: false,
          message: "role doesn't match",
        });
      }
        const comparePswd = await bcryptjs.compare(req.body.password,user.password);
        if(!comparePswd){
            res.status(500).json({
                success:false,
                message:"Invalid Credentials",
            })    
        }
        const token = JWT.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )
        res.status(200).json({
            success:true,
            message:"Login successfully",
            token,user
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Error in user login",
            e
        })

    }
}

const currentUserController = async(req,res)=>{
    try {
        const user = await User.findOne({ _id: req.body.userId });
        return res.status(200).send({
          success: true,
          message: "User Fetched Successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "Unable to get current user",
          error,
        });
      }

}

module.exports = {signupController,loginController,currentUserController}