"use strict";

//key !dmdg install by Mongo Snippets for Node-js
const { model, Schema } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Product";
const COLLECTION_NAME = "Products";

// Declare the Schema of the Mongo model
const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_thumb: {
        type: String,
        required: true,
      },
    product_description: {
      type: String,
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_quantity: {
        type: Number,
        required: true,
    },
    product_type: {
        type: String,
        required: true,
        enum: ['Electronic', 'Clothing', 'Furniture']
    },
    product_shop: {
        type: Schema.Types.ObjectId, 
        ref: 'Shop'
    },
    product_attributes: {
        type: Schema.Types.Mixed, 
        require: true
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);


// define the product type = clothing
const clothingSchema = new Schema({
    brand:{
        type: String,
        require: true
    },
    size: String,
    material: String,   
    product_shop:{ type: Schema.Types.ObjectId, ref: 'Shop'},
},{
    collection: 'clothes',
    timestamps: true
})

// define the product type = electronic
const electronicSchema = new Schema({
    manufacturer:{
        type: String,
        require: true
    },
    model: String,
    color: String,
    product_shop:{ type: Schema.Types.ObjectId, ref: 'Shop'},
},{
    collection: 'electronics',
    timestamps: true
})




//Export the model
module.exports = {
    product:model(DOCUMENT_NAME, productSchema),
    electronic:model('Electronic', electronicSchema),
    clothing:model('Clothing', clothingSchema),
}
