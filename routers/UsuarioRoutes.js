const express=require('express')
const router=express.Router();

const {listarUsuarios,findByemail,createUsuario,deleteUsuario,atualizarUsuario} = 
require('../controller/usuarioController');

router.get('/',listarUsuarios);
router.get('/:email',findByemail);
router.post('/',createUsuario)
router.delete('/',deleteUsuario)
router.patch('/',atualizarUsuario)

module.exports=router;