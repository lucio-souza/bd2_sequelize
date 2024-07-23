require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.API_PORT;

const usuarioRouter=require('./routers/UsuarioRoutes');
const ocorrenciaRouter = require('./routers/OcorrenciaRoutes');

app.use('/usuarios',usuarioRouter);
app.use('/ocorrencia',ocorrenciaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
