import { READJSON } from "../Components/Utils.mjs";
const Products = READJSON('../Products.json');

export class ModelsProducts{
    // Obtener todos los productos
    static async getAll(){
        return Products;
    }

    // Obtener un producto por su id
    static async getByID({id}){
        if(id){
            return Products.find(product => product.id === parseInt(id));
        }
        else{
            console.log("ID no encontrado");
            return null;
        }
    }

    // Obtener productos por su exposor
    static async getByExposor({exposor}){
        if(exposor){
            return Products.filter(product =>
                product.exposor.includes(exposor.toLowerCase())
            )
        }
        else{
            console.log("Expositor no encontrado");
            return null;
        }
    }
}