/*Configuracion del express */
const express = require("express");
const app = express();

app.use(express.json());/*Middleware para usar el formato JSON */

app.post("/saludo", (req,res) => {
    const nombre = req.body.nombre;

    res.json({
        mensaje : `Hola! ${nombre}`
    });
});

app.listen(5000, () => {
    console.log("Servidor funcionando");
});