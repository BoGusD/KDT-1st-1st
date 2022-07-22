// // // let str = "    우영                ";

// // // let trimStr = str.trim();
// // // console.log(str);
// // // console.log(trimStr);

// // // const pi = 3.1415926535;

// // // let int = parseInt(pi);
// // // let float = parseFloat(pi);

// // // console.log(int);
// // // console.log(float);
// // // console.log(typeof int, typeof float);

// // // let minus = -999;

// // // console.log("abs :" , Math.abs(minus));
// // // console.log("min :", Math.min(1, 2, 4, 5, -10, 33 ));
// // // console.log("max :", Math.max(1, 2, 3, 4, 5, -10, 33));
// // // console.log("ceil :", Math.ceil(3.14));
// // // console.log("floor :", Math.floor(3.99));
// // // console.log("round :", Math.round(3.51111111));
// // // console.log("random" , Math.random());

// // //0부터 100까지의 숫자중 랜덤하게 숫자 출력

// // // let nums = [-1.23, 13, 14.52, -33.53, 30];

// // // let min = Math.min(...nums);

// // // let max = Math.max(...nums);

// // // max = Math.floar(max);
// // // min = Math.floar(min);

// // // max = Math.abs(max);
// // // min = Math.abs(min);

// // // let avg = (min + max) / 2;
// // // console.log(avg);

// // // Math.floor(Math.random() * 100) ;
// // // console.log(Math.floor(Math.random() * 100)) ;


// // // let a = "";
// // // for (let i=0; i<Math.floor(Math.random()*100); i++){
// // //   a= i;
// // //   return a;
// // // }

// // // console.log(Math.random(a));

// // // function solution(n) {
// // //   let answer = '';
  
// // //   for (let i=0; i<n; i++){
     
// // //       if(i%2==0){
// // //        answer+='수'
// // //      }
// // //      else{
// // //        answer+='박'
// // //      }
     
// // //   }
// // //   return answer;
// // // }

// // // let n =3000;

// // // let result = solution(n);

// // // function solution(n) {
// // //     let answer = 0;
// // //     for(let i =1; i<=n; i++){
// // //         if(n%i===0){
// // //             answer+=i;
// // //         }
// // //     }
    
    
// // //     return answer;
// // // }
// // // console.log(result);

// // // const numbers1 = [1, 2, 3 ,4];
// // // const numbers2 = [1, 2, 3, 4];
// // // numbers1.splice(0, 2);
// // // numbers2.splice(2, 1, 77);
// // // console.log(numbers1);
// // // console.log(numbers2);


// // // let numbers = [1, 2, 3, 4, 5, 6];
// // // let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// // // for(let i=0; i<numbers.length; i++){
// // //   console.log(numbers[i]);
// // // }
// // // for ( let number of numbers) {
// // //   console.log(number); //별도의 index값을 제공하지 않음
// // // }


// // // for(let i=0; i<fruits.length; i++){
// // //   console.log(fruits[i]);
// // // }
// // // for ( let fruit of fruits) {
// // //   console.log(fruit); //별도의 index값을 제공하지 않음
// // // }

// // // let numbers = [1, 2, 3, 4, 5, 6];
// // // let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// // // numbers. forEach(function(item, index, array) {
// // //   console.log(item, index, array);

// // // })
// // // numbers.forEach((item,index,array)=> {
// // //   console.log(item, index, array);
// // // })
  


// // // fruits.forEach(function(f, i , a){
// // //   console.log(f, i, a);
// // // })


// // // let numbers = [];

// // // for(let i =1; i<101; i++){
// // //  numbers.push(i);
// // // }
// // // console.log(numbers);

// // // let sum1 = 0;
// // // let sum2 = 0;
// // // let sum3 = 0;

// // // for(let i=0; i<numbers.length; i++){
// // //   sum1 += numbers[i];
// // // }
// // // for(let item of numbers){
// // //   sum2 += item;
// // // }
// // // numbers.forEach(function(num) {
// // //   sum3 += num;
// // // })

// // // console.log(sum1, sum2, sum3);
// // // let numbers = [1, 2, 3, 4, 5, 6];
// // // let foreach = numbers.forEach(function (number) { //foreach는 return 값을 가지지 않음.
// // //   return number;
// // // });
// // // let map = numbers.map(function (number) { //본문 내용에는 영향을 주지 않음.
// // //   numbers ++;
// // //   return number;
// // // });
// // // let map2 = numbers.map(number => {
// // //   return number;
// // // });
// // // console.log("foreach :", foreach);
// // // console.log("map :", map);
// // // console.log("map2 :", map2);


// // // const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

// // // let obj = fruits.map(function(item, index) {
// // //   return {
// // //     id: index + 1,
// // //     name: item,
// // //   }
// // // })
// // // let obj = fruits.map((item, index) => ({
// // //    id: index,
// // //    name: item,
// // //   }));
  
