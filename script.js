const square = document.querySelector('.gridPiece');
let gridsize = '16';
container = document.querySelector('.container');
drawGrid(gridsize);
function drawGrid(gridsize) {
    for (i=0;i<gridsize*gridsize;i++) {
        let gridPiece = document.createElement('div');
        gridPiece.classList.add('gridPiece');
        gridPiece.classList.add(i);
        container.appendChild(gridPiece);
    }
}

window.addEventListener('mouseover', function(square) {
    square.classList.add('touched');
});

let button = document.querySelector('button');
button.addEventListener('click',function() {
    gridsize = prompt('How many tiles wide would you like the grid?');
    drawGrid(gridsize);
})