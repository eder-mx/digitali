const router = require('express').Router();
const {
  createCliente,
  getCliente,
  getClientes,
  updateCliente,
  deleteCliente
} = require('../controllers/clients');

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', createCliente);
router.patch('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;