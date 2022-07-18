// let spanEL = document.querySelector("span");
// spanEL.remove();

// $("span").remove();

// $("input").val();

// function showValue() {
// //  $("input").val("가나다라마바사"); //quseryselectorall과 같은 기능을 함.
//  document.querySelector("input").value = "가나다라마바사";
// }

// $("span").text("가나다라마바사");
// document.querySelector("span").textContent= "가나다라마바사";

// const inputText = document.querySelector("input")
// const write_button = document.querySelector(".write-btn")
// const modify_button = document.querySelector(".modfiy-btn")
// const spanEL = document.querySelector("span");

// modify_button.addEventListner("click", function() {
//   inputText.value = "가나다라마바사";
// })

// function changeSpan() {
//   spanEL.textContent = inputText.value;
// }

// $(".write-btn").on("click", function() {
//   let text = $(".text-input").val();
//   $("span").text(text); 
// })

// $(".modfiy-btn").on("click", function() {
//   $(".text-input").val("가나다라마바사");
// })

// $(".text-input").on("click", function() {
//   $(".text-input").attr("type", "button");
//   $(".text-input").attr("value", "button");
// })


// function showValue() {
// document.querySelector("input").value= "가나다라마바사" ;
// }

// function showValue_1() {
// document.querySelector("span").span.textContent= "";
// }
// const inputText = document.querySelector("input")
// const modify_button_1= document.querySelector(".md_Btn_1")
// const modify_button_2= document.querySelector(".md_Btn_2")

// modify_button_1.addEventListener("click", function(){
//   inputText.setAttribute("placeholder" , "변경1을 누르셨습니다.")

// })
// modify_button_2.addEventListener("click", function(){
//   inputText.setAttribute("type", "radio");
// })

// $(".md_Btn_1").on("click", function () {
//   $(".text-input").attr("placeholder", "변경1을 누르셨습니다.")
// })
// $(".md_Btn_2").on("click", function () {
//   $(".text-input").attr("text", "radio")
// })

//attribute 요소에는 css 삽입 불가능

// $(".md_Btn_1").on("click", function(){
//   $(".text").attr("background-color", "orange");
// })
// let orange=document.querySelector(".md_btn_2")

// orange.addEventListener("click", function(){
//   orange.setAttribute("background-color", "orange");
// })


// elector("div").style="background-color: skyblue; font-size:40px;"

// function changeCss() {
//   document.querySelector("div").style="background-color: orange"
// }
// function changeCss2() {
//   $("div").css.("background-color: skyblue");
// }

//부모의 자식(p의 자식 요소) 요소를 변경
// $("p").html("<h1>루피</h1>");
// document.querySelector("p").innerHTML = "<h1>루피</h1>";

// const li = document.createElement("li");
// li.textContent= "추가";

//밑에 요소가 우선시 선택되서 after만 먹힘
// $(".me").before(li);
// $(".me").after(li);
// const textInput = document.querySelector(".text-input");
// const modify_button_1 =document.querySelector(".button_1");
// const modify_button_2 =document.querySelector(".button_2");
// const button = document.createElement("li");
// const list = document.querySelector("ul");

// modify_button_1.addEventListener("click", function(){
//   const addLi =document.createElement("li");
//   addLi.textContent =textInput.value;

//   list.append(addLi);
//   textInput.value = "";
// })

// //사용 비추천
// function prependLi() {
//   let text = $(".text-input").val();

//     $("ul").prepend(`<li>${text}</li>`);
// }

// const children = document.querySelector("div").children;
// const childrenNodes = document.querySelector("div").childNodes;

// console.log("children",children);
// console.log("Nodes", childrenNodes);


