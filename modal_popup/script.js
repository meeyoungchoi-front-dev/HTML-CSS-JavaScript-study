const showBtn = document.querySelector(".show-btn");
const ClosePop = document.querySelector(".close-pop");
const container = document.querySelector(".container");
const popBox = document.querySelector(".pop-box");

showBtn.onclick = () => {
    popBox.classList.add('active');
    container.classList.add('active');
}

ClosePop.onclick = () => {
    popBox.classList.remove('active');
    container.classList.remove('active');
}
