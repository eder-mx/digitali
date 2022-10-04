const { where } = require('sequelize');
const Cliente = require('../models/clients');

async function createCliente(req, res) {
  const body = req.body;
  const cliente = await Cliente.create(body);
  res.status(201).json(cliente);
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
  
  const update = await Cliente.update(cliente, {where: {id}});  // {id} es abreviacion de id:id <-- nombre del campo en la BD y nombre de la constiable que tiene el dato  
  const clienteUpdate = await Cliente.findByPk(id);
  res.status(200).json(clienteUpdate);
}

async function deleteCliente(req, res) {
  const id = req.params.id;
  const gotDelete = Cliente.destroy(
    {where: {id: id}}
  ); 
  res.status(200).json(gotDelete);
}

module.exports = {
  createCliente,
  getCliente,
  getClientes,
  updateCliente,
  deleteCliente
}