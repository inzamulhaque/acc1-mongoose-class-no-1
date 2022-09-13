const Product = require("../models/Product");

module.exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

module.exports.createProductService = async (data) => {
  return await Product.create(data);
};
