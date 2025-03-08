export class KeysControllers{
    constructor({KeysModels}){
        this.KeysModels = KeysModels;
    }

    // Obtener todas las llaves
    getAll = async ( req , res ) => {
        try{
            const keys = await this.KeysModels.getAll();
            return res.status(200).json(keys);
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener las llaves"});
        }
    }

    // Obtener una llave por su id
    getByID = async ( req , res ) => {
        try{
            const { id } = req.params;
            if(id){
                const key = await this.KeysModels.getByID({id});
                return res.status(200).json(key);
            }
            else{
                return res.status(400).json({error: "No hay una llave con ese id"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la llave"});
        }
    }

    // Obtener una llave por su nombre
    getByName = async ( req , res ) => {
        try{
            const { name } = req.params;
            if(name){
                const KeysName = await this.KeysModels.getByName({name});
                return res.status(200).json(KeysName);
            }
            else{
                return res.status(400).json({error: "No hay una llave con ese nombre"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el nombre de la llave"});
        }
    }

    // Obtener una llave por su precio
    getByPrice = async ( req , res ) => {
        try{
            const { price } = req.params;
            if(price){
                const KeysPrice = await this.KeysModels.getByPrice({price});
                return res.status(200).json(KeysPrice);
            }
            else{
                return res.status(400).json({error: "No hay una llave con ese precio"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el precio de la llave"});
        }
    }

    // Obtener una llave por su exposor
    getByExposor = async ( req , res ) => {
        try{
            const { exposor } = req.params;
            if(exposor){
                const KeysExposor = await this.KeysModels.getByExposor({exposor});
                return res.status(200).json(KeysExposor);
            }
            else{
                return res.status(400).json({error: "No hay una llave con ese exposor"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el exposor de la llave"});
        }
    }

    // Obtener una llave por su id y precio
    getByIDAndPrice = async ( req , res ) => {
        try{
            const { id , price } = req.params;
            if(id && price){
                const KeysIDPrice = await this.KeysModels.getByIDAndPrice({id, price});
                return res.status(200).json(KeysIDPrice);
            }
            else{
                return res.status(400).json({error: "No hay una llave con ese id y precio"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la llave por id y precio"});
        }
    }

    // Obtener una llave por su id y nombre
    getByIDAndName = async ( req , res ) => {
        try{
            const { id , name } = req.params;
            if(id && name){
                const KeysIDName = await this.KeysModels.getByIDAndName({id, name});
                return res.status(200).json(KeysIDName);
            }
            else{
                return res.status(400).json({error: "No hay una llave con ese id y nombre"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la llave por id y nombre"});
        }
    }
}