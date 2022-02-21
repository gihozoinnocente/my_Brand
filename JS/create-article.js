// let image = "";
// document.querySelector("#photo").addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         image = reader.result;
//     });
//     reader.readAsDataURL(this.files[0]);
// }); //initialising the local storage
// const createArticleForm = document.querySelector(".create-article-form");
// createArticleForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const title = e.target.elements.title.value
//     const content = e.target.elements.content.value
//     const data = {
//         id: uuidv4(),
//         title,
//         image,
//         content,
//         created_at: Date.now()
//     }
//     const existingArticle = JSON.parse(localStorage.getItem("articles")) === null ? [] : JSON.parse(localStorage.getItem("articles"));
//     existingArticle.push(data)
//     localStorage.setItem("articles", JSON.stringify(existingArticle))
//     window.alert("Article create successfully")
//     e.target.elements.title.value = ''
//     e.target.elements.content.value = ''
//     e.target.elements.photo.value = []
// })


let image = document.getElementById("photo").addEventListener("change", function (e){console.log(e.target.files[0])})


//initialising the local storage
const createArticleForm = document.querySelector(".create-article-form");
createArticleForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
   

    // const existingArticle = await post('/articles',data);
    // console.log(existingArticle)
    let images = e.target.elements.photo.files[0];
    const formData = new FormData();
    formData.append('image', images);
    formData.append("title", title);
    formData.append("content", content);
    


    

    
    let existingArticle = fetch('https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles', {
        method :"POST",
        mode: 'cors',
        cache: 'reload',
        headers: {
          'Accept': 'application/json',
         
          'Authorization' : window.localStorage.getItem ("accessToken"),
        },
        
        body: formData,
        })

            

        .then((res) => res.json())
        .then((data) => {
        if (data.status === 200) {
            alert("Article created successfully");
            // window.location.href = "http://127.0.0.1:5502/Pages/article.html"; 
            window.location.href = "/Pages/article.html";
        } else {
            alert("not created");
        }
    
        })
    
        // }




    






    
    // window.alert("Article create successfully")
    // e.target.elements.title.value = ''
    // e.target.elements.content.value = ''
    // e.target.elements.photo.value = []
})


