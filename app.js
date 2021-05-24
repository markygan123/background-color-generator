let background = document.querySelector(".container");
let clicker = document.querySelector(".click");

function colorGenerator() {
    let letters = "0123456789ABCDEF";
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }       

    return color;
}

clicker.addEventListener("click", function () {
    background.style.background = colorGenerator();
})