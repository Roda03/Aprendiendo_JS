/*Crear una ruta suma que reciba dos numeros y que devuelva el resultado */
/*Configuraciones */
const express = require("express");
const app = express();

/*Middleware(app.use)*/
app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        "healthy":"endpoint funcionando"
    });
});

app.post("/suma", (req,res) => {
    const a = req.body.a;
    const b = req.body.b;

    if(a === undefined || b === undefined){
        return res.status(400).json({
            error:"Faltan datos"
        });
    };

    const numA = Number(a);
    const numB = Number(b);

    if(isNaN(numA) || isNaN(numB)){
        return res.status(400).json({
            error:"Los valores deben ser numeros"
        });
    }

    const suma = numA + numB;

    res.json({
        resultado:suma
    });
});

app.listen(3000, () =>{
    console.log("Servidor funcionando")
})

