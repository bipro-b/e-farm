const express = require("express");
const {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
  bulkUpdateProduct,
  deleteProductById,
  bulkDeleteProduct,
} = require("../controller/controller.product");

const router = express.Router();

router.route("/:bulk-update").put(bulkUpdateProduct);
router.route("/:bulk-delete").put(bulkDeleteProduct);


router.route("/:id").get(getProductById);
router.route("/:id").put(updateProductById);
router.route("/:id").delete(deleteProductById);

router.route("/").post(createProduct);
router.route("/").get(getProduct);

module.exports = router;
