import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB already connected');
        return;
    }
    
    try{
        await mongoose.connect("mongodb+srv://atulitgaur:sanjayashaS28@cluster0.zbmbdhh.mongodb.net/diyakeliye", {
            dbName: "waterwatch",
            useNewUrlParser: true,
        })

        isConnected = true;

        console.log("Mongo connected");
    } catch (error){
        console.log(error);
    }
}