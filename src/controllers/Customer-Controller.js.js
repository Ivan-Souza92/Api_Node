const repository = require('../repositories/Customer-Repository');


exports.get = async(req,res) => {

    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (error) {

        res.status(400).send({
            message: 'Falha ao processar a sua requisição'
        });
    }
}


exports.post = async(req,res) => {

    try {

        await repository.create(req.body);
        res.status(201).send({message: 'Cliente cadastrado com sucesso!'});

    } catch (e) {
        res.status(500).send({
            message: 'falha ao processar a sua requisição'
        })
    }
}