const express = require('express');
const sequelize = require('./config/db.js')
const routes = require('./routes');  // Hace llamado al archivo index.js... como es index no se requiere el llamado explicito

const app = express();
app.use(express.json()); 
app.use('/invitaciones', routes);

try{
  sequelize.authenticate();
  sequelize.sync();
  console.log('Conectado a la BD');
} catch (error){
  console.log ('No fue posible conectarse a la BD: ', error);
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor escuchando en PUERTO 3000")
})