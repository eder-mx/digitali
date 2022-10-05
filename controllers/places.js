const { where } = require('sequelize');
const Lugar = require('../models/places');

async function createLugar(req, res) {
  const body = req.body;
  const lugar = await Lugar.create(body);
  res.status(201).json(lugar);
}


async function getLugar(req, res) {
  const id = req.params.id;
  const lugar = await Lugar.findByPk(id);
  res.status(200).json(lugar);
}

async function getLugares(req, res) {
  const Lugares = await Lugar.findAll();
  res.status(200).json(Lugares);
}

async function updateLugar(req, res) {
  const id = req.params.id;
  const lugar = req.body;
  
  const update = await Lugar.update(lugar, {where: {id}});  // {id} es abreviacion de id:id <-- nombre del campo en la BD y nombre de la constiable que tiene el dato  
  const lugarUpdate = await Lugar.findByPk(id);
  res.status(200).json(lugarUpdate);
}

async function deleteLugar(req, res) {
  const id = req.params.id;
  const gotDelete = Lugar.destroy(
    {where: {id: id}}
  ); 
  res.status(200).json(gotDelete);
}

module.exports = {
  createLugar,
  getLugar,
  getLugares,
  updateLugar,
  deleteLugar
}