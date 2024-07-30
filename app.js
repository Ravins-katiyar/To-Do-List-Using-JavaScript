let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function(event){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    
    ul.appendChild(item);
    inp.value="";   /* Used to reset the input box clear after clicking the button */
    
});


ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){  /* event.target tells the clicked item nodename tells the element name like div,button LI(list item)  */
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log(`now ${event.target.parentElement.innerText}`);
    }
});


/*  This is used to delete the existing li element(writen in html file) it can not delete which we add later
let delbtns = document.querySelectorAll(".delete");

for (delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        let par = this.parentElement;
        par.remove();
    });
}*/