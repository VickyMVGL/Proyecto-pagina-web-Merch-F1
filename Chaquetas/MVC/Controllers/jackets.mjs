
export class JacketController{
    constructor({JacketModels}){
        this.JacketModels = JacketModels;
    }

    // obtener todas las camisas
    getAll = async ( req , res) => {
        try {
            const Jackets = await this.JacketModels.getAll();
            return res.status(200).json(Jackets);
        }
        catch (error){
            return res.status(500).json({
                message: "Error al obtener las camisas",
                error: error.message
            });
        }
    }

    // obtener una camisa por su precio
    getByPrice = async ( req , res) => {
        try{
            const {price} = req.params;
            if(price && price > 0){
                const JacketsPrice = await this.JacketModels.getByPrice({price});
                return res.status(200).json(JacketsPrice);
            }
            else{
                return res.status(400).json({
                    message: "El precio no es valido"
                });
            }
        }
        catch(err){
            return res.status(500).json({
                message: "Error al obtener las camisas por precio",
                error: err.message
            });
        }
    }

    // obtener una camisa por su id
    getByID = async ( req , res) => {
        try{
            const {id} = req.params;
            if(id){
                const JacketID = await this.JacketModels.getByID({id});
                if(JacketID){
                    return res.status(200).json(JacketID);
                }
                else{
                    return res.status(404).json({
                        message: "No se ha encontrado la camisa"
                    });
                }
            }
            else{
                return res.status(400).json({
                    message: "El id no es valido"
                });
            }
        }
        catch(err){
            return res.status(500).json({
                message: "Error al obtener la camisa por id",
                error: err.message
            });
        }
    }

    // obtener una camisa por su exposor
    getByExposor = async ( req , res) => {
        try{
            const {exposor} = req.params;
            if(exposor){
                const JacketsExposor = await this.JacketModels.getByExposor({exposor});
                return res.status(200).json(JacketsExposor);
            }
            else{
                return res.status(400).json({
                    message: "El exposor no es valido"
                });
            }
        }
        catch(err){
            return res.status(500).json({
                message: "Error al obtener las camisas por exposor",
                error: err.message
            });
        }
    }

    // Obtener una camisa por su precio y id
    getByIDAndPrice = async ( req , res) => {
        try{
            const {id,price} = req.params;
            if(id && price){
                const JacketsIDPrice = await this.JacketModels.getByIDAndPrice({id,price});
                return res.status(200).json(JacketsIDPrice);
             }
            else{
                return res.status(400).json({
                    message: "El id o el precio no son validos"
                });
             }
        }
        catch(err){
            return res.status(500).json({
                message: "Error al obtener la camisa por id y precio",
                error: err.message
            });
        }
    }

    // obtener una camisa por su nombre
    getByName = async ( req , res) => {
        try{
            const {name} = req.params;
            if(name){
                const JacketsName = await this.JacketModels.getByName({name});
                return res.status(200).json(JacketsName);
            }
            else{
                return res.status(400).json({
                    message: "El nombre no es valido"
                });
            }
        }
        catch(err){
            return res.status(500).json({
                message: "Error al obtener las camisas por nombre",
                error: err.message
            });
        }
    }

    // obtener una camisa por su precio y exposor
    getByPriceAndExposor = async ( req , res) => {
        try{
            const {price,exposor} = req.params;
            if(price && exposor){
                const JacketsPriceExposor = await this.JacketModels.getByPriceAndExposor({price,exposor});
                return res.status(200).json(JacketsPriceExposor);
            }
            else{
                return res.status(400).json({
                    message: "El precio o el exposor no son validos"
                });
            }
        }
        catch(err){
            return res.status(500).json({
                message: "Error al obtener las camisas por precio y exposor",
                error: err.message
            });
        }
    }
}