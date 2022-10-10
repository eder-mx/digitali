const router = require('express').Router();
const {
  createEvento,
  getEvento,
  getEventos,
  getEventosByDay,
  updateEvento,
  deleteEvento
} = require('../controllers/events');
const auth = require('../config/auth');

router.get('/', getEventos);
router.get('/:id', getEvento);
//router.get('/:date', getEventosByDay);
router.post('/', auth.required, createEvento);
router.patch('/:id', auth.required, updateEvento);
router.delete('/:id', auth.required, deleteEvento);

module.exports = router;