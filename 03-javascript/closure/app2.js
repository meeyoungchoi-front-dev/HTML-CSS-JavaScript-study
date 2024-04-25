// 클로저의 활용

let box = document.querySelector('.box');
let toggleBtn = document.querySelector('.toggle');

let toggle = (function() {
    let isVisible = false;

    // 클로저를 반환해준다
    return function() {
        console.log(isVisible);
        box.style.display = isVisible ? 'block' : 'none';
        isVisible = !isVisible;
    };
})();


toggleBtn.onclick = toggle;