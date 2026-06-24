import mongoose from "mongoose";

export let lastDbError = null;

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected")
        lastDbError = null;
    } catch (error) {
        console.log(`DataBase Error ${error}`)
        lastDbError = error.message || String(error);
    }
}

export default connectDb