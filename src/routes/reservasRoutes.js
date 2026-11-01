
const express = require("express");
const router = express.Router();

const reservasController = require("../controllers/reservasController");

router.get("/getReservas", reservasController.obtenerReservas);
router.get("/getReservaById/:id", reservasController.obtenerReservaPorId);
router.post("/postReserva", reservasController.crearReserva);
router.put("/putReserva/:id", reservasController.actualizarReserva);
router.delete("/deleteReserva/:id", reservasController.eliminarReserva);

module.exports = router;
