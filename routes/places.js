const router = require('express').Router();
const {
  createLugar,
  getLugar,
  getLugares,
  updateLugar,
  deleteLugar
} = require('../controllers/places');
const auth = require('../config/auth');

router.get('/', getLugares);
router.get('/:id', getLugar);
router.post('/', auth.isAdmin, createLugar);
router.patch('/:id', auth.isAdmin, updateLugar);
router.delete('/:id', auth.isAdmin, deleteLugar);

module.exports = router;