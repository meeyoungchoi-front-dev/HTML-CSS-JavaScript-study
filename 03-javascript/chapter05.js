// DOM
// 모든 html 태그는 객체이다
// html 요소에 있는 요소를 제어하기 위해 document를 사용한다

// html에서 id는 고유한 값이므로, console에 찍었을때 해당 요소 딱 한개만 출력된다
const title = document.getElementById("title");
console.log(title);

// html의 모든 요소들은 html element를 상속받고 있기 때문에 property에 접근하여 요소를 조작할 수 있다
title.innerText = "안녕하세요!";
title.style.color = "blue";

const subTitle = document.createElement('h2');
subTitle.innerText = "새로운 친구에요!";
subTitle.style.color = "red";
const body = document.querySelector("body");
body.appendChild(subTitle);

// class의 경우 다수의 요소들이 동일한 class를 사용할 수 있기 때문에 elelments가 반환된다
const titleClass = document.getElementsByClassName("title_class");
console.log(titleClass);

const titleTags = document.getElementsByTagName("h1");
console.log(titleTags);

//querySelector와 querySelectorAll을 사용하면 하나의 메서드로 id 요소 또는 class 요소 또는 모든 요소를 전부 선택할 수 있어 효율적이다
const titleSelector = document.querySelector("h1");
console.log(titleSelector);

// querySelectorAll() : 인자로 지정한 선택자와 일치하는 요소를 전부 반환해준다
//querySelector와 querySelectorAll을 사용하면 하나의 메서드로 id 요소 또는 class 요소 또는 모든 요소를 전부 선택할 수 있어 효율적이다
const titleSelectors = document.querySelectorAll("h1");
console.log(titleSelectors);