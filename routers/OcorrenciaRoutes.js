const express=require('express')
const OcorrenciaRouter=express.Router();

const {createOcorrencia}=require('../controller/ocorrenciaController');

OcorrenciaRouter.post('/',createOcorrencia);

module.exports=OcorrenciaRouter