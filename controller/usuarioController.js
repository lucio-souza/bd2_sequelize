const Usuario=require('../model/Usuario');
  
const listarUsuarios=async (req,res)=>{
    const usuarios=await Usuario.findAll();
    res.json(usuarios);
}

const findByemail=async (req,res)=>{
    const usuario=await Usuario.findByPk(req.params.email);
    res.json(usuario);
}

module.exports={listarUsuarios,findByemail};
//  //funcao usada para criar um usuario
//  async function criarUsuario(usuario){
//    await Usuario.create(usuario);
//    console.log("usuario criado");
//  }
//  
//  //criarUsuario({
//  //  nome:"lucio",
//  //  email:"lucio@gmail.com",
//  //  nascimento:"2003-11-22"
//  //})
//
//  //funcao para listar as tabelas
//async function listarUsuarios(email){
//  const usuarios =await Usuario.findAll();
//  console.log(JSON.stringify(usuarios));
//}
//
//listarUsuarios();
//
//async function buscarUsuario(email){
//  const usuario=await Usuario.findPk(email);
//  console.log(JSON.stringify(usuarios));
//}
//buscarUsuario("lucio@gmail.com")
//
////async function atualizarUsuario(email,nome){
////  const usaurio =await Usuario.findPk(email)
////}