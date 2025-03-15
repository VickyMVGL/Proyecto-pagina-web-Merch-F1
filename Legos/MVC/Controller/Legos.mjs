export class LegosController{
    constructor({LegosModels}){
        this.LegosModels = LegosModels;
    }

    // Obtener todos los legos
    getAll = async ( req , res ) => {
        try{
            const legos = await this.LegosModels.getAll();
            return res.status(200).json(legos);
        }
        catch(error){
            console.log(error);
            return res.status(500).json({error: "Error al obtener los legos"});
        }
    }

    // Obtener un lego por su id
    getByID = async ( req , res ) => {
        try{
            const { id } = req.params;
            if(id){
                const legoID = await this.LegosModels.getByID({id});
                return res.status(200).json(legoID);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un id"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el lego por id"});
        }
    }

    // Obtener un lego por su nombre
    getByName = async ( req , res ) => {
        try{
            const { name } = req.params;
            if(name){
                const legoName = await this.LegosModels.getByName({name});
                return res.status(200).json(legoName);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un nombre"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el lego por nombre"});
        }
    }

    // Obtener un lego por su precio
    getByPrice = async ( req , res ) => {
        try{
            const { price } = req.params;
            if(price){
                const LegoPrice = await this.LegosModels.getByPrice({price});
                return res.status(200).json(LegoPrice);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un precio"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el lego por precio"});
        }
    }

    // Obtener un lego por su exposor
    getByExposor = async ( req , res ) => {
        try{
            const { exposor } = req.params;
            if(exposor){
                const LegoExposor = await this.LegosModels.getByExposor({exposor});
                return res.status(200).json(LegoExposor);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un exposor"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el lego por exposor"});
        }
    }

    // Obtener un lego por su id y precio
    getByIDAndPrice = async ( req , res ) => {
        try{
            const { id, price } = req.params;
            if(id && price){
                const LegoIDPrice = await this.LegosModels.getByIDAndPrice({id, price});
                return res.status(200).json(LegoIDPrice);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un id y precio"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el lego por id y precio"});
        }
    }

    // Obtener un lego por su id y nombre
    getByIDAndName = async ( req , res ) => {
        try{
            const { id , name } = req.params;
            if(id && name){
                const LegoIDName = await this.LegosModels.getByIDAndName({id, name});
                return res.status(200).json(LegoIDName);
            }
            else{
                return res.status(400).json({error: "No se ha proporcionado un id y nombre"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al obtener el lego por id y nombre"});
        }
    }
}