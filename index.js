const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('bd_2', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres'
});
conectar= async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
conectar();
//funcao para criar uma tabela no banco
const Usuario = sequelize.define('Usuario', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nascimento:{
    type:DataTypes.DATE
  }
}, {
  // Other model options go here
});
console.log(Usuario === sequelize.models.Usuario); // true
//funcao usada para sincronizar como banco
async function sincronizar(){
  await Usuario.sync();
  console.log("usuario sincronizado");
  }
  sincronizar();
  
  //funcao usada para criar um usuario
  async function criarUsuario(usuario){
    await Usuario.create(usuario);
    console.log("usuario criado");
  }
  
  //criarUsuario({
  //  nome:"lucio",
  //  email:"lucio@gmail.com",
  //  nascimento:"2003-11-22"
  //})

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
  console.log("usuario alterado com sucesso");
}
atualizarUsuario("lucio@gmail.com","paulo");

async function deletarUsuario(email){
  const usuario=await Usuario.findByPk(email)
  await usuario.destroy();
  console.log("Usuario deletado com sucesso");
}

deletarUsuario("lucio@gmail.com")