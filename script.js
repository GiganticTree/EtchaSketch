let gridsize = '10';
container = document.querySelector('.container');
drawGrid(gridsize);
function drawGrid(gridsize) {
    for (i=0;i<gridsize*gridsize;i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');      //adds a class identifier to each tile drawn
        //tile.classList.add(i);               //uniquely marks each new tile based on the counter
        tileDimension = `${100/gridsize}%`
        tile.style.width=tile.style.paddingTop = tileDimension;
        container.appendChild(tile);
    }
}

//restores tiles to baseline when dblclicked
window.addEventListener('dblclick', function(e) {
    if(e.target.classList.contains('tile')) {
        e.target.style.opacity=0.05;
        e.target.style.background='black'
    }
});


//turns tile purple when clicked
window.addEventListener('click', function(e) {
    if(e.target.classList.contains('tile')) {
        e.target.style.background='purple';
    }
});

//makes tile 20% darker each mouseover
window.addEventListener('mouseover', function(e) {
   if(e.target.classList.contains('tile') && e.target.style.opacity!=1) {
    e.target.style.opacity =e.target.style.opacity -.1 + .35; 
   }


});

//clears and resizes grid
let button = document.querySelector('button');
button.addEventListener('click',function() {
    
    //asks for a new grid size number
    newgridsize = prompt('How many tiles wide would you like the grid?');
    
    //removes all the old boxes by setting all html within container to '' (nothing)
    document.querySelector('.container').innerHTML = '';
        
  
    drawGrid(newgridsize);
});