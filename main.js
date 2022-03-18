const container = document.getElementById('container');

/*function makeArt() {
    createGrid(16,16);
    //generateColor();
    //resetGrid();
    newGrid();
}*/

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', generateColor());
    }
}

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

const changeBtn = document.getElementById('change');
    
changeBtn.addEventListener('click', function changeSize(gridSize) {
    container.innerHTML = '';
    gridSize = prompt('What dimension would you like for your grid?');
    if (isNaN(gridSize)) {
        window.alert('Please enter a valid number.');
        return;
    } else if (gridSize <= 0) {
        window.alert('Please enter a positive integer.');
        return;
    } else if (gridSize > 63) {
        window.alert('Please enter a number less than 64.');
        return;
    } else {
        createGrid(gridSize, gridSize);
    }
});


createGrid(16, 16);
//newGrid();

//makeArt();

//non-functional script

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

/*function createGrid() {
    let gridWidth = container.offsetWidth / gridSize;
    container.style.gridTemplateColumns = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    if (gridSize < 4) {
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
    }

    for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement('div');
    square.className = 'grid-item';
    cell.style.border = '1px solid black';
    container.appendChild(square);
}*/

/*function hoverState() {
    const color = ['#ff2f8e', '#ff9e4c', '#ffd600', '#66df48', '#6a77dd', '#9803ce'];
    const gridItem = document.querySelector('.grid-item');
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.background = Math.floor(Math.random() * color.length);
    });
}*/

/*function newGrid() {
    const changeBtn = document.getElementById('change');
    changeBtn.addEventListener('click', () =>{
        let promptGridSize = prompt('What dimension would you like for your grid?');
        let gridSize = parseInt(promptGridSize);
        if (isNaN(gridSize)) {
            window.alert('Please enter a valid number.');
            return;
        } else if (gridSize <= 0) {
            window.alert('Please enter a positive integer.');
            return;
        } else if (gridSize > 63) {
            window.alert('Please enter a number less than 64.');
            return;
        } else {
            return createGrid(gridSize);
        }
    });
    const container = document.getElementById('container');
    while (container.firstChild) container.removeChild(container.firstChild);
    //createGrid(gridSize);
}*/

/*function rangeSlider(value) {
    let sliderBar = document.getElementById('progress-bar');
    let gridLabels = document.querySelectorAll('#range-value');
    sliderBar.style.width = (value / 60) * 100 + '%';
    for(let i = 0; i < gridLabels.length; i++) {
        gridLabels[i].textContent = value;
    };
    gridSize = parseInt(value);
}*/

/*function createGrid(gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        for (let columns = 0; columns < gridSize; columns++) {
            const cell = document.createElement('div');
            cell.className = 'grid-item';
            cell.style.border = '1px solid black';
            container.appendChild(cell);
        };
    };
}*/

/*function resetGrid() {
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', () => {
        container.innerHTML = createGrid(16, 16);
    });    
}*/