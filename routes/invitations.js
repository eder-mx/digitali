const router = require('express').Router();
const {
  createInvitacion,
  getInvitacion,
  getInvitaciones,
  updateInvitacion,
  deleteInvitacion
} = require('../controllers/invitations');
const auth = require('../config/auth');

router.get('/', getInvitaciones);
router.get('/:id', getInvitacion);
router.post('/', auth.required, createInvitacion);
router.patch('/:id', auth.required, updateInvitacion);
router.delete('/:id', auth.required, deleteInvitacion);

module.exports = router;