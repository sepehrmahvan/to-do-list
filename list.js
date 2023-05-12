let span = document.querySelector("form span");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


span.addEventListener("click", addItem);

function addItem() {
    if(input.value.trim() != ""){
        let li = document.createElement("li");
        li.textContent = input.value.trim();
        ul.appendChild(li);
        input.value=""
        input.focus();
        let flag = true;

        li.addEventListener("click", checked);
        function checked(){
            if(flag){
                    li.style.textDecoration="line-through";
                    li.style.color="white";
                    li.style.borderColor="green";
                    li.style.backgroundColor="green";
                    li.style.animationName="done";
                    li.style.animationDuration=".5s";
                    li.style.animationIterationCount="1";
                    flag = false;
            }
            else{
                    li.style.textDecoration="none";
                    li.style.color="rgb(78, 78, 78)";
                    li.style.borderColor="darkgray";
                    li.style.backgroundColor="white";
                    li.style.animationName="done";
                    li.style.animationDuration=".5s";
                    li.style.animationIterationCount="1";
                    flag=true;
            }
        }
        li.addEventListener("dblclick", eliminate);
        function eliminate(){
            ul.removeChild(li);
        }
    }
}
