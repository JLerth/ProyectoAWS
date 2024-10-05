import { Router } from 'express';
import { AppDataSource } from '../data-source'
import {Usuario} from '../entity/Usuario'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const routerUsuario = Router()
const secretKey = 'jlerth';
const usuarioRepository = AppDataSource.getRepository(Usuario)

// Registrar un nuevo usuario (POST)
routerUsuario.post('/register', async (req, res) => {
    const { nombre, clave, estado } = req.body;

    if (!nombre || !clave || !estado) {
        res.status(400).json({ message: 'Nombre, clave y estado son requeridos' });
    }

    try {
        // Hashear la contraseña
        const hashedPassword = bcrypt.hashSync(clave, 10);

        // Crear nuevo usuario
        const nuevoUsuario = usuarioRepository.create({
            nombre,
            clave: hashedPassword, // Guardar la contraseña como hash
            estado
        });

        // Guardar en la base de datos
        const usuarioGuardado = await usuarioRepository.save(nuevoUsuario);
        res.json({ message: 'Usuario registrado correctamente', usuario: usuarioGuardado });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
});

// Iniciar sesión (POST)
routerUsuario.post('/login', async (req, res) => {
    const { nombre, clave } = req.body;

    if (!nombre || !clave) {
        res.status(400).json({ message: 'Nombre y clave son requeridos' });
    }

    try {
        // Buscar al usuario en la base de datos
        const usuario = await usuarioRepository.findOne({ where: { nombre } });

        if (!usuario) {
            res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Validar la clave
        const isPasswordValid = bcrypt.compareSync(clave, usuario.clave);

        if (!isPasswordValid) {
            res.status(401).json({ message: 'Clave incorrecta' });
        }

        // Generar el token JWT
        const payload = {
            id: usuario.id,
            nombre: usuario.nombre,
            estado: usuario.estado
        };

        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});

export default routerUsuario;