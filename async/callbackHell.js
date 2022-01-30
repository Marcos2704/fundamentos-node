function hola (nombre, miCallback){
    setTimeout(function(){
        console.log("hola "+nombre)
        miCallback(nombre)
    },1000)
}

function hablar (callback){
    setTimeout(function(){
        console.log("bla bla bla bla")
        callback()
    },1000)
}

function adios (nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios "+nombre)
        otroCallback();
    },1000)
}
console.log("iniciando proceso")

//ESTO DE ACA ABAJO ESTA MAL 
/* hola("carlos", function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log("proceso terminado")
                })      
             })
        })
    })
}) */

//ESTO DE ACA ESTA BIEN

function conversacion (nombre, veces, callback){
    if (veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }
    else{
        adios(nombre, callback)
    } 
}

//--

hola("carlos", function(nombre){
    conversacion(nombre, 3 ,function(){
        console.log("terminando proceso")
    })
 })



