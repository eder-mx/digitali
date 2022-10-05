const crypto = require('node:crypto');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('cliente', {
  usuario: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    unique: true,
    validate: {
      isLowercase: true,
      is: /^[a-zA-Z0-9_-]+$/
    }
  },
  password_hash: {
    type: DataTypes.CHAR(64),
    allowNull: true,
  },
  password_salt: {
    type: DataTypes.CHAR(64),
    allowNull: true,
  },
  nombre: {
    type: DataTypes.CHAR(128),
    allowNull: false
  },
  correo: {
    type: DataTypes.CHAR(128),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  celular: {
    type: DataTypes.CHAR(12)
  }
})

Cliente.createPassword = function(plainText) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
      .pbkdf2Sync(plainText, salt, 10000, 512, "sha512")
      .toString("hex");
  return {salt: salt, hash: hash}
}

Cliente.validatePassword = function(password, user_salt, user_hash) {
  const hash = crypto
      .pbkdf2Sync(password, user_salt, 10000, 512, "sha512")
      .toString("hex");
  return user_hash === hash;
}

module.exports = Cliente;