function grid(size, el) {
    const container = document.createElement('div');
    container.id = "main";
    container.className = "container";
    
    if (typeof(size) == 'undefined') {
        size = 16;
    };

    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i;

        for (k = 0; k < size; k++) {
            const box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    el.appendChild(container);
}
function coloring(e) {
    if (e.target.className !== 'box') return;
    this.style.backgroundColor = "green";
}
function selectBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mousemove', coloring))
}

const button = document.querySelector('button');

button.addEventListener('click', function(e) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor="white");
    size = prompt("Enter the number of squares per side for the new grid");
    
});



grid(16, document.body);
selectBoxes();