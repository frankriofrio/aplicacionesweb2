const booksRouter = require("./books.router.js");
const authorsRouter = require("./authors.router.js");
const operationRouter = require("./operation.router");
const express = require('express')
const routerApi = (app) => {
    const route = express.Router();
    app.use('/api/v1', route)
  route.use("/books", booksRouter);
  route.use("/authors", authorsRouter);
  route.use("/operation", operationRouter);
};

module.exports = routerApi;
