const db = require("../config/dbConfig");

const obtenerUsuarios = (callback) => {
  db.query("SELECT * FROM usuarios", callback);
};

const obtenerUsuarioPorId = (id, callback) => {
  db.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id], callback);
};

const crearUsuario = (datos, callback) => {
  const sql = `
        INSERT INTO usuarios
        (nombre, apellido, documento, correo, telefono, password_hash, id_rol, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      datos.nombre,
      datos.apellido,
      datos.documento,
      datos.correo,
      datos.telefono,
      datos.password_hash,
      datos.id_rol,
      datos.estado,
    ],
    callback,
  );
};

const actualizarUsuario = (id, datos, callback) => {
  const sql = `
        UPDATE usuarios
        SET nombre = ?, apellido = ?, documento = ?, correo = ?,
            telefono = ?, password_hash = ?, id_rol = ?, estado = ?
        WHERE id_usuario = ?
    `;

  db.query(
    sql,
    [
      datos.nombre,
      datos.apellido,
      datos.documento,
      datos.correo,
      datos.telefono,
      datos.password_hash,
      datos.id_rol,
      datos.estado,
      id,
    ],
    callback,
  );
};

const eliminarUsuario = (id, callback) => {
  db.query("DELETE FROM usuarios WHERE id_usuario = ?", [id], callback);
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
