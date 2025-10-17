const db = require("../config/database")

async function insertProduct(products) {
    const { name, category, price } = products;
   try {
    await db.query(`
        INSERT INTO products (name, category, price) 
        VALUES ('$1', '$2', $3)
        `, [name, category, price]
    )
        

   } catch (error) {
        throw new Error('Erro ao cadastrar produto');
   }
}
async function getAllProducts() {
        const products = await db.query('SELECT * FROM products');
        return products.rows;

}


module.exports = {
    insertProduct,
    getAllProducts
}