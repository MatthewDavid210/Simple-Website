function setup() {
    let header = createHeader();
    header.style('background-color', '#333');
    header.style('color', '#fff');
    header.style('text-align', 'center');
    header.style('padding', '20px 0');
    header.html('<h1>My Portfolio</h1>');
  
    let nav = createNav();
    nav.style('text-align', 'center');
  
    let links = selectAll('.links a');
    links.forEach(link => {
        link.style('display', 'inline-block');
        link.style('padding', '10px 20px');
        link.style('margin', '0 5px');
        link.style('text-decoration', 'none');
        link.style('color', '#fff');
        link.style('background-color', '#555');
        link.style('border', '2px solid #555');
        link.style('border-radius', '5px');
        link.style('transition', 'background-color 0.3s, border-color 0.3s');
    });
  
    links.forEach(link => {
        link.mouseOver(() => {
            link.style('background-color', '#fff');
            link.style('color', '#333');
            link.style('border-color', '#fff');
        });
      
        link.mouseOut(() => {
            link.style('background-color', '#555');
            link.style('color', '#fff');
            link.style('border-color', '#555');
        });
    });
}

function createHeader() {
    return createDiv('').parent('body');
}

function createNav() {
    return createDiv('').parent('body');
}
