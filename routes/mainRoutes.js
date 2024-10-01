const router = require("express").Router();
const {
  CreateProducts,
  FindAllListProduct,
  UpdateProducts,GetProductById,DeleteProductsById
} = require("../controller/productController");
const { upload } = require("../services/uploadFile");

router.post("/product", upload.single("image"), CreateProducts);
router.put("/product/:id",upload.single("image"), UpdateProducts);
router.get("/product/:id", GetProductById);
router.get("/product", FindAllListProduct);
router.delete("/product/:id", DeleteProductsById);

router.all("/*", (req, res) => {
  return res.status(400).send({ status: false, message: "Invalid Request!" });
});

module.exports = router;
