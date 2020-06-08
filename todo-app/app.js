const addBtn =      document.querySelector(".add");
const taskField =   document.querySelector(".taskInput");
const list =        document.querySelector(".list");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (taskField.value.lenght === 0) {
        return false;
    }
    const taskContainer = list.appendChild(document.createElement("div"));
    const task = taskContainer.appendChild(document.createElement("p"));
    const deleteBtn = taskContainer.appendChild(document.createElement("i"));

    deleteBtn.className = "fas fa-trash-alt";
    taskContainer.className = "taskContainer";
    task.className = "task";
    task.innerHTML = taskField.value.charAt(0).toUpperCase() + taskField.value.slice(1);
    taskField.value = "";

    deleteBtn.addEventListener("click", deleteTask);

    function deleteTask(e) {
        e.target.parentElement.remove();
    }
}