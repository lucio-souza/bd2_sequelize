const Usuario=require('../model/Usuario');
  
const listarUsuarios=async (req,res)=>{
    const usuarios=await Usuario.findAll();
    res.json(usuarios);
}

const findByemail=async (req,res)=>{
    const usuario=await Usuario.findByPk(req.params.email);
    res.json(usuario);
}

const createUsuario=async (req,res)=>{
    try{
        await Usuario.create(req.body)
        res.status(201).send("usuario criado com sucesso")
    }catch(error){
        res.status(400).send(`erro:${error}`)
    }
}
const deleteUsuario=async (req,res)=>{
    try{
        const usuario=await Usuario.findByPk(req.body.email)
        await usuario.destroy(usuario)
        res.status(200).send("usuario deletado com sucesso")
    }catch(error){
        res.status(400).send("error")
    }
}

module.exports={listarUsuarios,findByemail,createUsuario,deleteUsuario};
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