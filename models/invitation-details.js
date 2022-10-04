const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const invDetail = sequelize.define('invDetail', {
  idInvitacion: {
    type: DataTypes.NUMBER
  },
  invitado: {
    type: DataTypes.CHAR(128)
  },
  celular: {
    type: DataTypes.CHAR(12)
  },
  correo: {
    type: DataTypes.CHAR(128)
  },
  correo: {
    type: DataTypes.CHAR(128)
  },
  acceso:{
    type: DataTypes.BOOLEAN
  }
})

module.exports = invDetail;