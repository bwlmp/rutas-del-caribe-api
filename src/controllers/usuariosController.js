const usuarioModel = require("../models/usuarioModel");

module.exports = {
  obtenerUsuarios: (req, res) => {
    usuarioModel.obtenerUsuarios((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  obtenerUsuarioPorId: (req, res) => {
    const { id } = req.params;

    usuarioModel.obtenerUsuarioPorId(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  crearUsuario: (req, res) => {
    const datos = req.body;

    usuarioModel.crearUsuario(datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({
        message: "Usuario creado",
        id_usuario: result.insertId,
      });
    });
  },

  actualizarUsuario: (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    usuarioModel.actualizarUsuario(id, datos, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
      }

      res.status(200).json({ message: "Usuario actualizado" });
    });
  },

  eliminarUsuario: (req, res) => {
    const { id } = req.params;

    usuarioModel.eliminarUsuario(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
      }

      res.status(200).json({ message: "Usuario eliminado" });
    });
  },
};
