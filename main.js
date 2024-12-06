document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    var taskText = document.querySelector("#newtask input").value;
    saveTask(taskText);
    document.querySelector("#tasks").innerHTML += `
     <div class ="task">
         <span id="taskname">
            ${taskText}
         </span>
         <button class="delete">
         <i class="ri-delete-bin-fill"></i>
     </div>
    `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();

        deleteTask(this.parentNode.querySelector("#taskname").textContent);
      };
    }
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newtask input").value = "";
  }
};

function saveTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(function (t) {
    return t !== task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function () {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task) {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
      <span id="taskname">${task}</span>
      <button class="delete">
        <i class="ri-delete-bin-fill"></i>
      </button>
    </div>;
     `
  });
  var current_tasks = document.querySelectorAll("delete")
};
