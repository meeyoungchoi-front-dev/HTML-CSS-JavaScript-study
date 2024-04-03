// 변수 : 값을 저장할 수 있는 저장 공간
let name = '홍길동';
name = '한무무';
console.log(name);

// 상수
// const의 경우 타입 변경이 불가능하고 재할당도 안된다
// 상수의 경우 경우 반드시 초기화 할때 값을 할당해 줘야 한다
const address = '경기도 의왕시';
console.log(address);

// var 문제점
// var는 변수의 재선언과 재할당을 허용하는 문제점이 있다
var number = 123;
var number = 246;
console.log(number);

// 원시 데이터 타입
// 객체가 아니면서 메서드도 가지지 않는 데이터
// string, number, bigint, boolean, undefined, null, symbol
const num = 123;
console.log(typeof num);

const fullname = '박길동';
console.log(typeof fullname);

const age = 20;
const job = '개발자';
const msg = '저는 ' + job + '이고 나이는 ' + age + '살 입니다.';
console.log(msg);
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg2);

// boolean : 참과 거짓을 나타낼때 쓰인다
const isTrue = true;
console.log(typeof isTrue);

// null : 값이 존재하지 않는 상태를 나타낸다
// undefined : 변수를 선언만 하고 값을 초기화 하지 않은 상태를 나타낸다

// 참조 데이터 타입
// 배열
const arr = [1,2,3];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// property
// key와 값의 쌍
const obj = {
    name: '홍길동',
    job: '개발자'
};
console.log(obj);
console.log(obj.name);
console.log(obj.job);
console.log(obj['name']);
console.log(obj['job']);

const array = [1,2,3, [4,5]];
console.log(array);
console.log(array[3][0]);
console.log(array[3][1]);


const array2 = [1,2,3, { name: '김길동'}];
console.log(array2);
console.log(array2[3].name);

const object = {
    arr: [1,2,3],
    something: {
        name: '김길동',
    },
};
console.log(typeof object);
console.log(object.arr);
console.log(object.something);

// 연산자
// 산술 연산자 : +,-,*,/
console.log(10 % 5);
console.log(10 % 3);

// 모듈러
// 지수연산자
console.log(2 ** 3); // 2의 3제곱


// 증감 연산자
let value = 10;
++value;
console.log(value);
value--;
console.log(value);

// 비교 연산자
// == : 값이 같은지 비교, === : 값과 타입이 같은지 비교
const a = 10;
const b = 20;
console.log(a < b);
console.log(a == b);
console.log(a != b);

// 논리 연산자
// &&
// ||
// !
const test = 2 < 3;
console.log(test);
const testb = 30 > 50;
console.log(testb);
console.log(test && testb);
console.log(test || testb);
console.log(!test); // test 연산의 값을 부정하게 된다

// 삼항 연산자
console.log(2 < 3 ? "참" : "거짓");
console.log(2 > 3 ? "참" : "거짓");

// 널리쉬 => 널병합 연산자
// 여러개의 피연산자 중 값이 확정되어 있는 변수를 찾음
const c = undefined;
const d = null;
const e = '강감찬';
console.log(c ?? d ?? e);

// 비트연산자
// 2진 연산을 수행하는 연산자
// & , | , ~, ^ , << , >> 가 있다
 
// 대입 연산자
// += , -=, *= , /= , %=, **=
let n = 10;
n += 2;
console.log(n);

// 전개 구문 (전개 연산자)
// 반복이 가능한 객체에 적용할 수 있는 문법의 한 종류를 의미한다
const datas = [1,2,3];
console.log(...datas); // 배열의 데이터를 전부 펼쳐서 보여준다
console.log(datas);

// 전개 구문 배열 활용
const datas2 = [4,5,6];
// datas 배열과 datas2 배열을 합치고자 하는 경우
const newNumbers = [...datas, ...datas2];
console.log(newNumbers);

