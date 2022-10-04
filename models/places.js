const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const lugar = sequelize.define('lugar', {
  nombre: {
    type: DataTypes.CHAR(32)
  },
  calle: {
    type: DataTypes.CHAR(64)
  },
  numInt: {
    type: DataTypes.NUMBER
  },
  numExt: {
    type: DataTypes.CHAR(128)
  },
  colonia: {
    type: DataTypes.CHAR(64)
  },
  cp: {
    type: DataTypes.CHAR(5)
  },
  ciudad: {
    type: DataTypes.CHAR(64)
  },
  estado: {
    type: DataTypes.CHAR(32)
  },
  telefono: {
    type: DataTypes.CHAR(10)
  },
  mail: {
    type: DataTypes.CHAR(64)
  },
  contacto: {
    type: DataTypes.CHAR(128)
  },
  mailContacto: {
    type: DataTypes.CHAR(64)
  },
  mapa: {
    type: DataTypes.TEXT
  },
  facebook: {
    type: DataTypes.CHAR(64)
  },
  twitter: {
    type: DataTypes.CHAR(64)
  },
  instagram: {
    type: DataTypes.CHAR(64)
  },
})

module.exports = lugar;