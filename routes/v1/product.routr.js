const express = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  bulkUpdateProduct,
  deleteProductByID,
  bulkDeleteProduct,
} = require("../../controllers/product.controller");
const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.route("/bulk-update").patch(bulkUpdateProduct);
router.route("/bulk-delete").delete(bulkDeleteProduct);

router.route("/:id").patch(updateProduct).delete(deleteProductByID);

module.exports = router;
