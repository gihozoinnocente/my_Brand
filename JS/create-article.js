let image = "";
document.querySelector("#photo").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        image = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
}); //initialising the local storage
const createArticleForm = document.querySelector(".create-article-form");
createArticleForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
    const data = {
        id: uuidv4(),
        title,
        image,
        content,
        created_at: Date.now()
    }
    const existingArticle = JSON.parse(localStorage.getItem("articles")) === null ? [] : JSON.parse(localStorage.getItem("articles"));
    existingArticle.push(data)
    localStorage.setItem("articles", JSON.stringify(existingArticle))
    window.alert("Article create successfully")
    e.target.elements.title.value = ''
    e.target.elements.content.value = ''
    e.target.elements.photo.value = []
})