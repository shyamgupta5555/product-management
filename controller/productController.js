const { Product } = require("../models");
const path = require("path");
const { Op } = require("sequelize");
const {productSchema ,updateProductSchema} = require("../services/helper")


exports.CreateProducts = async (req, res) => {
  try {
    const { productName, description, price, quantity, status } = req.body;

    let validation = await productSchema.validateAsync({productName, description, price, quantity, status});

    const type = req.fileType;

    if (req.fileType) {
      if (type) {
        let types = type.split("/")[1];
        return res.status(400).send({
          status: false,
          message: `Allow images only of extensions jpeg|jpg|png Not Allow Extension ${types} !`,
        });
      }
    }
   

    let imagePath = req.file
      ? `uploads/${req.file.filename}`
      : "uploads/default-image.jpg";

    let obj = {
      productName: productName || "",
      description: description || "",
      price: price,
      quantity: quantity,
      status: status || "active",
      image: imagePath,
    };

    const newProduct = await Product.create(obj);

    return res.status(201).json({
      status: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    if (error.isJoi == true) {
      return res.status(400).send({ status: false, message: error.message });
    }
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.UpdateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, description, price, quantity, status } = req.body;

    let validation = await updateProductSchema.validateAsync({productName, description});

    let imagePath = req.file ? req.file.path : undefined;

    const FindProduct = await Product.findByPk(id);

    if (!FindProduct) {
      return res
        .status(404)
        .json({ status: false, message: "Product not found" });
    }
    let obj = {};

    if (req.fileType) {
      const type = req.fileType;
      if (type) {
        let types = type.split("/")[1];
        return res.status(400).send({
          status: false,
          message: `Allow images only of extensions jpeg|jpg|pngNot Allow Extension ${types} !`,
        });
      }
    }

    if (productName) {
      obj.productName = productName;
    }
    if (description) {
      obj.description = description;
    }
    if (price) {
      obj.price = price;
    }
    if (quantity) {
      obj.quantity = quantity;
    }
    if (imagePath) {
      let imagePaths = req.file
        ? `uploads/${req.file.filename}`
        : "uploads/default-image.jpg";
      obj.imagePath = imagePaths;
    }
    if (status) {
      obj.status = status;
    }
    await FindProduct.update(obj);

    return res
      .status(200)
      .json({ status: true, message: "Product updated successfully" });
  } catch (error) {
    if (error.isJoi == true) {
      return res.status(400).send({ status: false, message: error.message });
    }
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.GetProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const FindProduct = await Product.findByPk(id);

    if (!FindProduct) {
      return res
        .status(404)
        .json({ status: false, message: "Product not found" });
    }

    return res.status(200).json(FindProduct);
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.FindAllListProduct = async (req, res) => {
  try {
    const { name, quantityMin, quantityMax } = req.query;
    const where = { status: "active" };

    if (name) {
      where.productName = { [Op.like]: `%${name}%` };
    }

    if (quantityMin || quantityMax) {
      where.quantity = {
        ...(quantityMin ? { [Op.gte]: Number(quantityMin) } : {}),
        ...(quantityMax ? { [Op.lte]: Number(quantityMax) } : {}),
      };
    }

    const products = await Product.findAll({ where });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.DeleteProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not found" });
    }

    await product.destroy();

    return res
      .status(200)
      .json({ status: true, message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
