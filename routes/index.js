const router = require('express').Router();
const clientes = require('./clients');
const eventos = require('./events');
//const invDetalle = require('./invitation-details');
const invitationes = require('./invitations');
const lugares = require('./places');

router.get('/', (req, res) => {
  res.json({info: 'Bienvenido a la API de Invitaciones Digitales'})
});

router.use('/clients', clientes);
router.use('/events', eventos);
//router.use('/invDetail', invDetalle);
router.use('/invitations', invitationes);
router.use('/places', lugares);

module.exports = router;