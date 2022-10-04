const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const cliente = sequelize.define('cliente', {
  nombre: {
    type: DataTypes.CHAR(128)
  },
  correo: {
    type: DataTypes.CHAR(128)
  },
  celular: {
    type: DataTypes.CHAR(12)
  }
})

module.exports = cliente;