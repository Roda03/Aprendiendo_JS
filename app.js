const express = require("express"); /* Importa Express */ 

const app = express(); /*Crea la app */

app.get("/",(req,res) => { /*Ruta HTTP en donde req=request y 
                           res = response*/
    res.send("Hola desde Express"); /*Esta es una respuesta HTTP*/
});

/* req(request) es lo que envia el cliente */
/* res(response) es lo que devuelve el servidor */

app.get("/saludo",(req,res) => {
    console.log("Nueva request recibida");
    res.send("Hola usuario");
});

app.listen(3000,() => {
    console.log("Servidor funcionando correctamente");
});/*El servidor queda esperando requests en el puerto 3000*/