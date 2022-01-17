const qno = document.querySelector("#queries");
function ShowItems(){
    const queries = JSON.parse(localStorage.getItem("queries"));
    queries.forEach(function (item){

        const div = document.createElement("div");
        div.setAttribute('class','query');
        const h4 = document.createElement("h4");
        h4.setAttribute('class','queryHeader')
        h4.textContent = Object.values(item);
        const p = document.createElement("p");
        const email = document.createElement("p");
        
        div.append(h4,p,email);
        qno.appendChild(div);


        console.log(div);
    })
}
ShowItems();
