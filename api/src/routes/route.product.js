const express = require("express");
const {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
} = require("../controller/controller.product");

const router = express.Router();

router.route("/:id").get(getProductById);
router.route("/:id").put(updateProductById);

router.route("/").post(createProduct);
router.route("/").get(getProduct);

module.exports = router;
