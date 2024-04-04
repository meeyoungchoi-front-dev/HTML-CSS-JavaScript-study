window.addEventListener('load', function() {
    const homeButton = document.getElementById('home');
    const gameButton = document.getElementById('game');
    const musicButton = document.getElementById('music');

    homeButton.addEventListener("click", homeButtonClick);

    function homeButtonClick(event) {
        document.getElementById("contentFrame").setAttribute("src", "home.html");
        homeButton.style.backgroundColor = "gray";
        homeButton.style.color = "black";
    }

    gameButton.addEventListener('click', function(event) {
        document.getElementById("contentFrame").setAttribute("src", "game.html");
        gameButton.style.backgroundColor = "gray";
        gameButton.style.color = "black";
    });

    musicButton.addEventListener('click', function(event) {
        document.getElementById("contentFrame").setAttribute("src", "zukbox.html");
        musicButton.style.backgroundColor = "gray";
        musicButton.style.color = "black";
    });
});