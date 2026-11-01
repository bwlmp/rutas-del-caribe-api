const express = require('express');
const router = express.Router();

const rolesController = require('../controllers/rolesController');

router.get('/getRoles', rolesController.obtenerRoles);
router.get('/getRolById/:id', rolesController.obtenerRolPorId);
router.post('/postRol', rolesController.crearRol);
router.put('/putRol/:id', rolesController.actualizarRol);
router.delete('/deleteRol/:id', rolesController.eliminarRol);

module.exports = router;