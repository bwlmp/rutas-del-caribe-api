const db = require("../config/dbConfig");

const obtenerBuses = (callback) => {
  db.query("SELECT * FROM buses", callback);
};

const obtenerBusPorId = (id, callback) => {
  db.query("SELECT * FROM buses WHERE id_bus = ?", [id], callback);
};

const crearBus = (datos, callback) => {
  const sql = `
        INSERT INTO buses
        (placa, numero_interno, marca, modelo, capacidad, estado)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      datos.placa,
      datos.numero_interno,
      datos.marca,
      datos.modelo,
      datos.capacidad,
      datos.estado,
    ],
    callback,
  );
};

const actualizarBus = (id, datos, callback) => {
  const sql = `
        UPDATE buses
        SET placa = ?, numero_interno = ?, marca = ?,
            modelo = ?, capacidad = ?, estado = ?
        WHERE id_bus = ?
    `;

  db.query(
    sql,
    [
      datos.placa,
      datos.numero_interno,
      datos.marca,
      datos.modelo,
      datos.capacidad,
      datos.estado,
      id,
    ],
    callback,
  );
};

const eliminarBus = (id, callback) => {
  db.query("DELETE FROM buses WHERE id_bus = ?", [id], callback);
};

module.exports = {
  obtenerBuses,
  obtenerBusPorId,
  crearBus,
  actualizarBus,
  eliminarBus,
};
