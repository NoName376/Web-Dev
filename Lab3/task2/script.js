let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");


addBtn.addEventListener("click", function() {
    let taskV = input.value;

    if (taskV === "") {
        alert("Write something");
        return;
    }


    let item = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskV;
    span.classList.add("task-text");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");

    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(deleteBtn);

    list.appendChild(item);

    input.value = "";


    checkbox.addEventListener("change", function() {
        if (this.checked) {
            span.classList.add("done");
        } else {
            span.classList.remove("done");
        }
    });


    deleteBtn.addEventListener("click", function() {
        list.removeChild(item);
    });

});