const { where } = require('sequelize');
const Invitacion = require('../models/invitations');

async function createInvitacion(req, res) {
  const body = req.body;
  const invitacion = await Invitacion.create(body);
  res.status(201).json(invitacion);
}


async function getInvitacion(req, res) {
  const id = req.params.id;
  const invitacion = await Invitacion.findByPk(id);
  res.status(200).json(invitacion);
}

async function getInvitaciones(req, res) {
  const Invitaciones = await Invitacion.findAll();
  res.status(200).json(Invitaciones);
}

async function updateInvitacion(req, res) {
  const id = req.params.id;
  const invitacion = req.body;
  
  const update = await Invitacion.update(invitacion, {where: {id}});  // {id} es abreviacion de id:id <-- nombre del campo en la BD y nombre de la constiable que tiene el dato  
  const invitacionUpdate = await Invitacion.findByPk(id);
  res.status(200).json(invitacionUpdate);
}

async function deleteInvitacion(req, res) {
  const id = req.params.id;
  const gotDelete = Invitacion.destroy(
    {where: {id: id}}
  ); 
  res.status(200).json(gotDelete);
}

module.exports = {
  createInvitacion,
  getInvitacion,
  getInvitaciones,
  updateInvitacion,
  deleteInvitacion
}