const router = require('express').Router();
const {
  signUpCliente,
  logInCliente,
  getCliente,
  getClientes,
  updateCliente,
  deleteCliente
} = require('../controllers/clients');

router.get('/', getClientes);
router.get('/:id', getCliente);
router.patch('/:id', updateCliente);
router.delete('/:id', deleteCliente);
router.post('/signUp', signUpCliente);
router.post('/logIn', logInCliente);

module.exports = router;