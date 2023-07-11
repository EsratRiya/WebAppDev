const { getAllProducts, getOneProduct, storeProduct, updateProduct , deleteProduct , deleteAllProducts} = require('../controllers/products.controller');

const router = require('express').Router();

router.get("/", getAllProducts);

router.get("/:id([0-9]+)", getOneProduct);

router.post("/", storeProduct);

router.put("/:id([0-9]+)", updateProduct);

router.delete("/:id([0-9]+)", deleteProduct);

router.delete("/", deleteAllProducts);

module.exports = router;