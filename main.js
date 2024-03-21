//인풋에 내용을 쓰고 등록 버튼을 클릭하면 리스트에 내용이 추가된다.

//투두 인풋
const todoinput = document.querySelector(".todo-input");
console.log(todoinput);

//버튼
const inputButton = document.querySelector(".todo-input-button");
console.log(inputButton);

//할일 리스트
const todolist = document.querySelector(".section-3");

//클릭 이벤트
inputButton.addEventListener("click", function () {
  //인풋에 있는 투두 내용 가져오기
  const todotext = todoinput.value;

  //할일요소 만들기
  const label = document.createElement("label");

  label.textContent = todotext;
  //할일 리스트 추가하기
  todolist.appendChild(label);
});
