require('dotenv').config
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.API_PORT;

const usuarioRouter=require('./routers/UsuarioRoutes')
app.use('/usuarios',usuarioRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
