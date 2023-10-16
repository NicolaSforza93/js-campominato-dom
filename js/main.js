// console.log('Campo Minato');
// - recupero dal Dom l'elemento con la classe grid
const gridDomElement = document.querySelector('.grid');
// console.log(gridDomElement);
// - recupero dal Dom l'elemento con la classe btn-play
const btnDomElement = document.getElementById('btn-play');
// console.log(btnDomElement);


// - aggiungo all'elemento button l'event listener e una funzione che andrà a generare la griglia
btnDomElement.addEventListener('click', function() {
// - svuoto la griglia generata in precedenza
    gridDomElement.innerHTML = '';
// - inizializzo una variabile che richiama la funzione getArrayOfRandomIntBetween
    const bombs = getArrayOfRandomIntBetween(1, 100, 16);
    console.log(bombs);
// - apro un ciclo for per generare le 100 celle
    for (let i = 0; i < 100; i ++) {
        const n = i + 1;
        // console.log(n);

        const htmlCell = `<div class="cell">${n}</div>`
        // console.log(htmlCell);

        gridDomElement.innerHTML += htmlCell
    }
// - recupero le celle create
    const cellDomElement = document.querySelectorAll('.cell');
    // console.log(cellDomElement);
// - vado a ciclare l'array con le celle del Dom
    for (let i = 0; i < cellDomElement.length; i++) {
        const currentCell = cellDomElement[i];
        // console.log(currentCell);
// - aggiungo l'event listener ad ogni cella
        currentCell.addEventListener('click', function() {
            currentCell.classList.add('bg-blue');
            console.log('La casella cliccata è la numero ' + (i + 1));
        })
    }    
})

// - dichiaro una funzione che generi 16 numeri casuali nel range prescelto
function getArrayOfRandomIntBetween (minRange, maxRange, number) {
    // - inizializzo una varibile con un array vuoto
    const bombsArray = [];
    // - vado a popolare l'array con i 16 numeri casuali attraverso un ciclo while
    while (bombsArray.length < number) {
        // - genero i numeri random attraverso la funzione getRandomIntInclusive
        const n = getRandomIntInclusive(minRange, maxRange);
        // console.log(n);
        // - SE n non è presente nell'array di bombe
        if (!bombsArray.includes(n)) {
            // - pushare il numero nell'array
            bombsArray.push(n);
        }
        
    }
    return bombsArray
}

// - dichiaro una funzione per generare i numeri random
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
