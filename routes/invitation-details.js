const router = require('express').Router();
const {
  createInvDetalle,
  getInvDetalle,
  getInvDetalles,
  updateInvDetalle,
  deleteInvDetalle
} = require('../controllers/invitation-details');
const auth = require('../config/auth');

router.get('/', getInvDetalles);
router.get('/:id', getInvDetalle);
router.post('/', auth.required, createInvDetalle);
router.patch('/:id', auth.required, updateInvDetalle);
router.delete('/:id', auth.required, deleteInvDetalle);

module.exports = router;