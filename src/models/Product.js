const {Schema, model} = require('mongoose')

//o schema cria o id automaticamente

const schema = new Schema({

    title: {

        type: String,
        required: true,
        trim: true //ou seja, ele vai remover os espaços, antes e depois da nossa string
    },
    slug: { // se chama Cadeira Gamer = cadeira-gamer (assim que vai ficar)

        type: String,
        require: [true, "O slug é Obrigatório!"], //caso eu queira informar uma mensagem de erro
        trim: true,
        index: true, // vai criar o indice
        unique: true
    },
    description: {

        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    tags: [{
        type: String,
        required: true
    }]

});


module.exports = model('Product', schema)