// // // console.log(obj);

// // // let numbers = [1, 2, 3, 4, 5, 6];

// // // for(let i =1; i<= 100; i++){
// // //   numbers.push(i);
// // // }
// // // let reduce = numbers.reduce(function(sum, item){
// // //   console.log(sum, item, index, arr);
// // //   return sum + item; // map과 다르게 기존 값을 유지하고 있기에 return 가능
// // // })
// // // console.log(reduce);

// // //전개 연산자
// // // let str = "apple";
// // // [...str].forEach(function(item, index, arr) {
// // //   console.log(item, index, arr);
// // // })

// // // let numbers = [1, 2, 3, 4, 5, 6];
// // // let arr = numbers.filter(function(item){
// // //   return item > 3;
// // // })
// // // // arr = numbers.filter((item) => item > 3);
// // // console.log(arr);
// // // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// // // const result = words.filter(word => word.length > 6);
// // // console.log(result);

// // // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// // // console.log(words.includes("spray"));
// // // console.log(words.includes("pororo"));

// // // let arr3 = words.filter(function(item) {
// // //   return item.length >= 6;
// // // })

// // // let arr4 = words.filter(item => item.length >=6);

// // // console.log(arr3);
// // // console.log(arr4);

// // // let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// // // let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// // // let same =[];
// // // let same2 = [];
// // // let diff =[];
// // // let diff2 = [];

// // //  same = fruits1.filter((item) => fruits2.includes(item));

// // // fruits1.forEach(function(item){
// // //   if(fruits2.includes(item)){
// // //     same2.push(item);
// // //   }
// // // })
// // // diff = fruits1.filter((item) => ! fruits2.includes(item));

// // // fruits1.forEach(function(item){
// // //   if(!fruits2.includes(item)){
// // //     diff2.push(item);
// // //   }
// // // })
// // // console.log(same, same2);
// // // console.log(diff, diff2);

// // // let superMan = {
// // //   name: "Clark",
// // //  gender: "M",
// // //  getHeight: function () {
// // //  },
 
// // //  }

// // // let obj1 = { a: 1, b:2 };
// // // let obj2 = {b: 3, c: 4};

// // // let assignedObj = Object.assign(obj1, obj2);

// // // console.log(assignedObj);
// // // console.log(obj1);
// // // console.log(obj2);

// // // const userName = {
// // //   id: 1,
// // //   name: "tetz",
// // //   };
// // //   const userEmail = {
// // //   id: 1,
// // //   email: "xenosign@naver.com", //{}<< 빈 배열
// // //   };
// // //   const assignedObj = Object.assign(userName, userEmail);    // {} << 빈 객체 : 객체를 추가하게 되면  const assignedObj = Object.assign({},userName, userEmail); 불변성에 의해 false 출력됨
// // //   console.log(assignedObj);
// // //   console.log(userName);
// // //   console.log(assignedObj === userName);
// // //   const a = { po: "뽀로로" };
// // //   const b = { po: "뽀로로" };
// // //   console.log(a === b);
// // //   //false로 뜨는 이유 값은 같지만 객체가 달라서 저장되는 메모리가 다름 >> 객체 불변성

// // const user = {
// //  id: 1,
// //  name: "tetz",
// //  email: "xenosign@naver.com",
// // };
// // const keys = Object.keys(user);
// // console.log(keys);
// // // ["id", "name", "email"]
// // const values = keys.map((key) => user[key]);
// // console.log(values);

// const user = {
//    id: 1,
//    name: "tetz",
//    email: "xenosign@naver.com",
//   };
//   const { id, name, email, address } = user;
//   //특정 변수를 일일이 다 지정하지 않아도 되는 장점
//   // 기본값 설정 const { id, name, email, address = "KOREA"} = user;
//   // 특정 변수에 넣기 const { id, name: tetz, email, address = "KOREA"} = user;
//   console.log(id);
//   console.log(name);
//   console.log(email);
//   console.log(address);
//   const fruits = ["사과", "딸기", "망고", "수박"];
//   const [a, b, c, d] = fruits;
//   console.log(a, b, c, d);
  

// const fruits = ["사과", "바나나", "수박"];
// console.log(fruits);
// console.log(...fruits);
// // console.log("사과", "바나나", "수박");
// function conLog(a, b, c) {
//  console.log(a, b, c);
// }
// conLog(fruits[0], fruits[1], fruits[2]);
// conLog(...fruits);

// const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
// function conLog(a, b, ...c) {
//  console.log(a, b, c);
// }

// //conLOG("사과", "바나나", "수박", "망고", "딸기");
// conLog(...fruits);

// const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
// function conLog(...rest) {
//  rest.forEach((element) => {
//   console.log(element);
//  });
// }
// conLog(...fruits);

  