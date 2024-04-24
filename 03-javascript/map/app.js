
// map() : 맵 함수는 콜백을 수락하고 해당 함수를 배열의 각 요소에 적용한 다음 새 배열을 반환한다
// 콜백 함수를 이용해 각각의 요소에 함수를 호출해서 값을 변환할 수 있게 해준다 
// 콜백 함수는 배열의 각 요소에 대해 실행된다
// map() 메서드는 배열 내의 모든 요소에 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다 

// filter() :  주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 한다
// 배열의 각 요소에 대해 특정 조건에 따라 배열에서 요소를 선택적으로 추출하는 강력한 도구 역할을 한다
// 결과 배열에 요소를 유지하려면 참 값을 반환하고 그렇지 않으면 거짓 값을 반환해야 합니다.

let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Bbuffett",
    "Larry Page", 
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blanfein"]

    // 반복문에 화살표함수 사용하기
    // forEach는 반환해주는 값이 없다
    names.forEach((item, index) => {
        console.log(item, index);
    });

    // map에 화살표함수 사용하기
    // map은 새로운 배열을 반환해준다
    let data = names.map((item, index) => {
        return item + " , " + index;
    });
    console.log(data);

    let ceoList = [
        {name: "Larry Page", age: 23, ceo: true},
        {name: "Tim Cook", age: 40, ceo: true},
        {name: "Elon Musk", age: 55, ceo: false}
    ]

    data = ceoList.map((item) => {
        return item.age;
    });
    console.log(data);

    let data2 = ceoList.filter((item) => {
        return item.age >= 40;
    });
    console.log(data2);

    let data3 = names.filter((item) => {
        return item.startsWith("L");
    });
    console.log(data3);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

// 제곱근을 시켜주는 함수
function square(element) {
    // 배열의 각 요소를 제곱시킨다
    // 결과값이 반환되면 제곱된 결과값으로 새로운 squares 배열이 만들어지게 된다
    return Math.pow(element, 2); 
}

console.log("squares:", squares);

// 3제곱근을 시켜주는 함수
function cube(element) {
    // 배열의 각 요소를 세제곱시킨다
    // 결과값이 반환되면 세제곱된 결과값으로 새로운 cubes 배열이 만들어지게 된다
    return Math.pow(element, 3);
}

console.log(cubes);

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

// 대문자로 만들어주는 함수
function upperCase(element) {
    // 배열의 각 요소를 대문자로 만들어준다
    // 결과값이 반환되면 새로운 studentsUpper 배열이 만들어지게된다 
    return element.toUpperCase();
}

// 소문자로 만들어주는 함수
function lowerCase(element) {
    // 배열의 각 요소를 소문자로 만들어준다
    // 결과값이 반환되면 새로운 studentsLower 배열이 만들어지게된다
    return element.toLowerCase();
}

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];
const formatteDates = dates.map(formatDates);
console.log(formatteDates);

// 각 데이터를 "-"를 기준으로 자른후 월/일/년순으로 반환해주는 함수
function formatDates(element) {
    // 배열의 각 요소를 "-"를 기준으로 자른다
    const parts = element.split("-");
    // 자른 요소들의 순서를 월/일/년 순으로 만들어 반환하면 새로운 formattDates 배열이 만들어지게된다
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


// 참고 - https://www.youtube.com/watch?v=xNQH1NbZQ0E
// https://www.freecodecamp.org/korean/news/javascript-map-method/
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// https://www.youtube.com/watch?v=kLYdgg0ljTk&t=3s 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://www.freecodecamp.org/news/javascript-filter-method/