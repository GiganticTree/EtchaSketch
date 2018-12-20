container = document.querySelector('.container');
for (i=0;i<16*16;i++) {
    let gridPiece = document.createElement('div');
    gridPiece.classList.add('gridPiece');
    container.appendChild(gridPiece);
}