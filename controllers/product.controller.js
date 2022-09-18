const {
  getProductsService,
  createProductService,
  updateProductService,
  bulkUpdateProductService,
  deleteProductByIdService,
  bulkDeleteProductService,
} = require("../services/product.services");

module.exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.createProduct = async (req, res, next) => {
  try {
    // save
    // const product = new Product(req.body);
    // const result = await product.save();

    // create
    const result = await createProductService(req.body);
    result.logger();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.bulkUpdateProduct = async (req, res, next) => {
  try {
    const result = await bulkUpdateProductService(req.body);
    res.status(200).send("ok");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.bulkDeleteProduct = async (req, res, next) => {
  try {
    const result = await bulkDeleteProductService(req.body.ids);
    if (!result.deleteCound) {
      return res.status(400).send("invalid id");
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.deleteProductByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductByIdService(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
