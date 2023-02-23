const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
   store: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
      unique: true,
    },
    qty: {
      type: Number,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    sold:{
      type:Number,
      default:0
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)