const { Categories } = require("../models");

async function validateInsertProduct(req, res, next) {
    const { name, category_id, price, shipping, warranty, return_policy } = req.body;

    if (!name || !category_id || !price || !shipping || !warranty || !return_policy) {
        return res.status(400).send({
            error: 'Todos os campos são obrigatórios'
        });
    }

    if (name.length > 255) {
        return res.status(400).send({
            error: 'Name deve ter no máximo 255 caracteres'
        });
    }
    try {
        const category= await Categories.findByPk(category_id);
        if (!category) {
            return res.status(400).send({
                error: 'Categoria não existe'
            });
        }
    } catch (error) {
        
    }
    req.body.return = return_policy;
    next();
}

module.exports = {
    validateProduct: validateInsertProduct
}