const gridContainer = document.querySelector(".grid-container");

function createGrid(righeX, colonneY) {
    const cellsNumber = righeX * colonneY;


    gridContainer.style.width = `calc(var(--cell-size) * ${righeX}`;

    for (let i = 1; i <= cellsNumber; i++) {
        
        const cellNumber = [i]
        const cell =document.createElement("div");

        cell.classList.add("cell");
        cell.innerHTML = `<span>${cellNumber}</span>`;
        gridContainer.append(cell);

        cell.addEventListener("click", function() {
            this.classList.add("blue-color");
        })
    }
}

createGrid (10,10);