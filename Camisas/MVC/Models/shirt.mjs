import { ReadJSON } from "../Components/utils.mjs";
const shirts = ReadJSON('../Shirts.json');

export class ShirtModels{
    
    // obtener todas las camisas
    static async getAll(){
        return shirts;
    }

    // obtener una camisa por su id
    static async getByID({id}){
        if(id){
            return shirts.find(shirt =>
                shirt.id == parseInt(id)
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
            return shirts.filter(shirt =>
                shirt.price == parseInt(price)
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
            return shirts.filter(shirt =>
                shirt.exposor.includes(exposor.toLowerCase())
            )
        }
        else{
            console.log("No se ha encontrado ninguna camisa con ese exposor");
            return null;
        }
    }
}