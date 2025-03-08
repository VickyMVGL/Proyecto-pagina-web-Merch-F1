import zod from 'zod';
// Validaciones del login
export const SchemaLogin = zod.object({
    email: zod.string({
        required_error: 'El email es requerido',
        invalid_type_error: 'El email tiene que ser una string'
    }),
    password: zod.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña tiene que ser una string'
    }).min(8)
})

// Validaciones del registro
export const SchemaRegister = zod.object({
    first_name: zod.string({
        required_error: 'El nombre es requerido',
        invalid_type_error: 'El nombre tiene que ser una string'
    }),
    
    last_name: zod.string({
        required_error: 'El apellido es requerido',
        invalid_type_error: 'El apellido tiene que ser una string'
    }),

    email: zod.string({
        required_error: 'El email es requerido',
        invalid_type_error: 'El email tiene que ser una string'
    }),

    password: zod.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña tiene que ser una string'
    }).min(8),

    username: zod.string({
        required_error: 'El nombre de usuario es requerido',
        invalid_type_error: 'El nombre de usuario tiene que ser una string'
    })
    
})

// Function para validar los datos del login
export function validateLogin(data){
    return SchemaLogin.safeParse(data);
}
// Function para validar los datos del registro
export function validateRegister(data){
    return SchemaRegister.safeParse(data);
}
