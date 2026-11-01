
const express = require("express");
const router = express.Router();

const busesController = require("../controllers/busesController");

router.get("/getBuses", busesController.obtenerBuses);
router.get("/getBusById/:id", busesController.obtenerBusPorId);
router.post("/postBus", busesController.crearBus);
router.put("/putBus/:id", busesController.actualizarBus);
router.delete("/deleteBus/:id", busesController.eliminarBus);

module.exports = router;
