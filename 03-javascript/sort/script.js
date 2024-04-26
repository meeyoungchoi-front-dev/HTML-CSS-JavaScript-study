// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다
// compareFunction이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬된다
// compareFunction이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됩니다. a와 b가 비교되는 두 요소라면,

// compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저온다
// compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬한다 
// compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트한다
// compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야한다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않는다

let fruits = ["apple", "orange", "banana", "coconut","pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1,10, 2, 9, 3, 8, 4];
// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers);

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [{name: "Spongeboo", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0},
               ];
// 학점에 따른 내림차순 정렬
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);

// 이름에 따른 오름차순 정렬
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);


// 참고 - 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.youtube.com/watch?v=CTHhlx25X-U
// https://hianna.tistory.com/409