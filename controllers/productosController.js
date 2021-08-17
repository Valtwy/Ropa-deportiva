const controlador = {
index: (req,res) => {
    res.send("\views\home.ejs");
},
detalle: (req,res) => {
    res.send("\views\products\detalle.ejs");
},
carrito: (req,res) => {
    res.send("\views\products\carrito.ejs");
},
login: (req,res) => {
    res.send("\views\products\login.ejs");

},
register: (req,res) => {
    res.send("\views\products\register.ejs");
},
create: (req,res) => {
    res.send("\views\products\create.ejs");
}
}
module.exports = controlador