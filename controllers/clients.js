const Cliente = require('../models/clients');
const crypto = require('node:crypto');

async function signUpCliente(req, res) {
  const body = req.body;
  try {
    const cliente = await Cliente.create(body);
    const {
      salt,
      hash
    } = Cliente.createPassword(body['password']);
    cliente.password_salt = salt;
    cliente.password_hash = hash;
    await cliente.save();
    res.status(201).json(cliente);
  } catch (err) {
    if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
      return res.status(400).json({
        error: err.errors.map(e => e.message)
      })
    } else {
      throw err;
    }
  }
}

async function logInCliente(req, res) {
  const body = req.body;
  const cliente = await Cliente.findOne({
    where: {
      usuario: body['usuario']
    }
  });
  if (!cliente) { // Revisar si existe o no el usuario...
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }
  if (Cliente.validatePassword(body['password'], cliente.password_salt, cliente.password_hash)) {
    return res.status(200).json({
      usuario: cliente.usuario,
      correo: cliente.correo,
      token: Cliente.generateJWT(cliente),
      mensaje: "Bienvenido"
    });
  } else {
    return res.status(400).json({
      mensaje: "Password incorrecto"
    })
  }
}

async function getCliente(req, res) {
  const id = req.params.id;
  const cliente = await Cliente.findByPk(id);
  res.status(200).json(cliente);
}

async function getClientes(req, res) {
  const clientes = await Cliente.findAll();
  res.status(200).json(clientes);
}

async function updateCliente(req, res) {
  const id = req.params.id;
  const cliente = req.body;

  const update = await Cliente.update(cliente, {
    where: {
      id
    }
  }); // {id} es abreviacion de id:id <-- nombre del campo en la BD y nombre de la constiable que tiene el dato  
  const clienteUpdate = await Cliente.findByPk(id);
  res.status(200).json(clienteUpdate);
}

async function deleteCliente(req, res) {
  const id = req.params.id;
  const gotDelete = Cliente.destroy({
    where: {
      id: id
    }
  });
  res.status(200).json(gotDelete);
}

module.exports = {
  signUpCliente,
  logInCliente,
  getCliente,
  getClientes,
  updateCliente,
  deleteCliente
}