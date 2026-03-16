const http = require('http');
const path = require('path');

const express = require('express');

// const db = require('./util/database.js')
const sequelize = require('./util/database.js')
const Product = require('./models/product.js');
const User = require('./models/user.js');
const Cart = require('./models/cart.js');
const CartItem = require('./models/cart-item.js');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

// const { engine } = require('express-handlebars');
const app = express();
// app.engine('handlebars', engine()); // used to register view engine that are not built in


const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const errorController = require('./controllers/error.js');

app.set('view engine', 'ejs');  //sets global config variables, pug and ejs registered itself a
app.set('views', 'views');

// db.execute('SELECT * from products')
// .then((result) => {
// console.log(result[0]);
// })
// .catch(err => {
//     console.log(err);
// });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded()); // it doesn't parse all kind of body but converts form inputs into node.js objects

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminData);


app.use(errorController.get404);
// const server = http.createServer(app);
// server.listen(4000);
//above 2 lines equivalently

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
