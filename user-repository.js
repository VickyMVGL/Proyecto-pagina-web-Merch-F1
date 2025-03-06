import crypto from 'node:crypto'
import DBLocal from 'db-local'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from './config.js'

const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static async create ({ username, password }) {
    Validacion.username(username)
    Validacion.password(password)
    // Validacion de que el username no existe
    const user = User.findOne({ username })
    if (user) throw new Error('Username already exists')

    const id = crypto.randomUUID()
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    // Creacion del usuario
    User.create({ _id: id, username, password: hashedPassword }).save()
  }

  static async login ({ username, password }) {
    Validacion.username(username)
    Validacion.password(password)

    const user = User.findOne({ username })
    if (!user) throw new Error('Invalid username')
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('Invalid password')
    const { password: _, ...publicUser } = user
    return publicUser
  }
}

class Validacion {
  // Validacion del username
  static username (username) {
    if (typeof username !== 'string' || username.length < 6) {
      throw new Error('Username must be a string with at least 6 characters')
    }
  }

  // Validacion del password
  static password (password) {
    if (typeof password !== 'string' || password.length < 6) {
      throw new Error('Password must be a string with at least 6 characters')
    }
  }
}
