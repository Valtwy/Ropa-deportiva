const controlador = {
    login: (req,res) => {
        res.render("\products\login.ejs");
    
    },
    register: (req,res) => {
        res.render("\products\register.ejs");
    }
    }
    
    module.exports = controlador