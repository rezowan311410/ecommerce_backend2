const mongoose = require('mongoose');
const { Schema } = mongoose;

const subcategorySchema= new Schema({
    name:{
        type:String,
        require: true
    }, 

    description:{
        type: String
    },
    isActive:{
        type: Boolean,
        default:false
    },

    status:{
        type: String,
        default: "waiting",
        enum:["approved","rejected","waiting"]
    },

    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
    },
   
    updated:{
        type: Date
    },
    created:{
        type: Date,
        default: Date.now
    },
    
});


module.exports = mongoose.model("subCategory",subcategorySchema)
