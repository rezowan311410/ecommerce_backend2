const mongoose = require('mongoose');
const { Schema } = mongoose;

const variantSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    
    image:{
        type: String,
        required: true,
    },
  
    price:{
       type: Number,
       required: true,
    },
    quantity:{
        type:Number,
        required: true
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },

    store:{
        type:Schema.Types.ObjectId,
        ref:"Store",
    },

    updated:{
        type: Date
    },

    created:{
        type: Date,
        default: Date.now
    },

})




module.exports = mongoose.model("variant",variantSchema)