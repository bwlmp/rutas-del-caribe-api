const busModel = require("../models/busModel");

module.exports = {
  obtenerBuses: (req, res) => {
    busModel.obtenerBuses((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  obtenerBusPorId: (req, res) => {
    const { id } = req.params;

    busModel.obtenerBusPorId(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Bus no encontrado" });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  crearBus: (req, res) => {
    const datos = req.body;

    busModel.crearBus(datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({
        message: "Bus creado",
        id_bus: result.insertId,
      });
    });
  },

  actualizarBus: (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    busModel.actualizarBus(id, datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Bus no encontrado" });
        return;
      }

      res.status(200).json({ message: "Bus actualizado" });
    });
  },

  eliminarBus: (req, res) => {
    const { id } = req.params;

    busModel.eliminarBus(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Bus no encontrado" });
        return;
      }

      res.status(200).json({ message: "Bus eliminado" });
    });
  },
};
