const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        default: 0,
        
      },
      title: {
        type: String,
      },
      productCode: {
        type: String,
      },
    },
  ],
 
});

module.exports = mongoose.model("Cart", cartSchema);