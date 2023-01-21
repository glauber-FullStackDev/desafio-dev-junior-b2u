import { dbQuery, dbQueryFirst } from "../services/db";



export type Product = {
    id: number;
    name: string;
    price: number;
    brand: string;
    year_manufacture: number;
    description: string;
    image: string;
    owner: string;
    email:string;
    number_owner: number;
}

const insertProduct = async (product: Product) => {
    await dbQuery(`INSERT INTO Products (name, price, brand, year_manufacture, description, image, owner, email, number_owner) VALUES(?, ?, ? ,? ,? ,? ,? ,?, ? )`,
     [product.name, product.price, product.brand, product.year_manufacture, product.description, product.image, product.owner, product.email, product.number_owner])
    let retorno = await dbQuery(`SELECT seq AS id FROM sqlite_sequence WHERE  name = 'Products'`);
    return getProduct(retorno[0].id);
}

const getProduct = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM Products WHERE id = ?`, [id]);
    return retorno as Product ;
}

const deleteProduct = async (id: number) => {
    await dbQueryFirst(`DELETE FROM Products WHERE id = ?`, [id]);
}

const listProducts = async () => {
    const retorno = await dbQuery(`SELECT * FROM Products`);
    return retorno as Product[];
}

const updateProduct = async (product: Product) => {
    await dbQuery(`UPDATE Products SET name = ?, price = ? WHERE id = ?`, [product.name, product.price, product.id])
    return getProduct(product.id);
}

export const productModel = {
    insertProduct,
    getProduct,
    deleteProduct,
    listProducts,
    updateProduct
}