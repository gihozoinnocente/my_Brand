const articlesContainer = document.querySelector("#articles");
const articles = JSON.parse(localStorage.getItem("articles"));
articles.forEach(function (item) {
    const div = document.createElement("div");
    div.setAttribute('class', 'query');
    const h4 = document.createElement("h4");
    h4.setAttribute('class', 'queryHeader')
    h4.textContent = item.title;
    const h5 = document.createElement("h5")
    h5.textContent = `Created: ${moment(item.sentOn).fromNow()}`
    const image = document.createElement("img")
    image.setAttribute("src", item.image)
    image.setAttribute("id", "articleImage")
    const p = document.createElement("p");
    p.setAttribute("class", "messagepar")
    p.textContent = item.content
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteArticle")
    deleteButton.setAttribute("value", item.id)

    const updateButton = document.createElement("button")
    updateButton.textContent = "Update";
    updateButton.setAttribute("id", "updateArticle")
    updateButton.setAttribute("value", item.id)

    deleteButton.addEventListener("click", (e) => {
        const toBeDeleted = deleteButton.getAttribute("value");
        const allArticles = JSON.parse(localStorage.getItem("articles"));
        const theRest = allArticles.filter((article) => {
            return article.id !== toBeDeleted;
        })
        if (window.confirm("Are you sure you want to delete this article? ")) {
            localStorage.setItem("articles", JSON.stringify(theRest))
            location.reload()
        }
    })
    div.append(h4);
    div.append(h5);
    div.append(image);
    div.append(p);
    div.append(deleteButton);
    div.append(updateButton);
    articlesContainer.appendChild(div);
})
