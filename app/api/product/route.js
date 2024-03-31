import product from "../database/models/product";

export async function getProduct(){
    const data = await product.find()
    return data;
    }