const db = require("../config/dbConfig");

const obtenerRoles = (callback) => {
  db.query("SELECT * FROM roles", callback);
};

const obtenerRolPorId = (id, callback) => {
  db.query("SELECT * FROM roles WHERE id_rol = ?", [id], callback);
};

const crearRol = (datos, callback) => {
  const sql = `
        INSERT INTO roles (nombre_rol, descripcion)
        VALUES (?, ?)
    `;

  db.query(sql, [datos.nombre_rol, datos.descripcion], callback);
};

const actualizarRol = (id, datos, callback) => {
  const sql = `
        UPDATE roles
        SET nombre_rol = ?, descripcion = ?
        WHERE id_rol = ?
    `;

  db.query(sql, [datos.nombre_rol, datos.descripcion, id], callback);
};

const eliminarRol = (id, callback) => {
  db.query("DELETE FROM roles WHERE id_rol = ?", [id], callback);
};

module.exports = {
  obtenerRoles,
  obtenerRolPorId,
  crearRol,
  actualizarRol,
  eliminarRol,
};
