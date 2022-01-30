function hola (nombre){
    return new Promise ((resolve, reject) => {
        setTimeout(function(){
            console.log("hola "+nombre)
            resolve()
        },1000)
    })
  
}

function hablar (nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("bla bla bla bla")
            //resolve(nombre)
            reject("ha un error")
        },1000)
    } )
   S
}

function adios (nombre){
    return new Promise ( (resolve, reject) =>{
        setTimeout(function(){
            console.log("Adios "+nombre)
            resolve()
        },1000)
    } )
    
}

console.log("iniciando proceso...")
hola("carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then( (nombre) => {
        console.log("termiando proceso...")
    })
    .catch(error =>{
        console.log("hay un error")
        console.log(error)
    })