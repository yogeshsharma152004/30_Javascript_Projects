var selectfield = document.getElementById("selectfield");

var selecttext = document.getElementById("selecttext");

var options = document.getElementsByClassName("options");

var list = document.getElementById("list");

var arrow = document.getElementById("arrow");

selectfield.onclick = function(){
    list.classList.toggle("hide");

    arrow.classList.toggle("rotate");
}

for(option of options){
    option.onclick = function(){
        selecttext.innerHTML = this.textContent;
        list.classList.toggle("hide");

        arrow.classList.toggle("rotate");
}
    }
