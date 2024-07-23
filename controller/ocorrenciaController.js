const Ocorrencia=require('../model/Ocorrencia');

const createOcorrencia= async (req,res)=>{
    try {
        await Ocorrencia.create(req.body);
        res.status(201).send("Ocorrencia criada com sucesso");
    } catch (e) {
        res.status(400).send(`erro ${e}`)
    }
}

module.exports={createOcorrencia};