const express = require('express')
const bodyParser=require('body-parser');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname)); 

let routes=require('./routes/index')
app.use('/', routes);

var port =process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is listening this ${port}`);
});