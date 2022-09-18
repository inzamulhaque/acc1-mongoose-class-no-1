const Product = require("../models/Product");

module.exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

module.exports.createProductService = async (data) => {
  return await Product.create(data);
};

module.exports.updateProductService = async (productId, data) => {
  const result = await Product.updateOne(
    { _id: productId },
    { $set: data },
    { runValidators: true }
  );

  // const product = await Product.findById(productId);
  // const result = await product.set(data).save();
  return result;
};

module.exports.bulkUpdateProductService = async (data) => {
  // const result = await Product.updateMany({ _id: data.ids }, data.data, {
  //   runValidators: true,
  // });
  // console.log(result);
  // return result;

  const products = [];

  data.forEach((product) => {
    products.push(
      Product.updateOne({ _id: product.id }, product.data, {
        runValidators: true,
      })
    );
  });

  const result = await Promise.all(products);
  return result;
};

module.exports.deleteProductByIdService = async (id) => {
  try {
    const result = await Product.deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.bulkDeleteProductService = async (ids) => {
  try {
    console.log(ids);
    const result = await Product.deleteMany({ _id: ids });
    return result;
  } catch (error) {
    console.log(error);
  }
};
