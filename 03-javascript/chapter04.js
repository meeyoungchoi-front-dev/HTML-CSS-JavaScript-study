// 문자열 메서드
const str = '         Hello         ';

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.repeat(3));
console.log(str.padStart(10, '_'));
console.log(str.padEnd(10, '_'));

// 특정 문자열 검색
const sentence = '안녕하세요, 코딩하는 묭묭 입니다!';
console.log(sentence.indexOf('묭묭')); // 해당 키워드가 시작되는 인덱스 위치를 반환해 준다

// includes()
console.log(sentence.includes('hello')); // false
console.log(sentence.includes('코딩')); // true
console.log(sentence.startsWith('안녕')); // true
console.log(sentence.endsWith('!')); // true

// 문자열 수정 메서드
console.log(sentence.replace('안녕하세요', 'Hello'));

const sentence2 = 'hello, my name is bong hello, hello,';
console.log(sentence2.replaceAll('hello', 'HELLO!'));
console.log(sentence2.substring(0,6));
// split : 문자열을 구분자를 기준으로 잘라 결과를 반환하는 메서드
console.log(sentence2.split(','));
// slice : 문자열을 특정 인덱스 위치부터 끝까지 잘라 반환하는 메서드
console.log(sentence2.slice(3));
console.log(sentence2.slice(3, 5));
console.log(sentence2.slice(-3, 5)); // 끝에서 부터 5글자 잘라서 반환
