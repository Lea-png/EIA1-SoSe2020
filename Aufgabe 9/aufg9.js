"use strict";
let todoitems = ["Zocken", "Essen", "Schlafen"];
window.addEventListener("load", function () {
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
            var close = document.getElementsByClassName("fas fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
            var total = document.querySelector("#total");
            total.innerHTML = todoitems.length;
        }
    }
});
//# sourceMappingURL=aufg9.js.map