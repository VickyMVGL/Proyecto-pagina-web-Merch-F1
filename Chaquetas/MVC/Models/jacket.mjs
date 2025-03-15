import { ReadJSON } from "../Components/Utils.mjs";
const jackets = ReadJSON('../jackets.json');

export class JacketModels{
    
    // obtener todas las camisas
    static async getAll(){
        return jackets;
    }

    // obtener una camisa por su id
    static async getByID({id}){
        if(id){
            return jackets.find(jacket =>
                jacket.id == parseInt(id)
            )
        }
        else{
            console.kog("No se ha encontrado el id");
            return null;
        }
    }

    // Obtener una camisa por su precio
    static async getByPrice({price}){
        if(price){
            return jackets.filter(jacket =>
                jacket.price == parseInt(price)
            )
        }
        else{
            console.log("No se ha encontrado ninguna camisa con ese precio");
            return null;
        }
    }

    // Obtener una camisa por su exposor
    static async getByExposor({exposor}){
        if(exposor){
            return jackets.filter(jacket =>
                jacket.exposor.includes(exposor.toLowerCase())
            )
        }
        else{
            console.log("No se ha encontrado ninguna camisa con ese exposor");
            return null;
        }
    }

    // Obtener una camisa por su id y precio
    static async getByIDAndPrice({id,price}){
        if(id && price){
            return jackets.filter(jacket =>
                jacket.id == parseInt(id) && jacket.price == parseInt(price)
            )
        }
        else{
            console.log("No se ha encontrado ninguna camisa con ese id y precio");
            return null;
        }
    }
}