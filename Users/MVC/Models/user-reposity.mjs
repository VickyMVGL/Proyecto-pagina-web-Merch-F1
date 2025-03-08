import dbLocal from "db-local";
import crypton from "node:crypto";
import bcrypt from 'bcryptjs';
const {Schema} = new dbLocal("./MVC/Users");
const Users = Schema({
    _id: {type: 'number', required: true},
    first_name: {type: 'string', required: true},
    last_name: {type: 'string', required: true},
    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
    username: {type: 'string', required: true},
})

export class UserRepository {
    // Crear un nuevo usuario
    static async createUser({user}){
        const name = user.first_name
        const userExists = await Users.findOne({first_name: name})
        if(userExists){
            console.log("El usuario ya existe")
            return [{message: "El usuario ya existe"}]
        }
        else{
            const id = crypton.randomUUID();
            const hash = await bcrypt.hash(user.password, 10);
            Users.create({
                _id: id,
                first_name: user.first_name,
                last_name: user.Last_name,
                email: user.email,
                password: hash,
                username: user.username
            }).save()
            console.log("Usuario creado")
            return id;
        }
    }

    // Logear un usuario
    static async loginUser({user}){
        if(user){
            const AccessLogin = await Users.findOne({email: user.email});
            if(!AccessLogin){
                console.log("El usuario no existe")
                return [{message: "El usuario no existe"}]
            }
            else{
                const comparePassword = await bcrypt.compare(user.password, AccessLogin.password);
                if(!comparePassword){
                    console.log("La contraseña es incorrecta")
                    return [{message: "La contraseña es incorrecta"}]
                }
                const { password: _, ...rest} = AccessLogin;
                return rest;
            }
        }
    }
}