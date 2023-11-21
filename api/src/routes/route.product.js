const express = require("express");
const {
  createProduct,
  getProduct,
  getProductById,
} = require("../controller/controller.product");

const router = express.Router();

router.route("/:id").get(getProductById);
router.route("/").post(createProduct);
router.route("/").get(getProduct);

module.exports = router;
