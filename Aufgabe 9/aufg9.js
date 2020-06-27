    
let todoitems = ["einkaufen", "gassi gehen", "fußball spielen"];
window.addEventListener("load", function () {
    var trash = document.querySelector(".fa-trash-alt");
    var todofeld = document.querySelector(".addlist");
    todolist();
    var input = document.querySelector("#input");
    console.log(input);
    var button = document.querySelector("#But1");
    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todolist();
        input.value = "";
        console.log(todoitems);
    });
    function todolist() {
        todofeld.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todofeld.innerHTML += "<div>" + "<input type='checkbox'>" + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        var total = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }
});