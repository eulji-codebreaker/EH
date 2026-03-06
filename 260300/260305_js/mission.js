console.log('1. 사용자가 입력한 숫자가 홀수인지 짝수인지 판별하는 함수를 작성하세요.');
const next = function () { console.log("") };
/*1. 

사용자가 입력한 숫자가 홀수인지 짝수인지 판별하는 함수를 작성하세요.

(if - else 문 이용하기)*/
let num1 = 8;
if (num1 % 2 === 0) {
    console.log('짝수')
} else { console.log('홀수') };
/*==========================================================================*/
next();
console.log('2. 아래의 객체를 for in 반복문을 사용하여, 객체의 모든 키와 그에 해당하는 값을 출력하는 코드를 작성하세요.')
/*2. 

아래의 객체를 for in 반복문을 사용하여, 객체의 모든 키와 그에 해당하는 값을 출력하는 코드를 작성하세요.*/

var person1 = {
    firstName: 'GilDong',
    lastName: 'Hong',
    age: 20
};
for (var prop in person1) {
    console.log(`key : ${prop} | value : ${person1[prop]}`);
}

/*==========================================================================*/
next();
console.log('3. 두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요.')
/*3.

두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요.*/
let n1 = 9; let n2 = 10;
let sum = function (a, b) {
    return a + b;
}
console.log(sum(n1, n2));
/*==========================================================================*/
next();
console.log('4. 아래의 함수들을 화살표 함수로 변환해보세요.')
/*4.

아래의 함수들을 화살표 함수로 변환해보세요.*/

function greet() {
    return "Hello!";
}; //기존 함수
let func1 = () => { return "Hello!" };
console.log(func1()); //화살표 함수로 변환한 함수

function getInfo(name, age) {
    return `name: ${name}, age: ${age}`;
}; //기존 함수
let func2 = (name, age) => { return `name: ${name}, age: ${age}`; };
console.log(func2('kim', 25)); //화살표 함수로 변환한 함수

/*==========================================================================*/
next();
console.log('5. 아래의 코드를 실행했을 때 출력결과가 나오도록 Person 생성자 함수를 정의하세요.')
/*5.

아래의 코드를 실행했을 때 출력결과가 나오도록 Person 생성자 함수를 정의하세요.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello=()=>console.log(`안녕하세요, 제 이름은 ${name}이고 나이는 ${age}세입니다.`);
};
// Person.prototype=bigPerson;

const person = new Person("홍길동", 20);
person.sayHello();

/*------- 출력 결과 --------
안녕하세요, 제 이름은 홍길동 이고 나이는 20세입니다.*/

/*==========================================================================*/
next();
console.log('6. ');
/*6.

(1) user 객체에 email 프로퍼티를 추가하고 "hong@gmail.com" 값을 넣으세요.
(2) age 값을 21로 수정하세요.
(3) name 값을 삭제하세요.*/

const user = {
   name : "gildong",
   age : 20
};
user.email='hong@gmail.com';
user.age=21;
delete user.name;
console.log(user);

/*==========================================================================*/
next();
console.log('7. car 객체와 fireCar 객체 정의하기')
/*7.

car 객체와 fireCar 객체 정의하기
-------------------------------------------------------------------------------
- car 객체는 brand 프로퍼티를 갖고있다.
- fireCar 객체는 brand, color 프로퍼티를 갖고 있고 car객체를 상속받는다.
- fireCar 객체에서 brand는 상속받은 프로퍼티이고, color는 자기 자신의 프로퍼티이다.
-------------------------------------------------------------------------------
위의 예제에서 자기 자신의 프로퍼티와 상속된 프로퍼티를 구분하세요.*/
const car={
    brand:'maseratti'
};

const fireCar={
    color:'pink'
};
Object.setPrototypeOf(fireCar,car);
console.log(fireCar);
for (let prop in fireCar){
    if(fireCar.hasOwnProperty(prop)){
        console.log(`${prop}은 fireCar 자신의 프로퍼티이며, 값은 ${fireCar[prop]}입니다.`)
    }else{`${prop}은 car로부터 상속받은 프로퍼티이며, 값은 ${fireCar[prop]}입니다.`}
}