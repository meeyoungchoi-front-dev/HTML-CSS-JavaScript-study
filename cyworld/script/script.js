window.addEventListener('load', function() {
    const homeButton = document.getElementById('home');
    const gameButton = document.getElementById('game');
    const musicButton = document.getElementById('music');

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
});