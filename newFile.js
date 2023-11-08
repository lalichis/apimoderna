
//const mensaje = new Promise((resolve, reject)=>{
function mensaje(){
        return new Promise((resolve, reject)=>{
    setTimeout (()=>{
        if(true)
            resolve('Este mensaje se inició hace 3 segundos')
        else
            reject('Hubo un error');
    }, 3000)
});
}

async function llamadaAasync(){
    console.log('Llamada ... ');
    const resutltado = await mensaje();
    return resutltado;
}

llamadaAasync().then( x => console.log(x)).catch(e => console.log(e));

// mensaje
// .then(msj =>{
//     console.log(msj);
// })
// .catch( error =>{
//     console.log(error);
// })