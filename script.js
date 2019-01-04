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
        e.target.style.background='black';
    }
});
let colorName = 'blue';

//turns tile color when clicked
window.addEventListener('click', function(e) {
    if(e.target.classList.contains('tile')) {
        //color = getColor();
        e.target.style.background='black';
    }
});

let penOn = 0;
window.addEventListener('keydown', function(e) {
    if (e.keyCode ==83) {
        penOn += 1;
    }
}
);



//makes tile 20% darker each mouseover
window.addEventListener('mouseover', function(e) {
   if(e.target.classList.contains('tile') && e.target.style.opacity!=1 && penOn%2==0) {
    e.target.style.opacity =e.target.style.opacity -.1 + .35; 
    e.target.style.background=colorName;
   }


});

let blueColor = document.querySelector('#blue');
blueColor.addEventListener('click', function() {
    colorName='blue';
    return(colorName);
});

let greenColor = document.querySelector('#green');
greenColor.addEventListener('click', function() {
    colorName='green';
    return(colorName);
});

let redColor = document.querySelector('#red');
redColor.addEventListener('click', function() {
    colorName='red';
    return(colorName);
});

let orangeColor = document.querySelector('#orange');
orangeColor.addEventListener('click', function() {
    colorName='rgb(255, 136, 0)';
    return(colorName);
});

let yellowColor = document.querySelector('#yellow');
yellowColor.addEventListener('click', function() {
    colorName='yellow';
    return(colorName);
});

let purpleColor = document.querySelector('#purple');
purpleColor.addEventListener('click', function() {
    colorName='purple';
    return(colorName);
});
//clears and resizes grid
let newGrid = document.querySelector('#newgrid');
newGrid.addEventListener('click',function() {
    
    //asks for a new grid size number
    newgridsize = prompt('How many tiles wide would you like the grid?');
    while(newgridsize >100 || isNaN(newgridsize) || newgridsize =='') {
        newgridsize = prompt('Enter a number smaller than 100.');
    }
    //removes all the old boxes by setting all html within container to '' (nothing)
    document.querySelector('.container').innerHTML = '';
        
  
    drawGrid(newgridsize);
});
let tiles = document.getElementsByClassName('tile');
let clearGrid = document.querySelector('#cleargrid');
clearGrid.addEventListener('click',function(){
   for (i=0; i<tiles.length;i++) {
    tiles[i].style.opacity=.05;
    tiles[i].style.background='black';
   }

});