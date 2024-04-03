// if문
const a = 10;
const b = 20;
const c = 20;

if (a > b) {
    console.log('a가 더 큽니다!');
} else if (b == c) {
    console.log('b와 c가 같습니다!');
} else {
    console.log('b가 더 크고 b와 c가 다릅니다!');
}

// switch
const number = 10;

switch(number) {
    case 1:
        console.log(number);
        break;
    case 10:
        console.log(number);
        break;
        default:
            console.log('아무것도 해당되지 않아요!');
}

// if 와 switch 사용해서 짝수 홀수 구분하기
if (number % 2 == 0) {
    console.log('짝수!');
} else {
    console.log('홀수!');
}

switch  (number % 2 ) {
    case 0:
        console.log('짝수');
        break;
    case 1:
        console.log('홀수');
        break;
}

// 반복문
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (i = 0; i < 19; i++) {
    if (i === 7) {
        break;
    }

    console.log(i);
}

for (i = 0; i < 19; i++) {
    if (i === 7) {
        continue;
    }
    
    console.log(i);
}
