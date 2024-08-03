import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB already connected');
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "waterwatch",
            useNewUrlParser: true,
        })

        isConnected = true;

        console.log("Mongo connected");
    } catch (error){
        console.log(error);
    }
}