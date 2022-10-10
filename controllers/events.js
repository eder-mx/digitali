const { where } = require('sequelize');
const Evento = require('../models/events');

async function createEvento(req, res) {
  const body = req.body;
  const evento = await Evento.create(body);
  res.status(201).json(evento);
}

async function getEvento(req, res) {
  const id = req.params.id;
  const evento = await Evento.findByPk(id);
  res.status(200).json(evento);
}

async function getEventos(req, res) {
  const eventos = await Evento.findAll();
  res.status(200).json(eventos);
}

async function getEventosByDay(req, res) {
  const date = req.params.date;
  const eventos = await Evento.findByPk(id);
  const project = await Project.findOne({ where: {date} });
  res.status(200).json(eventos);
}

async function updateEvento(req, res) {
  const id = req.params.id;
  const evento = req.body;
  
  const update = await Evento.update(evento, {where: {id}});  // {id} es abreviacion de id:id <-- nombre del campo en la BD y nombre de la constiable que tiene el dato  
  const eventoUpdate = await Evento.findByPk(id);
  res.status(200).json(eventoUpdate);
}

async function deleteEvento(req, res) {
  const id = req.params.id;
  const gotDelete = Evento.destroy(
    {where: {id: id}}
  ); 
  res.status(200).json(gotDelete);
}

module.exports = {
  createEvento,
  getEvento,
  getEventos,
  updateEvento,
  deleteEvento
}