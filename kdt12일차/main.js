const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

// console.log(inputTask, addBtn, todoList);

addBtn.addEventListener("click", function() {
  if(inputTask.value === ""){
    inputTask.setAttribute("placeholder", "할 일을 입력해주세요.");
  }else{
    const addLi = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener("click", function() {
        if(checkBox.checked === true) {
          // console.log(checkBox);
          // console.log(checkBox.parentNode); // 부모의 요소까지 콘솔찍을 떄
          //부모요소 출력
          // checkBox.parentNode.style = "text-decoration: line-through;"
          checkBox.parentNode.style.textDecoration = " line-through";
        }else{
          checkBox.parentNode.style.textDecoration = "none";
        }
    })

    // 버튼 삭제
const deleteBtn = document.createElement("input");
deleteBtn.setAttribute("type", "button");
deleteBtn.setAttribute("value", "삭제");
// deleteBtn.setAttribute("onclick", "deleteTask(this);");

//id나 class를 추가해줄 떄
  addLi.append(checkBox, inputTask.value, deleteBtn);


  todoList.append(addLi);

  inputTask.value = "";
  }

});

// E.target 사용 

todoList.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if(
    e.target.tagName === "INPUT" && 
    e.target.getAttribute("type") === "button") {
    e.target.parentNode.remove();
  }
})

// function deleteTask (t) {
//  t.parentNode.remove();
// }
// const test = document.querySelector(".test");
// test.addEventListener("click", function(){
//   console.log(test.checked);
// })