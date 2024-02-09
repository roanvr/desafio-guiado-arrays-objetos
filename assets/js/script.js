//Array con dos objetos dentro identificados entre {}
let dental0 = [
    {
        id: 1,
        name: "Dental",
        price: 100
    },
    {
        id: 2,
        name: "Dental",
        price: 100
    }
]
//el [0] indica que estoy llamando al elemento (objeto) dentro del array. En el caso de [0] llamaría al primer elemento y [1] al segundo. 
console.log(dental0[0].id)
console.log(dental0[0].name)
console.log(dental0[0].price)

//Aquí el [0] llama al primer elemento (Juan), [1] llama al segundo elemento (Pedro) y [2] llama al tercer elemento.
let nombres = ['Juan', 'Pedro', 'María'];
console.log(nombres[0]);

//Iterar el array de objetos con un ciclo FOR
let dental1 = [
    {
        id: 1,
        name: "Endodoncia",
        price: 200
    },
    {
        id: 2,
        name: "Profilaxis",
        price: 500
    },
    {
        id: 3,
        name: "Ortodoncia",
        price: 150
    }
]
for (let i = 0; i < dental1.length; i++) {
    console.log(dental1[i].price)
}
//FOR IN. diente se refiere al índice
for(let diente in dental1) {
    console.log(dental1[diente].name)
}
//FOR of
for(let diente of dental1) {
    console.log(diente.name)
}