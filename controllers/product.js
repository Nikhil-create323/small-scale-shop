const Product = require("../model/product");


exports.getAddProducts = (req, res, next) => {
    console.log("into middleware"); 
    // for error 404
    // res.status(404).send('<h1>page not found</h1>');

    // normal execution
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 
    
    res.render('edit-product' ,{pageTitle : "add-product", path: 'edit-product'}); 
    //replaced __dirname, '..' with rootDir
    
    // next(); //allows request to continue to another middlewares
}

exports.postAddProducts = (req, res, next) => { // instead of use use post and get for the given path according to the request method
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
        Product.fetchAll(products => {
            res.render('shop', {prods: products , pageTitle: 'Shop'});
        });
         //allows to send body of type any
    }


