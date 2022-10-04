const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const evento = sequelize.define('evento', {
  idCliente: {
    type: DataTypes.NUMBER
  },
  idLugar: {
    type: DataTypes.CHAR(10)
  },
  nombre: {
    type: DataTypes.CHAR(128)
  },
  fechaInicio: {
    type: DataTypes.DATE
  },
  fechaFin:{
    type: DataTypes.DATE
  },
  Tipo: {
    type: DataTypes.NUMBER
  },
  maxInvitados: {
    type: DataTypes.NUMBER
  }
})

module.exports = evento;