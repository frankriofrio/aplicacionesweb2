const express =  require ('express');


const route = express.Router();

route.get('/', (req, res) =>{
    const {limit, offset} = req.query
    res.json({
        offset: offset,
        limit: limit,
        name: "Jeans",
        author: "Van Dame",
    });
})

module.exports = route;
