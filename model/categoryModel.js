const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema= new Schema({
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
    subCategory:[
    {
        type:Schema.Types.ObjectId,
        ref:"subCategory",
    }
],
    updated:{
        type: Date
    },
    created:{
        type: Date,
        default: Date.now
    },
    
});


module.exports = mongoose.model("Category",categorySchema)
