const express = require("express");
const { createProduct } = require("../controller/controller.product");

const router = express.Router();


router.route("/").post(createProduct);

module.exports = router;