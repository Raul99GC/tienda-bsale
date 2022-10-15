const { db } = require('../utils/database');
const { QueryTypes } = require('sequelize');


const getAllProducts = async (name, id) => {
    /* 
    Tenga en cuenta que, dado que se trata de una consulta sin formato, los metadatos son específicos del dialecto. Algunos dialectos devuelven los metadatos "dentro" del objeto de resultados (como propiedades en una matriz). Sin embargo, siempre se devolverán dos argumentos, pero para MSSQL y MySQL serán dos referencias al mismo objeto.
    */
    if (name) {
        //? El tipo de consulta afecta el formato de los resultados antes de devolverlos.
        //? en pocas palabras, evitamos que nos retorne 2 arreglos xD
        const data = await db.query(`SELECT * FROM product WHERE name LIKE '%${name}%'`, { type: QueryTypes.SELECT });
        return data;
    } else if (id) {
        const data = await db.query(`SELECT * FROM product WHERE id LIKE ${id}`, { type: QueryTypes.SELECT });
        return data;
    } else {
        const data = await db.query(`SELECT * FROM product`,  { type: QueryTypes.SELECT });
        return data;
    }

};

const getProductById = async (productId) => {
    const data = await db.query(`SELECT * FROM product WHERE id LIKE ${productId}`, { type: QueryTypes.SELECT });
    return data;
}



module.exports = {
    getAllProducts,
    getProductById
}