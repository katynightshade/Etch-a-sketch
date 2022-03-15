/*const container = document.getElementById('container');

function makeRows(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for(c = 0; c < (rows * columns); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16, 16);*/

/*function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            $('#container').append("<div class='grid'></div>")
        };
    };
    $('.grid').width(960/x);
    $('.grid').height(960/x);
}
createGrid(16);*/

/*const container = document.getElementById('container');

function createGrid(rows, cols) {
    for(let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.className('grid-item');
        container.appendChild(cell);
    }
}

createGrid(16, 16);*/

const container = document.getElementById('container');

function makeArt() {
    createGrid(16);
    //hoverState();
    generateColor();
    newGrid();
}

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            const cell = document.createElement('div');
            cell.className = 'grid-item';
            cell.style.border = '1px solid black';
            container.appendChild(cell);
        };
    };
}

/*function hoverState() {
    const color = ['#ff2f8e', '#ff9e4c', '#ffd600', '#66df48', '#6a77dd', '#9803ce'];
    const gridItem = document.querySelector('.grid-item');
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.background = Math.floor(Math.random() * color.length);
    });
}*/

function generateColor() {
    const color = ['#ff2f8e', '#ff9e4c', '#ffd600', '#66df48', '#6a77dd', '#9803ce', '#000000'];
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((item) => {
        const randomColors = color[Math.floor(Math.random()*color.length)];
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = randomColors;
        });
    });
}

/*function resetGrid() {
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', () => {
        window.location.reload();
    });    
}*/

function newGrid() {
    const changeBtn = document.getElementById('change');
    changeBtn.addEventListener('click', () =>{
        let gridSize = prompt('What dimension would you like for your grid?');
        if (gridSize == null) {
            gridSize = prompt('Please enter a valid number.');
        } else if (gridSize > 63) {
            gridSize = prompt('Please enter a number less than 64.');
        } else {
            createGrid(gridSize);
        }
    });
}

//makeArt();
newGrid();