//함수
// 인자와 매개변수
// 인자: 함수의 입력값 (Arguments)
// 매개변수: 함수의 입력 변수 (Parameter)
function bokumbab(main) {
   console.log(`${main} 볶음밥`); 
};

bokumbab('새우');
bokumbab('제육');

function sum(a, b) {
    console.log(a + b);
}

sum(10, 20);

const b = 10;
function a() {
    const b = 10;
    console.log(b);
}

a();
console.log(b);

// 함수의 인자가 부족하게 전달되는 경우
function add(a, b = 0) {
    console.log(a + b);
}

add(10); // NaN  (에러는 발생하지 않지만 결과값은 나오지 않는다)
// 값이 할당되지 않은 인자는 기본적으로 undefined가 들어가게 되어 함수를 호출할때 10, undefind가 호출되게 된다
// 매개변수의 default parameter를 지정하면 위의 문제를 해결할 수 있다

add(10, 20);

// 필요한 인자의 개수보다 더 많은 인자를 전달하면 어떻게 되는가?
add(10, 20, 30);
// 아무일도 벌어지지 않는다
// 왜? arguments 때문
// arguments: 함수에 전달되는 인자를 배열의 형태로 나나태는 객체

// rest parameter : 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수
// rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
function print(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

print(10, 20, 30, 40, 50, 60, 70);

// return : 함수의 반환값
function plus(a, b) {
    return a + b;
}
console.log(plus(10, 20));



