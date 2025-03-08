
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
        }
    }
}