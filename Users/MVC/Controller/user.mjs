import { validateLogin, validateRegister } from "../Validation/Schema.mjs";
export class UserController {
    constructor({UserRepository}){
        this.UserRepository = UserRepository;
    }

    // Crear un nuevo usuario
    createUser = async ( req , res ) => {
        try{
            const result = validateRegister(req.body);
            if(!result.success){
                return res.status(400).json({error: result.error.issues});
            }
            const User = await this.UserRepository.createUser({user: result.data});
            return res.status(200).json({message: "Usuario creado", id: User});
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al crear el usuario"});
        }
    }

    // Logear un usuario
    Login = async ( req , res ) => {
        try{
            const result = validateLogin(req.body);
            if(!result.success){
                return res.status(400).json({error: result.error.issues});
            }
            const UserLogin = await this.UserRepository.loginUser({user: result.data});
            return res.status(200).json({message: "Usuario logeado", user: UserLogin});
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: "Error al logear el usuario"});
        }
    }
}