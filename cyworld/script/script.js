let homeButton = document.getElementById('home');
let gameButton = document.getElementById('game');
let musicButton = document.getElementById('music');


homeButton.addEventListener("click", homeButtonClick);

function homeButtonClick() {
    alert("클릭");
    document.getElementById("contentFrame").setAttribute("src", "home.html");
}

gameButton.addEventListener('click', function(event) {
    alert("클릭");
    document.getElementById("contentFrame").setAttribute("src", "game.html");
});

musicButton.addEventListener('click', function(event) {
    alert("클릭");
    document.getElementById("contentFrame").setAttribute("src", "zukbox.html");
});








