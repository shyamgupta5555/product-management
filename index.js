const express = require("express");
const app = express();
const route = require("./routes/mainRoutes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerAPI/swagger.json'); 

require("dotenv").config();

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api",route)

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application Running on PORT :${PORT}`);
});
