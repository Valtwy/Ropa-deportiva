const controlador = {

detalle: (req,res) => {
    res.render("\products\detalle.ejs");
},
carrito: (req,res) => {
    res.render("\products\carrito.ejs");
},
create: (req,res) => {
    res.render("\products\create.ejs");
}
}

module.exports = controlador