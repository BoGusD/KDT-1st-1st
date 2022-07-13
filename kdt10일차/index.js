// console.log(typeof null);
// console.log(typeof "nubmer");
// console.log(typeof true);


// console.log(typeof 123, "isn't", typeof "gkgk", "data type");
// // '
// let mathScore = "77";
// let engScore  = "88";

// mathScore= Number(mathScore);
// engScore=Number(engScore);
// let avgScore = (mathScore + engScore) /2;
// console.log(avgScore);

// let nameArray = ["강유림" , "강지훈" , "master" , "김윤비"];
// console.log(nameArray.length);

// for (let i =0; i <nameArray.length; i++){
//   console.log(`${i+1} 번째 참가자의 이름은 ${nameArray[i]} 입니다.`);
// }


// let sq =2 ** 2;
// console.log(sq);

// let num= Math.sqrt(sq);
// console.log(num);


// let num = 10;

// num = num +5;
// console.log(num);

// num += 5;
// console.log(num);

// num -= 5;
// console.log(num);

// num *=5;
// console.log(num);

// num /=5;
// console.log(num);

// let num=10;

// console.log(num);

// let a =1;
// let b = "1";

// console.log(a===b);

// let name = "뽀로로";
// let age = 16;
// let isAudlt = age >19;

// if(isAudlt){
//   console.log("통과");
// } else{
//   console.log("돌아가");
// }

// let isAudlt = false;
// let VIP = false;
// let isDrunken = true;
// let money= false;

// if((((isAudlt || VIP) && !isDrunken))|| money){
//   console.log("통과");
// } else{
//   console.log("돌아가");
// }




// function square(row, column) {
//    return  (row*column)/2;
// }
// console.log(square(2,3));
// let a = Math.PI;
// function circle(width, a ){
//   return (width**2) *a;
// }
// console.log(circle(3,3.14))
// function pita(a,b){
//   var c;
//   c= Math.sqrt(a** 2 + b**2);
//   return c;
// }

// let pita = function (A,b){
//   var c;
//   c = Math.sqrt(a** 2 + b**2);
//   return c;
// }

// sayHello();


// function sayHello() {
//   console.log("Say Hello");
// }

// let heyHello = function() {
//   console.log("Hey Hello");
// }
// heyHello();

// // 함수 선언문
// function sayHello() {
//   console.log("Say Hello");
// }

// // 함수 표현식
// let sayHello = function() {
//    console.log("Say Hello");
// }
// // 화살표 함수
// let sayHello = () => {
//   console.log("Say Hello");
// }

// let square = function(row,column) {
//   return row*column /2;
// }
// console.log(square(2,3));


// let r= Math.PI
// let circle = (a) =>{
//   return a**2*r;
// }
// console.log(circle(3));

// let pita = (a,b) =>{
//   var c;
//   c = Math.sqrt(a** 2 + b**2);
//   return c;
// }
// console.log(pita(3, 2));

// let kdt = ["진형", "승환", "지훈", "소민", "영은" , "종익", "다영", "한솔", "세영", "혜영","준우","수지","원","승수","민정","의진","유림","윤비","지현","해성","효석"];

// for (let i=0; i<kdt.length; i++){
//   console.log(`kdt ${i+1}번째 참여자의 성함은 ${kdt[i]} 입니다.`);
// }

// const superMan = {
//   name: "clark",
//   age: 33,
//   height: 187,
//   weight: 77
// }
// console.log(superMan.name);
// console.log(superMan ["age"]);
// console.log(superMan.condition);

// superMan.haircolor = "blone";
// superMan["job"] = "junerlist";

// console.log(superMan);

// delete superMan.weight;

// console.log(superMan);

// const pororo = {
//   name: "뽀로로",
//   age : 7,
// }
// console.log(pororo.name);
// console.log(pororo ["age"]);

// pororo.gender = "monster";
// pororo.height = 60;
// console.log(pororo);

// delete pororo.gender;

// console.log(pororo);
// console.log("name" in pororo);
// console.log("height" in pororo);

// for(let key in pororo){
//   console.log(pororo[key]);
// }

// const superMan = {
//   name: "clark",
//   age: 33,
//   height: 187,
//   weight: 77,
//   fly: function() {
//     console.log("날아갑니다")
//   }
// }
// superMan.fly();

// // console.log("name" in superMan);
// // console.log("job" in superMan);

// for(let key in superMan){
//   // console.log(key);
//   console.log(superMan[key]);
// }