const { where } = require('sequelize');
const InvDetalle = require('../models/clients');

async function createInvDetalle(req, res) {
  const body = req.body;
  const detalle = await InvDetalle.create(body);
  res.status(201).json(detalle);
}


async function getInvDetalle(req, res) {
  const id = req.params.id;
  const detalle = await InvDetalle.findByPk(id);
  res.status(200).json(detalle);
}

async function getInvDetalles(req, res) {
  const detalles = await InvDetalle.findAll();
  res.status(200).json(detalles);
}

async function updateInvDetalle(req, res) {
  const id = req.params.id;
  const detalle = req.body;
  
  const update = await InvDetalle.update(detalle, {where: {id}});  // {id} es abreviacion de id:id <-- nombre del campo en la BD y nombre de la constiable que tiene el dato  
  const detalleUpdate = await InvDetalle.findByPk(id);
  res.status(200).json(detalleUpdate);
}

async function deleteInvDetalle(req, res) {
  const id = req.params.id;
  const gotDelete = InvDetalle.destroy(
    {where: {id: id}}
  ); 
  res.status(200).json(gotDelete);
}

module.exports = {
  createInvDetalle,
  getInvDetalle,
  getInvDetalles,
  updateInvDetalle,
  deleteInvDetalle
}