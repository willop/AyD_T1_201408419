const express = require("express");
const app = express();

app.use(express.json());
app.get("/",(req,res) =>{
    res.send("Hola mundo");
})

app.post("/sumar",(req,res) =>{
    try {
        var dato = req.body;
        var num1 = dato.numero
        var num2 = dato.numero2
        var suma = num1 + num2
        res.json({"resultado suma":suma});
    }catch(err){
        console.log("error: "+err)
    }
})

app.post("/restar",(req,res) =>{
    try {
        var dato = req.body;
        var num1 = dato.numero
        var num2 = dato.numero2
        var resta = num1 - num2
        res.json({"resultado suma":resta});
    }catch(err){
        console.log("error: "+err)
    }
})

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})
