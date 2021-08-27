const repository = require('../repositories/Order-Repository');
const guid = require('guid');


exports.post = async (req,res) => {

    try {

       await repository.create({
           customer: req.body.customer,
           number: guid.raw().substring(0, 6), //guid -  gera strings
           items: req.body.items
       });
       res.status(201).send({message: 'Pedido cadastrado com sucesso!'});

    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar requisição!',
            //e: error
        });
    }
}

exports.get = async(req,res) => {
    
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (error) {

        res.status(400).send({
            message: 'Falha ao processar a sua requisição'
            //e: error
        });
    }
}