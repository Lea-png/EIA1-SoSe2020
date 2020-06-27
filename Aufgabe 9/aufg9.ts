let todoitems: string[] = ["einkaufen", "gassi gehen", "fußball spielen"];

window.addEventListener("load", function () {
    var trash: HTMLElement = document.querySelector(".fa-trash-alt");

    var todofeld: HTMLElement = document.querySelector(".addlist");

    todolist();

    var input: HTMLInputElement = document.querySelector("#input");
    console.log(input);
    var button: HTMLElement = document.querySelector("#But1");

    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todolist();
        input.value = "";
        console.log(todoitems);
    });


    function todolist(): void {
        todofeld.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todofeld.innerHTML += "<div>" + "<input type='checkbox'>"  + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" +  "</div>";
        }
        var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }
    }
});
