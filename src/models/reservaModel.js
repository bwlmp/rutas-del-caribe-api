const db = require("../config/dbConfig");

const obtenerReservas = (callback) => {
  db.query("SELECT * FROM reservas", callback);
};

const obtenerReservaPorId = (id, callback) => {
  db.query("SELECT * FROM reservas WHERE id_reserva = ?", [id], callback);
};

const crearReserva = (datos, callback) => {
  const sql = `
        INSERT INTO reservas
        (
            codigo_reserva, id_usuario, id_viaje,
            asiento, valor_pagado, estado
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      datos.codigo_reserva,
      datos.id_usuario,
      datos.id_viaje,
      datos.asiento,
      datos.valor_pagado,
      datos.estado,
    ],
    callback,
  );
};

const actualizarReserva = (id, datos, callback) => {
  const sql = `
        UPDATE reservas
        SET codigo_reserva = ?, id_usuario = ?, id_viaje = ?,
            asiento = ?, valor_pagado = ?, estado = ?
        WHERE id_reserva = ?
    `;

  db.query(
    sql,
    [
      datos.codigo_reserva,
      datos.id_usuario,
      datos.id_viaje,
      datos.asiento,
      datos.valor_pagado,
      datos.estado,
      id,
    ],
    callback,
  );
};

const eliminarReserva = (id, callback) => {
  db.query("DELETE FROM reservas WHERE id_reserva = ?", [id], callback);
};

module.exports = {
  obtenerReservas,
  obtenerReservaPorId,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
};
