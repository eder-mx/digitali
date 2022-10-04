const router = require('express').Router();
const {
  createEvento,
  getEvento,
  getEventos,
  getEventosByDay,
  updateEvento,
  deleteEvento
} = require('../controllers/events');

router.get('/', getEventos);
router.get('/:id', getEvento);
//router.get('/:date', getEventosByDay);
router.post('/', createEvento);
router.patch('/:id', updateEvento);
router.delete('/:id', deleteEvento);

module.exports = router;