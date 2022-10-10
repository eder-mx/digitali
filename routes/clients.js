const router = require('express').Router();
const {
  signUpCliente,
  logInCliente,
  getCliente,
  getClientes,
  updateCliente,
  deleteCliente
} = require('../controllers/clients');
const auth = require('../config/auth');

router.get('/', auth.required, getClientes);
router.get('/:id', getCliente);
router.patch('/:id', auth.isAdmin, updateCliente);
router.delete('/:id', auth.isAdmin, deleteCliente);
router.post('/signUp', signUpCliente);
router.post('/logIn', logInCliente);

module.exports = router;