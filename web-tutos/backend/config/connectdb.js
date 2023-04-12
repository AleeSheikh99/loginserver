import mongoose from "mongoose";

const connectDb = async(DATABASE_URL)=>{
    try {
         const Db_Option = {
            dbName : "CardanoRacing"
         }
         await mongoose.connect(DATABASE_URL, Db_Option)
         console.log("Connected sucessfull......");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;