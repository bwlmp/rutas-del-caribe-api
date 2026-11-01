const viajeModel = require("../models/viajeModel");

module.exports = {
  obtenerViajes: (req, res) => {
    viajeModel.obtenerViajes((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  obtenerViajePorId: (req, res) => {
    const { id } = req.params;

    viajeModel.obtenerViajePorId(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Viaje no encontrado" });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  crearViaje: (req, res) => {
    const datos = req.body;

    viajeModel.crearViaje(datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({
        message: "Viaje creado",
        id_viaje: result.insertId,
      });
    });
  },

  actualizarViaje: (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    viajeModel.actualizarViaje(id, datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Viaje no encontrado" });
        return;
      }

      res.status(200).json({ message: "Viaje actualizado" });
    });
  },

  eliminarViaje: (req, res) => {
    const { id } = req.params;

    viajeModel.eliminarViaje(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Viaje no encontrado" });
        return;
      }

      res.status(200).json({ message: "Viaje eliminado" });
    });
  },
};
