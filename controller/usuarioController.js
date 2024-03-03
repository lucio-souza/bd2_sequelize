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
        const usuario=await Usuario.findByPk(req.params.email)
        await usuario.destroy(usuario)
        res.status(200).send("usuario deletado com sucesso")
    }catch(error){
        res.status(400).send("error")
    }
}

const atualizarUsuario=async (req,res)=>{
    try{
    const usuario=await Usuario.findByPk(req.params.email);
    usuario.nome=req.body.nome;
    usuario.nascimento=req.body.nascimento?req.body.nascimento:usuario.nascimento;
    await usuario.save()
    res.status(200).send("usuario atualizado com sucesso");
    }catch(erro){
        res.status(400).send("erro")
    }
}

module.exports={listarUsuarios,findByemail,createUsuario,deleteUsuario,atualizarUsuario};