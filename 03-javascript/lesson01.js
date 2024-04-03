let classmates = ["철수", "영희", "훈이"]
console.log(classmates);
console.log(classmates[0]);
console.log(classmates[1]);
console.log(classmates[2]);
console.log(classmates.includes("훈이")); // 2번째 인덱스에 있는 "훈이"와 일치하므로 TURE
console.log(classmates.includes("맹구")); // 배열에 "맹구"는 없으므로 FALSE
console.log(classmates.length); // 배열의 길이 : 3
classmates.push("맹구");
console.log(classmates.includes("맹구")); // TRUE
console.log(classmates.length); // 배열의 길이 : 4
console.log(classmates.pop());
console.log(classmates.length); // 배열의 길이 : 3
console.log(classmates);

let developer = ["자기 주도성","끈기","응용력","협업능력","신분상승"];
console.log(developer);
console.log(developer[0]);
console.log(developer[1]);
console.log(developer[2]);
console.log(developer[3]);
console.log(developer[4]);

let dream = ["커리어점프","성공","할수있다"];

// 두개의 배열을 하나로 합치는 방법 1. concat 사용
//console.log(developer.concat(dream));
// 두개의 배열을 하나로 합치는 방법 2. push 사용
developer.push(dream)
console.log(developer);

// 문자열 유효성 검사
const email = "codecamp@gmail.com";
console.log(email.includes("@")); // 문자열에 @가 포함되어있는지 검사
let userEmail = email.split("@")[0]; // 문자열을 @를 기준으로 분리하여 0번째 인덱스의 값을 저장
let emailDomain = email.split("@")[1]; // 문자열을 @를 기준으로 분리하여 1번째 인덱스의 값을 저장
console.log(userEmail);
console.log(emailDomain);
let maskingMail = [];
maskingMail.push(userEmail[0]);
maskingMail.push(userEmail[1]);
maskingMail.push(userEmail[2]);
maskingMail.push(userEmail[3]);
console.log(maskingMail);

// userEmail의 뒷자리 4자리를 가리기 위해 "*" 추가
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");

// maskingMail에 @와 emailDomain을 연결시켜 최종 문자열을 만들어 준다
let resultMail = maskingMail.join("") + "@" + emailDomain;
console.log(resultMail);

// 객체
let friend = {name: "철수", 
              age: 13, 
              camp: "코드캠프"
            }
console.log(friend);

// 객체에 담겨있는 값 가져오기
console.log(friend.name);
console.log(friend.age);
console.log(friend.camp);
console.log(friend.test); // 없는 키값을 꺼내려고 하면 undefiend

// 배열에 담긴 객체
let students = [
    {name: "철수", age:13, school: "다람쥐초등학교"},
    {name: "영희", pet:8, house: "공룔초등학교"},
    {name: "훈이", pet:11, house: "거북이초등학교"}
]

console.log(students);

// 객체가 배열에 담겨있기 때문에 인덱스를 활용해서 꺼내올 수 있다
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);


// 배열에 담긴 객체의 특정 인덱스의 특정 key 가져오기
console.log(students[0].school);

// quiz
const fruits = [
                {number: 1 , title: "레드향"},
                {number: 2, title: "샤인머스켓"},
                {number: 3, title: "산청딸기"},
                {number: 4, title: "한라봉"},
                {number: 5, title: "사과"},
                {number: 6, title: "애플망고"},
                {number: 7, title: "딸기"},
                {number: 8, title: "천혜향"},
                {number: 9, title: "과일선물세트"},
                {number: 10, title: "귤"}
]

const fruitstop10 = [];

fruitstop10.push(fruits[0].number + " " + fruits[0].title);
fruitstop10.push(fruits[1].number + " " + fruits[0].title);
fruitstop10.push(fruits[2].number + " " + fruits[0].title);
fruitstop10.push(fruits[3].number + " " + fruits[0].title);
fruitstop10.push(fruits[4].number + " " + fruits[0].title);
fruitstop10.push(fruits[5].number + " " + fruits[0].title);
fruitstop10.push(fruits[6].number + " " + fruits[0].title);
fruitstop10.push(fruits[7].number + " " + fruits[0].title);
fruitstop10.push(fruits[8].number + " " + fruits[0].title);
fruitstop10.push(fruits[9].number + " " + fruits[0].title);

console.log(fruitstop10);