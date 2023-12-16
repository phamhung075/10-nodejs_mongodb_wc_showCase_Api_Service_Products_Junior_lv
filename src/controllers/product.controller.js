"use strict";

const ProductService = require("../services/product.service");
const { SuccessResponse } = require("../core/success.response");

class ProductController {

    createProduct = async (req, res, next) => {
        console.log("req.user::"+JSON.stringify(req.user))
        new SuccessResponse({
            message: 'Create new product success',
            metadata: await ProductService.createProduct(req.body.product_type, { 
                ...req.body,
                product_shop: req.user.userId, //authUtils.js             req.user = decodeUser;
            })
        }).send(res)
    }
}

module.exports = new ProductController();
