
export class ShirtController{
    constructor({ShirtModels}){
        this.ShirtModels = ShirtModels;
    }

    // obtener todas las camisas
    getAll = async ( req , res) => {
        try {
            const shirts = await this.ShirtModels.getAll();
            return res.status(200).json(shirts);
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
                const shirtsPrice = await this.ShirtModels.getByPrice({price});
                return res.status(200).json(shirtsPrice);
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
                const shirtID = await this.ShirtModels.getByID({id});
                if(shirtID){
                    return res.status(200).json(shirtID);
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
                const shirtsExposor = await this.ShirtModels.getByExposor({exposor});
                return res.status(200).json(shirtsExposor);
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
                const shirtsIDPrice = await this.ShirtModels.getByIDAndPrice({id,price});
                return res.status(200).json(shirtsIDPrice);
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
            const {name_shirt} = req.params;
            if(name_shirt){
                const shirtsName = await this.ShirtModels.getByName({name_shirt});
                return res.status(200).json(shirtsName);
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
}