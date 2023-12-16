"use strict";

const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const productController = require("../../controllers/product.controller");
const { authenticationV2  } = require("../../auth/authUtils");
const router = express.Router();


//authentication
router.use(authenticationV2);
////////////////
// router.post('/1', ( req, res, next) => {
//     return res.status(200).json({
//         message: 'Welcome to my Shop!nice'
//     })
// });
router.post('', asyncHandler(productController.createProduct));


module.exports = router;
