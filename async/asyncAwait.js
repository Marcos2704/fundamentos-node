async function hola (nombre){
    return new Promise ((resolve, reject) => {
        setTimeout(function(){
            console.log("hola "+nombre)
            resolve()
        },1000)
    })
  
}

async function hablar (){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("bla bla bla bla")
            //resolve(nombre)
            resolve()
        },1000)
    } )
   
}

async function adios (nombre){
    return new Promise ( (resolve, reject) =>{
        setTimeout(function(){
            console.log("Adios "+nombre)
            resolve()
        },1000)
    } )
    
}

async function main (){
    let nombre = await hola ("carlos")
    await hablar()
    await hablar()
    await hablar()
    await adios (nombre)
    console.log("Terminando proceso")
}
main()

console.log("Empezando proceso")

