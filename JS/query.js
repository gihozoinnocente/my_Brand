const queriesContainer = document.querySelector("#queries");
const queries = JSON.parse(localStorage.getItem("queries"));
queries.forEach(function (item) {
    const div = document.createElement("div");
    div.setAttribute('class', 'query');
    const h4 = document.createElement("h4");
    h4.setAttribute('class', 'queryHeader')
    h4.textContent = item.name;
    const h5 = document.createElement("h5")
    h5.textContent = item.email;
    const h6 = document.createElement("h6")
    const phonenumber = document.createElement("h6")
    phonenumber.textContent = "Phone number: " + item.phonenumber
    h6.textContent = `Sent: ${moment(item.sentOn).fromNow()}`
    const p = document.createElement("p");
    p.setAttribute("class", "messagepar")
    p.textContent = item.message
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteQuery")
    deleteButton.setAttribute("value", item.id)
    deleteButton.addEventListener("click", (e) => {
        const toBeDeleted = deleteButton.getAttribute("value");
        const allQueries = JSON.parse(localStorage.getItem("queries"));
        const theRest = allQueries.filter((query) => {
            return query.id !== toBeDeleted;
        })
        if (window.confirm("Are you sure you want to delete this message? ")) {
            localStorage.setItem("queries", JSON.stringify(theRest))
            location.reload()
        }
    })
    div.append(h4);
    div.append(h5);
    div.append(h5);
    div.append(h6);
    div.append(phonenumber)
    div.append(p);
    div.append(deleteButton);
    queriesContainer.appendChild(div);
})
