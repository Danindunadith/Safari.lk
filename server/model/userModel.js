import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    

})

export default mongoose.model("User",userSchema);