const db = require("../config/dbConfig");

const obtenerViajes = (callback) => {
  db.query("SELECT * FROM viajes", callback);
};

const obtenerViajePorId = (id, callback) => {
  db.query("SELECT * FROM viajes WHERE id_viaje = ?", [id], callback);
};

const crearViaje = (datos, callback) => {
  const sql = `
        INSERT INTO viajes
        (
            origen, destino, fecha_salida, hora_salida,
            duracion_minutos, precio, id_bus, id_conductor, estado
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      datos.origen,
      datos.destino,
      datos.fecha_salida,
      datos.hora_salida,
      datos.duracion_minutos,
      datos.precio,
      datos.id_bus,
      datos.id_conductor,
      datos.estado,
    ],
    callback,
  );
};

const actualizarViaje = (id, datos, callback) => {
  const sql = `
        UPDATE viajes
        SET origen = ?, destino = ?, fecha_salida = ?,
            hora_salida = ?, duracion_minutos = ?, precio = ?,
            id_bus = ?, id_conductor = ?, estado = ?
        WHERE id_viaje = ?
    `;

  db.query(
    sql,
    [
      datos.origen,
      datos.destino,
      datos.fecha_salida,
      datos.hora_salida,
      datos.duracion_minutos,
      datos.precio,
      datos.id_bus,
      datos.id_conductor,
      datos.estado,
      id,
    ],
    callback,
  );
};

const eliminarViaje = (id, callback) => {
  db.query("DELETE FROM viajes WHERE id_viaje = ?", [id], callback);
};

module.exports = {
  obtenerViajes,
  obtenerViajePorId,
  crearViaje,
  actualizarViaje,
  eliminarViaje,
};
