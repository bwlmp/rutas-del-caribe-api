
const express = require("express");
const router = express.Router();

const viajesController = require("../controllers/viajesController");

router.get("/getViajes", viajesController.obtenerViajes);
router.get("/getViajeById/:id", viajesController.obtenerViajePorId);
router.post("/postViaje", viajesController.crearViaje);
router.put("/putViaje/:id", viajesController.actualizarViaje);
router.delete("/deleteViaje/:id", viajesController.eliminarViaje);

module.exports = router;
