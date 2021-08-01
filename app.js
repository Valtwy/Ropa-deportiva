const express=require("express");
const app= express();
const port=3030;
const path=require('path');

app.use(express.static("public"))

app.get("/",function (req, res) {
    res.sendFile(path.join(__dirname, "/views/template.html"))
})

app.get("/",function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/carrito', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'));
});

app.get('/detalle.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/detalle.html'));
});

app.listen(port, () => 
console.log("Levantando un servidor con Express en el puerto"+port)
)
