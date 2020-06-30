let todoitems: string[] = ["Zocken", "Essen", "Schlafen"];

window.addEventListener("load", function () {


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
            todofeld.innerHTML += "<div>" + "<input type='checkbox'>" + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
          
            var close: HTMLElement = document.getElementsByClassName("fas fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
        
        var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }
}
    
});