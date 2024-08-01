const JWT = require("jsonwebtoken");

module.exports = async(req,res,next)=>{
    try{
        const token = req.headers["authorization"].split(" ")[1];
        JWT.verify(
            token,
            process.env.JWT_SECRET,
            (err,decode)=>{
                if(err){
                    res.status(401).json({
                        success:false,
                        message:"Auth Failed"
                    })
                }else{
                    req.body.userId = decode.userId;
                    next();
                }
            }
        )
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Authentication Failed"
        })
    }
}