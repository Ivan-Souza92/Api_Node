const app = require('./config/server');
const mongoose = require('mongoose');

//Conecta ao Banco de Dados
mongoose.connect('mongodb+srv://ivan2:ivan@ndstr.9ib6r.mongodb.net/ndstr?retryWrites=true&w=majority',{useNewUrlParser: true})


//Carregas os models
const Product = require('./src/models/Product')
const Customer = require('./src/models/Customer')
const Order = require('./src/models/Order');


//Carregar rotas
const index = require('./src/routes/index');
const productRoute = require('./src/routes/product');
const customerRoute = require('./src/routes/customer');
const orderRoute = require('./src/routes/order');

app.use('/', index);
app.use('/products', productRoute );
app.use('/customers', customerRoute );
app.use('/orders', orderRoute );


app.listen(3000, () => {

    console.log('Servidor On');
})

module.exports = app ;

