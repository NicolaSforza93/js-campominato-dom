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