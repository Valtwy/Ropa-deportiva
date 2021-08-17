const { Router } = require("express");
const router = require("express")
let router = express.Router();
const productosController = require("../controllers/productosController")

Router.get("./", productosController.index)

Router.get("./carrito", productosController.carrito)

Router.get("./detalle", productosController.detalle)

Router.get("./login", productosController.login)

Router.get("./register", productosController.register)

Router.get("./create", productosController.create)

module.exports = router 