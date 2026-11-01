
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Rutas del Caribe funcionando",
        estado: "OK",
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        api: "activa",
        proyecto: "Rutas del Caribe",
    });
});

const rolesRoutes = require("./routes/rolesRoutes");
const usuariosRoutes = require("./routes/usuariosRoutes");
const busesRoutes = require("./routes/busesRoutes");
const viajesRoutes = require("./routes/viajesRoutes");
const reservasRoutes = require("./routes/reservasRoutes");

app.use("/api/roles", rolesRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/buses", busesRoutes);
app.use("/api/viajes", viajesRoutes);
app.use("/api/reservas", reservasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API ejecutándose en http://localhost:${PORT}`);
});
