const libExpress = require('express')
var aplicacion = libExpress()

//Creamos dos URL
aplicacion.get('/', inicio)
aplicacion.get('/cursos', cursos)

function inicio(peticion, resultado){
  resultado.send("Este es el <strong>home</strong>")
}

function cursos(peticion, resultado){
  resultado.send("Estos son los <strong>cursos</strong>")
}

//Ponemos el servidor a correr en el puerto correspondiente
aplicacion.listen(8989)
