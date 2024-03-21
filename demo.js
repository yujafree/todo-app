// //데이터 타입
// //문자열 string "가나다"
// //number 1 10
// 1;
// //boolean: 참이냐 거짓이냐 (true/false)
// true;
// false;
// //null:아무것도 없는 것
// null;
// //undefined: 정의되지 않음
// undefined ;
// //둘의 차이: null은 정의했지만 값을 정해놓지 않은 것, undefined는 정의도 하지 앟은 것
// //symble

// //변수:데이터를 저장하는 공간, 주머니
// //변수를 부를 수 있는 이름만 정하면 됨
// //오른쪽에 있는 애가 왼쪽으로 들어감(대입 연산자)
// height = 180;
// christ = true;

// console.log("height", height);

// //복합적인 변수를 포함하는 경우 =>객체(dbject 오브젝트)
// //저
// //- 이름
// //- 성별
// //- 나이

// me = {
//   main: 'lee',
//   gender: 'male',
//   age: 43
// }

// // function sum(x, y) {
// //   result = x + y;
// //   return result;
// //   }

// you = {
//   name: 'kim',
//   gender: 'female',
//   age: 37,
//   address: null,
//   sum: sum //sum이라는 메소드
// };

// console.log(you.name);
// console.log(you.age);
// console.log(sum(20,20));

// // = 와 :(객체의 속성)의 구분 필요
// // 객체에서 함수는 ,로 구분해야 함

// me.age
// //me 리는 오브젝트 안의 age 함수
// //객체의 포로펄티에 접근할때는 "." 사용

// //함수
// // function 함수의 이름(변수) {
// //   함수 내용;
// //   아웃풋;
// // }

// function sum(x, y) {
// result = x + y;
// return result;
// }
// //세미클론 ;은 안 붙여도 되지만 붙이는게 안전함

// function hi(name){
//   console.log("hi~ " + name);
// }
// lastName = "yujin";
// hi(lastName);

// sumResult = sum(150, 50);
// console.log('답은', sumResult);

// //숙제) 1~9단까지의 구구단 출력
// console.log("구구단을 외자")
// for(let i = 1; i <= 9; i++){
//   console.log(i + '단');
//   for(let j = 1; j <= 9; j++){
//     console.log(i + " * " + j + " = " + i*j);
//   }
// }

// //조건문
// // if(조건){
// //   실행될 코드
// // }
// //*결과가 참일때 적용, 값이 있으면 적용*
// if(true){
//   console.log("true");
// }
// //undefined, null, 0은 FALSE로 판단, 음수와 양수는 다 TRUE
// //연산의 결과에 따라 실행

// //name = 'kang'
// // if(name === 'lee'){
// //   console.log("hi, lee");
// // } else if(name === 'kim'){
// //     console.log("hi, kim");
// //   } else{
// //     console.log("hi, everyone");
// //   }

//   //else는 조건문이 들어가지 않음

//   // switch (변수) {
//   //   case 1일때;
//   //   console.log('1')
//   //   break;
//   // }

//   //name="lee";

//   // switch (name) {
//   //   case 'lee'
//   //   case 'kim'
//   //   console.log("hello");
//   //   break;
//   //   default;
//   //   console.log("hi");
//   // }

//   // 변수를 선언하는 방법
//   //var name = 'park';
//   //사용돈 공간 내, 한정된 공간에서 가능, 이제는 안 쓰임
//   // let name = 'lee';
//   // const name = 'kim';
//   //const만 사용하세요
// //const는 범위를 제한하여 사용, 가장 가까운 조건에 따라감
// //const는 재할당 불가능!!!!
// //const를 먼저 쓰고 변경할 필요가 있는 경우, let으로 바꾸기

// //빈복

// //구구단
// // for(초기값; 범위; 증감연산;){
// //   반복할 코드
// // }

// // for(let i=2; i<=9; i++){
// //   for(let j=1; j<=9; j++)
// //   console.log(i + "*" + j + "=" + i*j);
// // }
// //for문에서는 let 사용한다고 생각할것

// let a = 1;
// console.log(++a);
// //더해진 상태가 먼저
// console.log(a--);
// //한번 돌고 그 다음에 더해진 값을 가지게 됨
// console.log(a)

// //배열
// // const A = [2, 3, 4, 5, 6, 7, 8, 9]
// // const B = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // console.log(A)
// // //length라는 프로펄티를 가지고 있음
// // console.log(A.length);

// // console.log(A[0]);
// // //A배열의 0번째 인댁스

// // console.log(A[A.length-1]);
// //맨 마지막의 결과값을 가져오고 샆을때, LENGTH-1을 하면 무조건 나옴

// // console.log(Array.prototype);
// // A.push(10);
// // console.log(A)

// const A = [2, 3, 4, 5, 6, 7, 8, 9];
// const result = [];

// function fn(elem, idx){
//   if(elem % 2 === 0){
//     result.push(elem);
//   }
// }
// A.forEach(fn);
// console.log(result);
// A.filter();

const products = [
  {
    name: "White T-shirts",
    category: "Topwear",
    price: 14500,
  },
  {
    name: "Blue wide jean",
    category: "Bottomwear",
    price: 49900,
  },
  {
    name: "Red sweater",
    category: "Topwear",
    price: 33000,
  },
  {
    name: "Black sunglasses",
    category: "Accesssory",
    price: 9900,
  },
];

console.log(products);

//reduce
const total = products.reduce(function (acc, cur) {
  return acc + cur.price;
}, 0);

console.log("모든 상품의 합산 금액은", total + "원");

//filter
const product = products.filter(function (sort) {
  return sort.category == "Topwear";
});

console.log("카테고리가 Topwear인 상품", product);

//map
const name = products.map(function (product) {
  return product.name;
});

console.log("상품명을 추출하면", name);

//14000원 이상인 상품의 가격
const value = products.map(function (cost) {
  if (cost.price >= 14000) {
    return cost.price;
  }
});

console.log(value);

//Topwear 상품의 총 가격
const cost = products.reduce(function (acc, cur) {
  if (cur.category === "Topwear") {
    return acc + cur.price;
  } else {
    return acc;
  }
}, 0);

console.log("카테고리가 상의인 상품의 총가격", cost + "원");
