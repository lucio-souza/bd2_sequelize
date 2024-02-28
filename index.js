const express = require('express');
const {listarUsuarios,findByemail,createUsuario}=require('./controller/usuarioController');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/usuarios',listarUsuarios);
app.get('/usuarios/:email',findByemail);
app.post('/usuarios',createUsuario)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

