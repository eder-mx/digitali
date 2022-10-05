const router = require('express').Router();
const {
  createInvDetalle,
  getInvDetalle,
  getInvDetalles,
  updateInvDetalle,
  deleteInvDetalle
} = require('../controllers/invitation-details');

router.get('/', getInvDetalles);
router.get('/:id', getInvDetalle);
router.post('/', createInvDetalle);
router.patch('/:id', updateInvDetalle);
router.delete('/:id', deleteInvDetalle);

module.exports = router;