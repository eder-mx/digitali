const router = require('express').Router();
const {
  createLugar,
  getLugar,
  getLugares,
  updateLugar,
  deleteLugar
} = require('../controllers/places');

router.get('/', getLugares);
router.get('/:id', getLugar);
router.post('/', createLugar);
router.patch('/:id', updateLugar);
router.delete('/:id', deleteLugar);

module.exports = router;