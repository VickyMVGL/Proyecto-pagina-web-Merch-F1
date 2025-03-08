import { ReadJSON } from "../Components/Utils.mjs";
const caps = ReadJSON("../caps.json");

export class CapsModels{
    // Obtener todas las gorras
    static async getAll(){
        return caps;
    }

    // Obtener una gorra por su id
    static async getByID({id}){
        if(id){
            return caps.find(cap =>
                cap.id == parseInt(id)
            )
        }
        else{
            console.log("No se ha proporcionado un id");
            return null;
        }
    }

    // Obtener una gorra por su nombre
    static async getByName({name}){
        if(name){
            return caps.find(cap =>
                cap.name.toLowerCase() == name.toLowerCase()
            )
        }
        else{
            console.log("No se ha proporcionado un nombre");
            return null;
        }
    }

    // Obtener una gorra por su precio
    static async getByPrice({price}){
        if(price){
            return caps.filter(cap =>
                cap.price === parseInt(price)
            )
        }
        else{
            console.log("No se ha encontrado un precio");
            return null;
        }
    }

    // Obtener una gorra por su exposor
    static async getByExposor({exposor}){
        if(exposor){
            return caps.filter(cap =>
                cap.exposor.includes(exposor.toLowerCase())
            )
        }
        else{
            console.log("No se ha encontrado un exposor");
            return null;
        }
    }

    // Obtener una gorra por su id y precio
    static async getByIDAndPrice({id, price}){
        if(id && price){
            return caps.find(cap =>
                cap.id === parseInt(id) && cap.price === parseInt(price)
            )
        }
        else{
            console.log("No existen tal gorra con ese id y precio");
            return null;
        }
    }

    // Obtener una gorra por su id y nombre
    static async getByPrice({id, name}){
        if(id && name){
            return caps.find(cap =>
                cap.id === parseInt(id) && cap.name.toLowerCase() === name.toLowerCase()
            )
        }
        else{
            console.log("No existen tal gorra con ese id y nombre");
            return null;
        }
    }
}