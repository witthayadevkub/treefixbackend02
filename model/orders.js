const mongoose = require('mongoose');

const OderSchema = new mongoose.Schema(
  {
    customer: {
        type: String,
        require: true,
      },

    alloder: {
      type: Array,
      require: true,
    },
    updateOne:{
      type: Array,
      require: true,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Oder', OderSchema)