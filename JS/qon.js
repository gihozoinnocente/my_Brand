const contactForm = document.getElementById("contactForm");
const queries = document.querySelector(".queries");
const nameInput = contactForm["name"];
const textInput = contactForm["text"];
const emailInput = contactForm["email"];
const button = document.getElementById("btn");


const addMessage = (e) =>{
    e.preventDefault();

    const prevQuerries = localStorage.getItem("queries")?
    Object.values(JSON.parse(localStorage.getItem("queries"))) : [];

    localStorage.setItem("queries",JSON.stringify([...[...prevQuerries,{name:nameInput.value,text:textInput.value,email:emailInput.value}]]))
  

};
button.addEventListener("click", (e)=>{addMessage(e)})

