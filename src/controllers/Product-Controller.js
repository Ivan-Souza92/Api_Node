const repository = require('../repositories/Product-Repository');


exports.get = async (req,res) => {

    try {

        var data = await repository.get();
        res.status(200).send(data);
        
    } catch (e) {

        res.status(400).send({
            message: 'Falha ao processar a sua requisição',
            error: e    
        });
    }
}

exports.getBySlug = async (req,res) => {

    try{

        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);

    } catch(e) {

        res.status(500).send({
            message: 'Falha ao processar a sua requisição'
        })
    }

}

exports.getById = async (req,res) => {

    try {

        var data = await repository.getById(req.params.id);
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar a sua requisição'
        })
    }

}

exports.getByTag = async (req,res) => {

    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição'
        });
    }

}



exports.post = async (req,res)=>{

    try {

       await repository.create(req.body);
       res.status(201).send({message: 'Produto cadastrado com sucesso!'});
        
    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar a sua requisição'
        });
    }    
}


exports.put = async (req,res)=>{

    try {

        await repository.update(req.params.id, req.body);
        res.status(201).send({message: 'Produto atualizado com sucesso!'})

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar a sua requisição'
        });
   }

}

exports.delete = async (req,res)=>{

    try { 

        await repository.delete(req.body.id);
        res.status(201).send({message: 'Produto removido com sucesso!'});

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar a sua requisição'
        });
   }
    
}