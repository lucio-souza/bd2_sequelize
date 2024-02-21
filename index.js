const Usuario=require('./model/Usuario')

  //funcao usada para criar um usuario
  async function criarUsuario(usuario){
    await Usuario.create(usuario);
    console.log("usuario criado");
  }
  
  //criarUsuario({
  //  nome:"lucio",
  //  email:"clara@gmail.com",
  //  nascimento:"2003-11-22"
  //});

  //funcao para listar as tabelas
async function listarUsuarios(){
  const usuarios =await Usuario.findAll();
  console.log(JSON.stringify(usuarios));
}

listarUsuarios();

async function buscarUsuario(email){
  const usuario=await Usuario.findByPk(email);
  console.log(JSON.stringify(usuario));
}
buscarUsuario("lucio@gmail.com")

async function atualizarUsuario(email,nome){
  const usuario =await Usuario.findByPk(email);
  usuario.nome=nome;
  await usuario.save();
  console.log("usuario alterado com sucesso");
}
atualizarUsuario("lucio@gmail.com","paulo");

async function deletarUsuario(email){
  const usuario=await Usuario.findByPk(email)
  await usuario.destroy();
  console.log("Usuario deletado com sucesso");
}

//deletarUsuario("lucio@gmail.com")