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

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            const cell = document.createElement('div');
            cell.className = 'grid-item';
            container.appendChild(cell);
        };
    };
}
createGrid(16);