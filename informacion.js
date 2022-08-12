const express = require("express");
const app = express();

app.use(express.json());
app.get("/",(req,res) =>{
    res.send("Hola mundo");
})

app.get("/informacion",(req,res) =>{
    res.json({"Nombre":"Wilfred Stewart Perez Solorzano","carnet":201408419});
})
app.listen(4000, ()=>{
    console.log("Servidor corriendo en el puerto 4000");
})
