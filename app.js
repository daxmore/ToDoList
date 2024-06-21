let addbtn = document.querySelector(".addbtn");
let todobox = document.querySelector("#todo");
let todolist = document.querySelector("#todobox");

addbtn.addEventListener("click", (e) => {
    if (todobox.value === "") {
        alert("enter value!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = todobox.value;
        todolist.appendChild(li);

        let closeSpan = document.createElement("span");
        closeSpan.classList.add("material-symbols-outlined");
        closeSpan.textContent = "close";
        li.appendChild(closeSpan);

        todobox.value = "";

        
    }
});

todolist.addEventListener("click", (e) => {
    if (e.target.classList.contains("material-symbols-outlined")) {
        e.target.parentNode.remove();
    }
});