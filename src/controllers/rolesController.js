const rolModel = require("../models/rolModel");

module.exports = {
  obtenerRoles: (req, res) => {
    rolModel.obtenerRoles((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  obtenerRolPorId: (req, res) => {
    const { id } = req.params;

    rolModel.obtenerRolPorId(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Rol no encontrado" });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  crearRol: (req, res) => {
    const datos = req.body;

    rolModel.crearRol(datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({
        message: "Rol creado",
        id_rol: result.insertId,
      });
    });
  },

  actualizarRol: (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    rolModel.actualizarRol(id, datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Rol no encontrado" });
        return;
      }

      res.status(200).json({ message: "Rol actualizado" });
    });
  },

  eliminarRol: (req, res) => {
    const { id } = req.params;

    rolModel.eliminarRol(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Rol no encontrado" });
        return;
      }

      res.status(200).json({ message: "Rol eliminado" });
    });
  },
};
