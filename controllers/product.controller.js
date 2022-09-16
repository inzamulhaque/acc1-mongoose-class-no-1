const {
  getProductsService,
  createProductService,
  updateProductService,
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
