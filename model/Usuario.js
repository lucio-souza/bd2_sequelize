const sequelize=require('../database/sequelize')
const {DataTypes}=require('sequelize')

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
module.exports=Usuario;    