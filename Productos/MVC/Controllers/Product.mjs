export class ControllerProducts {
    constructor({ ModelsProducts}){
        this.ModelsProducts = ModelsProducts;
    }
    // Obtener todos los productos
    getAll = async ( req, res ) => {
        try {
            const products = await this.ModelsProducts.getAll();
            return res.status(200).json(products);
        }
        catch (error){
            console.error("Error al obtener productos:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    // Obtener un producto por su id
    getByID = async ( req, res ) => {
        try{
            const { id } = req.params;
            const product = await this.ModelsProducts.getByID({ id});
            if(product){
                return res.status(200).json(product);
            }
            else{
                return res.status(404).json({ error: "Producto no encontrado" });
            }
        }catch(error){
            console.error("Error al obtener producto:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    // Obtener productos por su exposor
    getByExposor = async ( req, res ) => {
        try{
            const { exposor } = req.params;
            const products = await this.ModelsProducts.getByExposor({ exposor });
            if(products.length > 0){
                return res.status(200).json(products);
            }
            else{
                return res.status(404).json({ error: "No se encontraron productos para este exposor" });
            }
        }
        catch(error){
            console.error("Error al obtener productos por exposor:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}