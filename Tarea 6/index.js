const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3200;

app.get('/',(req, res)=>{
    res.send("Primer server express");
});

routerApi(app)

app.listen(port, ()=>{
    console.log(`escuchando desde el puerto ${port}`);
});









