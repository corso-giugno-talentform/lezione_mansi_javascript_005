// let pagina = document;

// //Selettori
// //1) Selettore per ID
// // const header = document.querySelector('#main-header');
// // const body = document.querySelector('#corpo-principale');
// // const test = document.querySelector('#test');
// //console.log(document, header, body, test);


// //Cambiare il contentuo HTML
// const h1 = document.querySelector('h1');
// const span = document.querySelector('span');
// const nome = 'Francesco';
// const eta = 18;
// // // if (1 > 2) {
// h1.innerHTML = `<h3>${nome}</h3><p>${eta}</p> `
// // }

// span.innerText = 'Buon Pomeriggio';
let fruits = [
    'Pera', 'Mela', 'Banana', 'Kiwi', 'Arancia', 'Limone', 'Fragola', 'Ciliegia',
    'Pesca', 'Albicocca', 'Prugna', 'Uva', 'Ananas', 'Mango', 'Papaya', 'Cocco',
    'Avocado', 'Melograno', 'Fico', 'Dattero', 'Lampone', 'Mirtillo', 'Mora',
    'Ribes', 'Pompelmo', 'Mandarino', 'Clementina', 'Lime', 'Melone', 'Anguria',
    'Cachi', 'Nespola', 'Susina', 'Amarena', 'Marasca', 'Visciola', 'Sambuco',
    'Giuggiola', 'Corbezzolo', 'Sorbo', 'Nespolo', 'Azzeruolo', 'Cotogna',
    'Bergamotto', 'Cedro', 'Chinotto', 'Kumquat', 'Litchi', 'Rambutan', 'Durian'
];
const lista = document.querySelector('#lista');

// for (let i = 0; i < fruits.length; i++) {

//     lista.innerHTML += `<li> ${fruits[i]} </li>`;
// }

fruits.forEach(function (frutta) {
    lista.innerHTML += `<li> ${frutta} </li>`;
});

console.log(lista);

