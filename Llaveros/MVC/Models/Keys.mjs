import { ReadJSON } from "../Components/Utils.mjs";
const Keys = ReadJSON("../Keys.json");

export class KeysModels{
    contructor({KeysModels}){
        this.KeysModels = KeysModels;
    }

    // Obtener todas las llaves
    static async getAll(){
        return Keys;
    }

    // Obtener una llave por su id
    static async getByID({id}){
        if(id){
            return Keys.find(key =>
                key.id === parseInt(id)
            )
        }
        else{
            console.log("No hay una llave con ese id");
            return null;
        }
    }

    // Obtener una llave por su nombre
    static async getByName({name}){
        if(name){
            return Keys.find(key =>
                key.name.toLowerCase() === name.toLowerCase()
            )
        }
        else{
            console.log("No hay una llave con ese nombre");
            return null;
        }
    }

    // Obtener una llave por su precio
    static async getByPrice({price}){
        if(price){
            return Keys.filter(key =>
                key.price === parseInt(price)
            )
        }
        else{
            console.log("No hay una llave con ese precio");
            return null;
        }
    }

    // Obtener una llave por su exposor
    static async getByExposor({exposor}){
        if(exposor){
            return Keys.filter(key =>
                key.exposor.includes(exposor.toLowerCase())
            )
        }
        else{
            console.log("No hay una llave con ese exposor");
            return null;
        }
    }

    // Obtener una llave por su id y precio
    static async getByIDAndPrice({id, price}){
        if(id && price){
            return Keys.find(key =>
                key.id === parseInt(id) && key.price === parseInt(price)
            )
        }
        else{
            console.log("No hay una llave con ese id y precio");
            return null;
        }
    }

    // Obtener una llave por su id y nombre
    static async getByIDAndName({id, name}){
        if(id && name){
            return Keys.find(key =>
                key.id === parseInt(id) && key.name.toLowerCase() === name.toLowerCase()
            )
        }
        else{
            console.log("No hay una llave con ese id y nombre");
            return null;
        }
    }
}