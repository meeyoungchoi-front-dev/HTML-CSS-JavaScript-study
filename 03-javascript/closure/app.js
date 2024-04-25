// closure
// 클로저는 어떤 함수가 주변의 상태를 나타내는 함수와 함께 묶이는 것을 의미한다
// 클로저는 내부 함수에서 외부 함수의 범위에 접근할 수 있게 해준다
// 자바스크립트에서 클로저는 함수를 만들 때마다 만들어진다

function outFunc() {
    x = 10;
    let inFunc = function() {
        console.log(x);
    };
    return inFunc;
};


let inner = outFunc();
inner(); //10
// outFunc는 내부함수 inFunc를 반환하고 생을 마감했다
// 하지만 위 코드 결과값은 10이 나온다
// 자신을 포함하고 있는 외부함수 보다 내부함수가 더 오래 유지되는 경우 외부 함수 밖에서 내부함수를 호출해도 외부함수의 지역변수에 접근할 수 있다
// 이런함수를 클로저라고 한다

// 클로저는 반환된 내부함수가 자신이 선언되었을때의 환경(렉시컬) 스코프를 기억하여 자신이 선언됐을때의 스코프 밖에서 호출되어도 스코프에 접근할 수 있는 함수를 말한다
// 클로저는 자신이 생성될 때의 환경을 기억하는 함수이다



// 렉시컬 스코프
// 스코프는 함수를 어디에 선언하였는지에 따라 결정된다
// innerFunct가 outerFunc의 내부에 선언되었기 때문에 innerFunc는 자신이 속한 전역(렉시컬) 스코프를 참조할 수 있다
function outerFunc() {
    let x = 10;
    // outerFunc내에서 내부 함수 innerFunc가 선언되었다
    let innerFunc = function() {
        // innerFunct는 자신을 포함하고 있는 outerFunc의 변수 x에 접근할 수 있다 왜? innerFunc가 outerFunc의 내부에 선언되었기 때문이다
        console.log(x);
    }
    // outerFunc 내베어 innerFunc가 호출되었다
    innerFunc();
};

outerFunc();


function createCounter() {
    let count = 0;
    function increment() {
        count +=1;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
};

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

console.log(`The current count is ${counter.getCount()}`);


function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    };

    function descreseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    };

    function getScore() {
        return score;
    };

    return {increaseScore, descreseScore, getScore};
};


const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(3);
game.descreseScore(5);
console.log(`The final score is ${game.getScore()}`);


// 결론
// 다른 함수의 내부에 정의된 함수로 내부 함수는 외부 함수의 변수와 범위에 액세스할 수 있다
// 개인 변수 및 상태 유지를 허용 JS 프레임워크에서 자주 사용된다