//인풋에 내용을 쓰고 등록 버튼을 클릭하면 리스트에 내용이 추가된다.
const addButton = document.querySelector(".todo-input-button");
const taskInput = document.getElementById("todo-input");
const tasklist = document.querySelector(".section-3");

// 입력창에 입력을 했을때와 안 했을때
function addTask() {
  const task = taskInput.value.trim();

  if (task) {
    creatTaskElement(task);
    taskInput.value = "";
    saveTasks();
  } else {
    alert("할 일을 입력해주세요.");
  }
}
const ul = document.createElement("ul");
ul.className = "list-container";
tasklist.appendChild(ul);

// 버튼을 누르는 상황이 벌어졌을때 addTask 진행
addButton.addEventListener("click", addTask);

// todo-list 구성요소 생성 시작~
function creatTaskElement(task) {
  // li요소 생성
  const listItem = document.createElement("li");
  // ul에 li요소 삽입
  ul.appendChild(listItem);

  // 체크박스 생성
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"; // input 타입을 checkbox로 설정
  listItem.appendChild(checkbox); // li 요소에 체크박스 추가

  // 텍스트 내용 추가
  const textLabel = document.createElement("label");
  textLabel.textContent = task;
  listItem.appendChild(textLabel);

  //삭제버튼
  const deletButton = document.createElement("button");
  deletButton.textContent = "삭제";
  deletButton.className = "deleteTask";
  listItem.appendChild(deletButton);

  deletButton.addEventListener("click", function () {
    listItem.remove();
    saveTasks();
  });
}

// 로컬 스토리지에 데이터 저장 (새로고침해도 정보가 사라지지 않도록 함)
function saveTasks() {
  const tasks = [];
  tasklist.querySelectorAll("li").forEach(function (item) {
    tasks.push(item.textContent.replace("삭제", "").trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// loadTasks
// 할일 목록을 로컬 스토리지에서 불러오는 함수 정의
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(creatTaskElement);
}

// 저장된 스토리지에서 호출
window.addEventListener("load", loadTasks);

// 입력창이 항상 리스트 아래에 위치하도록 지정
tasklist.insertAdjacentElement("afterend", inputArea);
