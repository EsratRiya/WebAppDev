const Product = require("../models/products.model");


// get all products
const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// get one product with id
const getOneProduct = async (req, res) => {
    try {
      const product = await Product.findOne({ id: req.params.id });
      res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// create product
const storeProduct = async (req, res) => {
    try {
      const newProduct = new Product({
        id: Number(req.body.id),
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description,
      });
      await newProduct.save();
      res.status(201).send("New Product added");
    } catch (error) {
      res.status(500).send(error.message);
    }
};
  

// update product
const updateProduct = async (req, res) => {
    try {
      const product = await Product.findOne({ id: req.params.id });
      product.name = req.body.name;
      product.price = req.body.price;
      product.description = req.body.description;
      
      await product.save();
      res.status(200).send("Product information updated");
    } catch (error) {
      res.status(500).send(error.message);
    }
};

// delete product
const deleteProduct = async (req, res) => {
    try {
      await Product.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "Product is deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
};

// delete all products
const deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany();
      res.status(200).json({ message: "All Products are deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
};

module.exports = {getAllProducts,getOneProduct,storeProduct,updateProduct,deleteProduct,deleteAllProducts}