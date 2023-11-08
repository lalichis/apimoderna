//import './trusted-security-policies.mjs';

const express = require('express');

const app = express();

app.use(express.json);



const usuarios = [
    {id:1, nombre:'Lalo', apellidoPat:'Rocha'},
    {id:2, npmbre:'Mary', apellidoPat:'Gutierrez'},
    {id:3, nombre:'Miguel', apellidoPat:'Rocha'}
];

app.get('/',(req, res)=>{
    res.send('Bienvenido a mi servicio desde express');
});

app.get('/api/usuarios', (req, res)=>{
    res.send(['Lalo', 'Luis', 'Hugo', 'Paco']);
});

app.get('/api/usuarios/:id', (req, res)=>{
   // res.send(req.params);
   let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
   if(!usuario) res.status(404).send('El usuario no fue encontrado');
   res.send(usuario);
});

// app.post('/api/usuarios', (req, res)=>{
//     const usuario = {
//         id: usuarios.length+1,
//         nombre: req.body.nombre,
//         apellidoPat : req.body.apellidoPat
//     };
//     usuarios.push(usuario);
//     res.send(usuario);
// });

const port = 5000;
app.listen(port, ()=>{
    console.log(`Escuchando desde el puerto ${port} ....`);
});
// app.post();
// app.put();
// app.delete();





// $(document).ready(function(){
//     $.getJSON("activities.json",function(data){
//         console.log(data);                              
//     })
// })

// const  anios = [2000, 2005, 2008, 2012];

// var edad5 = anios.map(function(el){
//     return 2019 - el;
// });

// console.log (edad5);

// //funciones tipo flecha
// let edad6 = anios.map(el =>   2019-el)

// console.log(edad6);



//callback
//funciones callbacck
// console.log('*****Primer ejemplo*****')
// function Mensaje(callback){
//     console.log('Mensaje antes de la llamada al callback');
//     callback()
// }
// function Saludo(){
//     console.log('Mensaje después de la llamada al callback');
// }
// Mensaje(Saludo)
// console.log('*****Segundo ejemplo*****')
// function Sumar(num1, num2, callbacck){
//     let resultado = num1+ num2;
//     callbacck(resultado);

// }
// function Result(res){
//     console.log(res);
// }
// Sumar(5, 8, Result);

// setTimeout(()=>{
//     console.log("este mensaje se inició hace 3 segundos")}, 3000);

// const mensaje = new Promise((resolve, reject)=>{
//     setTimeout (()=>{
//         if(true)
//             resolve('Este mensaje se inició hace 3 segundos')
//         else
//             reject('Hubo un error');
//     }, 3000)
// });

// mensaje
// .then(msj =>{
//     console.log(msj);
// })
// .catch( error =>{
//     console.log(error);
// })