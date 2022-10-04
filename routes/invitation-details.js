const router = require('express').Router();
const {
  createInvDetalle,
  getInvDetalle,
  getInvDetallees,
  updateInvDetalle,
  deleteInvDetalle
} = require('../controllers/invitation-details');

router.get('/', getInvDetallees);
router.get('/:id', getInvDetalle);
router.post('/', createInvDetalle);
router.patch('/:id', updateInvDetalle);
router.delete('/:id', deleteInvDetalle);

module.exports = router;