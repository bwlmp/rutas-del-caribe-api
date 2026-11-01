
const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

router.get("/getUsuarios", usuariosController.obtenerUsuarios);
router.get("/getUsuarioById/:id", usuariosController.obtenerUsuarioPorId);
router.post("/postUsuario", usuariosController.crearUsuario);
router.put("/putUsuario/:id", usuariosController.actualizarUsuario);
router.delete("/deleteUsuario/:id", usuariosController.eliminarUsuario);

module.exports = router;
