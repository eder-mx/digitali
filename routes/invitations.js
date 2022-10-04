const router = require('express').Router();
const {
  createInvitacion,
  getInvitacion,
  getInvitaciones,
  updateInvitacion,
  deleteInvitacion
} = require('../controllers/invitations');

router.get('/', getInvitaciones);
router.get('/:id', getInvitacion);
router.post('/', createInvitacion);
router.patch('/:id', updateInvitacion);
router.delete('/:id', deleteInvitacion);

module.exports = router;