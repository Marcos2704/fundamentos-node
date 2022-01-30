const fs = require("fs")

leer = (ruta, cb) =>{
    fs.readFile(ruta, (err, data) =>{
        console.log(data.toString())
    })
}

escribir = (ruta, contenido, cb) =>{
    fs.writeFile(ruta, contenido, (err) =>{
        if (err){
            console.log("no puede escribir el archivo "+err)
        }
        else{
            console.log("el archibo ya esta escrito")
        }
    } )
}

borrar = (ruta, cb) =>{
    fs.unlink(ruta,cb)
}

 leer(__dirname + "/archivo.txt")
 escribir(__dirname + "/archivoNuevo.txt", "soy el nuevo archivo", console.log)
 borrar(__dirname + "/archivo.txt", console.log)