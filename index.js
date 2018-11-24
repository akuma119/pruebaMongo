var express = require("express")
var app = express()

// usamos pug para renderizar las respuestas
var pug = require("pug")
app.set('view engine', 'pug');
// usamos morgan para ver los pedidos
morgan = require("morgan")
app.use(morgan("tiny"))

// usamos bodyParser para traer datos del REQ
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

// base de datos
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/redsocial")


//definimos la forma de un esquema
var hashtag_schema = new mongoose.Schema({
  nombre:String,
  significado:String
})

// definimos una variable que maneja el modelo para el objeto "hashtag"
var Hashtag = mongoose.model("hashtag",hashtag_schema)

app.get("/", (req,res)=> {
  res.redirect("/buscar")
})

app.get("/agregar",(req,res)=>{
  res.render("agregar")
})
app.post("/agregar",(req,res)=>{
  valores = new Hashtag({nombre: req.body.nombre, significado: req.body.significado})
  console.log(valores)
  res.render("agregar", {nom_res: valores.nombre, sig_res: valores.significado})
  valores.save(()=> {console.log("hashtag guardado: ",valores)})
})

app.get("/buscar",(req,res)=>{

  res.render("buscar")
})
app.post("/buscar",(req,res)=>{
  nombre_buscar = req.body.nombre1
  Hashtag.findOne({nombre: nombre_buscar}, (err,doc)=> {
    console.log(doc)
    valores = doc
    res.render("buscar", {nom_res: valores.nombre, sig_res: valores.significado})
  })
})


app.listen(3000)
