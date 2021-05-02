const app = require('./app')
const _dbConnect = require('mongoose')


require('dotenv').config();

const port = process.env.WEB_PORT || 9998;


app.listen(port, () => console.log(`webserver at: ${process.env.WEB_URL}:${port}`))


_dbConnect
    .connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('mongodb Butique connected.'))
    .catch(err => console.log(err.stack));
