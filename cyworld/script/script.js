window.addEventListener('load', function() {
    const buttons = document.querySelectorAll(".side__wrapper__button");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            document.querySelector(".active")?.classList.remove("active");
            if (event.currentTarget === buttons[i]) {
                buttons[i].classList.add("active");
            } 
        })
    }
});


