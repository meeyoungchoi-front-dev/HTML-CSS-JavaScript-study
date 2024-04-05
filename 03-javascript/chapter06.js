//classList는 요소로부터 클래스 콜렉션을 반환하는 읽기 전용 속성이다
const h1 = document.querySelector("h1");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const toggleBtn = document.querySelector("#toggle");

console.log(h1.classList);

addBtn.addEventListener('click', function() {
    h1.classList.add('text');
    console.log(h1.classList);
})

removeBtn.addEventListener('click', function() {
    console.log(h1.classList);
    h1.classList.remove('text');
})

toggleBtn.addEventListener('click', function() {
    // class가 있으면 제거하고 없으면 추가한다
    h1.classList.toggle('text');
})