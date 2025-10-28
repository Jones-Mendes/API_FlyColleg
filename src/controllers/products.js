const { Products } = require('../models')

async function insertProduct(req, res) {
    try {
        await Products.create(req.body)

        return res.status(201).send({
            message: "Produto criado com sucesso!"
        })
    } catch (error) {
        return res.status(500).send({
            error: "Erro ao criar produto"
        })
    }
}

async function getAllProducts(req, res){
    try {
        const products = await productsModel.getAllProducts()

        return res.send(products)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    insertProduct,
    getAllProducts
}
