// this는 함수가 호출될때 결정이 된다
// 함수를 호출하는 애가 this가 된다
const car = {
    name: 'KIA',
    getName: function() {
        console.log(this);
        console.log("car getName: " ,this.name);
    }
}

//car.getName();

const globalCar = car.getName;
globalCar(); // 여기서 this는 window 객체가 나온다 왜? globalCar 메서드를 호출한 객체가 누구인지 없기때문에 window객체가 globalCar 메서드를 호출하게 된다

const car2 = {
    name: 'hyundai',
    getName: car.getName
};

car2.getName();

const btn = document.getElementById('button');
btn.addEventListener('click', car.getName.bind(car)); // this를 car 객체로 고정시키기 위해 bind를 사용한다
// btn.addEventListener('click', car.getName); => 여기서 this는 html button 태그가 된다

const testCar = {
    name: "benz",
    getName: function() {
        console.log("getName", this.name); // 여기서 this는 testCar가 된다
        // const innerFunc = function() {
        //     console.log("innerFunc", this); // 여기서 this는 window객가 된다
        // };innerFunc(); // innerFunc() 자체를 window 객체가 호출하게 된다
        const innerFunc = () => {
            console.log("innerFunc", this); // 여기서 this는 testCar가 된다
            // 화살표 함수에서의 this는 함수가 속해있는곳의 상위 this를 계승받게 된다
            // 단, 화살표 함수를 사용할 때는 bind를 사용할 수 없다
        };
        innerFunc(); // innerFunc()가 화살표 함수로 선언되 있기 때문에 상위 this인 getName을 계승받아 this가 getName이 된다
    }
};
testCar.getName();

const ageTest = {
    unit: '살',
    ageList: [10,20,30],
    getAgeList: function() {
        const result = this.ageList.map(function(age) {
            return age + this.unit;
        })
        console.log(result);
    }
};

ageTest.getAgeList();

// 결론
// 내가 this를 쓰고 싶으면 일반함수를 선언한다
// 왜? .bind를 사용하여 예측가능한 this를 만들 수 있다
// 객체 내부의 함수를 호출할때는 화살표 함수로 선언하는 것이 좋다
// 왜?  화살표 함수의 경우 함수가 속해 있는 곳의 상위 this를 계승받기 때문이다




