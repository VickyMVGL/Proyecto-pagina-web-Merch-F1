export class CapsController{
    constructor({CapsModels}){
        this.CapsModels = CapsModels;
    }

    // Obtener todas las gorras
    getAll = async ( req , res ) => {
        try{
            const caps = await this.CapsModels.getAll();
            return res.status(200).json(caps);
        }
        catch(error){
            console.log(error);
            return res.status(500).json({error: "Error al obtener las gorras"});
        }
    }

    // Obtener una gorra por su nombre
    getByName = async ( req , res ) => {
        try{
            const { name } = req.params;
            if(name){
                const capName = await this.CapsModels.getByName({name});
                return res.status(200).json(capName);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un nombre"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la gorra por nombre"});
        }
    }

    // Obtener una gorra por su precio
    getByPrice = async ( req , res ) => {
        try{
            const { price } = req.params;
            if(price){
                const capPrice = await this.CapsModels.getByPrice({price});
                return res.status(200).json(capPrice);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un precio"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la gorra por precio"});
        }
    }

    // Obtener una gorra por su exposor
    getByExposor = async ( req , res ) => {
        try{
            const { exposor } = req.params;
            if(exposor){
                const capExposor = await this.CapsModels.getByExposor({exposor});
                return res.status(200).json(capExposor);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un exposor"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la gorra por exposor"});
        }
    }
    // Obtener una gorra por su id
    getByID = async ( req, res ) => {
        try{
            const { id } = req.params;
            if(id){
                const capID = await this.CapsModels.getByID({id});
                return res.status(200).json(capID);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un id"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la gorra por id"});
        }
    }

    // Obtener una gorra por su id y precio
    getByIDAndPrice = async ( req, res ) => {
        try{
            const { id , price } = req.params;
            if(id && price){
                const capIDPrice = await this.CapsModels.getByIDAndPrice({id, price});
                return res.status(200).json(capIDPrice);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un id o precio"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la gorra por id y precio"});
        }
    }

    // Obtener una gorra por su id y nombre
    getByIDAndName = async ( req , res ) =>{
        try{
            const { id, name } = req.params;
            if(id && name){
                const capIDName = await this.CapsModels.getByIDAndName({id, name});
                return res.status(200).json(capIDName);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un id o nombre"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener la gorra por id y nombre"});
        }
    }
}