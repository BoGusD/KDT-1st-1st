// // let boxEl = document.getElementsByClassName("box");
// // let boxEl = document.querySelector(".box");

// // // boxEl.addEventListener("click", function() {
// // //   if(boxEl.classList.contains("orange")){
// // //     boxEl.classList.remove("orange");
// // //     boxEl.classList.add("skyblue");
// // //   }else if(boxEl.classList.contains("skyblue")){
// // //     boxEl.classList.remove("skyblue");
// // //     boxEl.classList.add("orange");
// // //   }else{
// // //     boxEl.classList.add("orange");
// // //   }
// // // })


// // // boxEl.classList.add('active');

// // console.log(boxEl);
// // let boxEl = document.querySelector(".box")
// // let inputEl = document.getElementById("input");

// // boxEl.addEventListener("click", function () {
// //   inputEl.setAttribute("type", "password");
// //   // boxEl.textContent = "KDT";
// // })

// // inputEl.setAttribute("placeholder", "id를 입력하세요.");



// let boxE1 = document.querySelector(".box");
//   boxE1.addEventListener("click", function() {
//     if(boxE1.classList.contains("orange")){
//       boxE1.classList.add("skyblue");
//       boxE1.classList.remove("orange");    
//     }else if(boxE1.classList.contains("skyblue")){
//       boxE1.classList.remove("skyblue");
//       boxE1.classList.add("orange");
//     }else{
//       boxE1.classList.add("orange");
//     }
//   })
//   let addict = document.querySelector(".span");
//   let boxEEL = document.querySelector(".button");
//   let boxEEEL = document.querySelector(".button_2");
//   let inputEl = document.querySelector(".text");

//     boxEEL.addEventListener("click", function() {
//     inputEl.setAttribute("placeholder", "id를 입력하세요.");
//     addict.textContent = "아이디를 입력하세요";
//     })

//     boxEEEL.addEventListener("click", function(){
//       let a = document.getElementsById('text').value;
//       addict.textContent = a;
//       // let inputText;
//       // inputText = inputEl.value;
//       // addict.textContent = inputText;
//       }
//     )

// let boxEls = document.querySelectorAll(".box");


// boxEls.forEach(function (boxEl, index){
//   boxEl.classList.add(`box_${index + 1}`);
// })

// console.log(boxEls);
 
let boxEl = document.querySelectorAll(".box");

      boxEl.forEach(function (boxEl, index){
        if(index % 7 ===0){
          boxEl.style.backgroundColor ="red";
        }else if(index % 7 ===1){
          boxEl.style.backgroundColor ="orange";
        }
        else if(index % 7 ===2){
          boxEl.style.backgroundColor ="yellow";
        }
        else if(index % 7 ===3){
          boxEl.style.backgroundColor ="green";
        }
        else if(index % 7 ===4){
          boxEl.style.backgroundColor ="blue";
        }
        else if(index % 7 ===5){
          boxEl.style.backgroundColor ="navy";
        }
        else if(index % 7 ===6){
          boxEl.style.backgroundColor ="purple";
        }
      
      })
  