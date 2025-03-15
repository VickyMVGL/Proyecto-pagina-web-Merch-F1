import { ReadJSON } from "../Components/Utils.mjs";
const legos = ReadJSON("../legos.json");

export class LegosModels{
    // Obtener todos los legos de la formula 1
    static async getAll(){
        return legos;
    }

    // Obtener un lego por su id
    static async getByID({id}){
        if(id){
            return legos.find(lego =>
                lego.id === parseInt(id)
            )
        }
        else{
            console.log("No se existe tal lego con ese id");
            return null;
        }
    }

    // Obtener un lego por su nombre
    static async getByName({name}){
        if(name){
            return legos.find(lego =>
                lego.name.toLowerCase() === name.toLowerCase()
            )
        }
        else{
            console.log("No se ha conseguido un lego con ese nombre");
            return null;
        }
    }

    // Obtener un lego por su precio
    static async getByPrice({price}){
        if(price){
            return legos.filter(lego =>
                lego.price === parseInt(price)
            )
        }
        else{
            console.log("No se ha conseguido un lego con ese precio");
            return null;
        }
    }

    // Obtener un lego por su exposor
    static async getByExposor({exposor}){
        if(exposor){
            return legos.filter(lego =>
                lego.exposor.includes(exposor.toLowerCase())
            )
        }
        else{
            console.log("No se ha conseguido un lego con ese exposor");
            return null;
        }
    }

    // Obtener un lego por su id y precio
    static async getByIDAndPrice({id, price}){
        if(id && price){
            return legos.find(lego =>
                lego.id === parseInt(id) && lego.price === parseInt(price)
            )
        }
        else{
            console.log("No existe tal lego con ese id y precio");
            return null;
        }
    }

    // Obtener un lego por su id y nombre
    static async getByIDAndPrice({id, name}){
        if(id && name){
            return legos.find(lego =>
                lego.id === parseInt(id) && lego.name.toLowerCase() === name.toLowerCase()
            )
        }
        else{
            console.log("No existe tal lego con ese id y nombre");
            return null;
        }
    }
}