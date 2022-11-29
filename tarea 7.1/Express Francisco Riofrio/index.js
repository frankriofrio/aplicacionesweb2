const express = require("express");
const routerApi = require("./routes/index");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Primer Servidor Express por Francisco Riofrio");
});

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log(`Escuchando por el puerto ${port}`);
});
