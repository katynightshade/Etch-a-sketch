const container = document.getElementById('container');

function makeArt() {
    createGrid(16, 16);
    generateColor();
}

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        container.appendChild(cell).className = 'grid-item';
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
    gridSize = prompt('What dimension would you like for your grid? Enter a number between 1 and 100.');
    if (isNaN(gridSize)) {
        window.alert('Please enter a valid number.');
        createGrid(16, 16);
        return;
    } else if (gridSize <= 0) {
        window.alert('Please enter a positive integer.');
        createGrid(16, 16);
        return;
    } else if (gridSize > 99) {
        window.alert('Please enter a number less than 100.');
        createGrid(16, 16);
        return;
    } else {
        createGrid(gridSize, gridSize);
        generateColor();
    }
});

makeArt();