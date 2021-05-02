const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path');

//swagger 
const swaggerUI=require('swagger-ui-express');
const swaggerDocument=require('./swagger.json');
const swaggerOptions ={
    explorer:true
};


//middleware , gör att den acceptera alla methoder, origins och headers
app.use(cors());

// middleware från express som tolkar json payload och url-encoded  payload
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// middleware att för mapp med produktbilder tillgängliga 
// Länk till bilder http://127.0.0.1:9998/images/a00001.jpg

app.use('/prodimages',express.static(path.join(__dirname, 'prod_img')));

// länken till swaggerdokument
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

// controllers (api/auth)
app.use('/api/auth', require('./controllers/authController'))

// controllers (/api/products)
app.use('/api/products', require('./controllers/productController'))



module.exports = app 