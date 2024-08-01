const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to MONGODB ${mongoose.connection.host}`.bgGreen.white);
    }catch(e){
        console.log(`Database connectivity error ${e}`.bgRed.white)
    }
}

module.exports=dbConnect;