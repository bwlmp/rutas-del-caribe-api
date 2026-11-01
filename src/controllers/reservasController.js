const reservaModel = require("../models/reservaModel");

module.exports = {
  obtenerReservas: (req, res) => {
    reservaModel.obtenerReservas((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  obtenerReservaPorId: (req, res) => {
    const { id } = req.params;

    reservaModel.obtenerReservaPorId(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Reserva no encontrada" });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  crearReserva: (req, res) => {
    const datos = req.body;

    reservaModel.crearReserva(datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({
        message: "Reserva creada",
        id_reserva: result.insertId,
      });
    });
  },

  actualizarReserva: (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    reservaModel.actualizarReserva(id, datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Reserva no encontrada" });
        return;
      }

      res.status(200).json({ message: "Reserva actualizada" });
    });
  },

  eliminarReserva: (req, res) => {
    const { id } = req.params;

    reservaModel.eliminarReserva(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Reserva no encontrada" });
        return;
      }

      res.status(200).json({ message: "Reserva eliminada" });
    });
  },
};
