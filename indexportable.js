var express = require("express")
var app = express()




// como importar el modulo mongo-portable
// esto:
// import { MongoPortable } from "mongo-portable";
// se reemplaza con esto:
// var MongoPortable = require("mongo-portable").MongoPortable
var MongoPortable = require("mongo-portable").MongoPortable
let db = new MongoPortable("redsocial")

db.collection("hashtags").then(r => {
  Hashtag = r
})

// como importar el mododulo
//import { FileSystemStore } from "file-system-store";
//var filesistemstore = require("file-system-store").FileSystemStore

// usamos pug para renderizar las respuestas
var pug = require("pug")
app.set('view engine', 'pug');
// usamos morgan para ver los pedidos
morgan = require("morgan")
app.use(morgan("tiny"))

// usamos bodyParser para traer datos del REQ
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req,res)=> {
  res.redirect("/buscar")
})

app.get("/agregar",(req,res)=>{
  res.render("agregar")
})
app.post("/agregar",(req,res)=>{
  Hashtag.insert({nombre: req.body.nombre, significado: req.body.significado}).then(valores => {
    console.log(valores)
    res.render("agregar", {nom_res: valores.nombre, sig_res: valores.significado})
  })
})

app.get("/buscar",(req,res)=>{
  res.render("buscar")
})
app.post("/buscar",(req,res)=>{
  nombre_buscar = req.body.nombre1
  Hashtag.findOne({ nombre: nombre_buscar }).then(doc => {
    console.log(doc)
    valores = doc
    res.render("buscar", {nom_res: valores.nombre, sig_res: valores.significado})
  })
})


app.listen(3000)
