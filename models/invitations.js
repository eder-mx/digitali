const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const invitacion = sequelize.define('invitacion', {
  idEvento: {
    type: DataTypes.NUMBER
  },
  noPases: {
    type: DataTypes.NUMBER
  },
  tituloPase: {
    type: DataTypes.CHAR(128)
  },
  qrCode: {
    type: DataTypes.CHAR(128)
  },
  activo:{
    type: DataTypes.BOOLEAN
  }
})

module.exports = invitacion;