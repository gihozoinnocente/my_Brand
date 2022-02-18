const articlesContainer = document.querySelector("#articles");
// const articles = JSON.parse(localStorage.getItem("articles"));
const updateArticleForm = document.getElementById('updateArticleForm');
console.log(updateArticleForm)
const titleInput = document.getElementById('inputTitle');
console.log(titleInput)
const imageInput = document.getElementById('photo');
const contentInput = document.getElementById('inputContent');
const updateArticleButton = document.getElementById('createButton');



async function viewers() {

    const response = await fetch('https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles');
    console.log(response)
    const returnedArticles = await response.json();
    const articles = returnedArticles.data



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
        deleteButton.setAttribute("value", item._id)
        deleteButton.setAttribute("onClick", `deleteArticle("${item._id}")`)

        const updateButton = document.createElement("button")
        updateButton.textContent = "Update";
        updateButton.setAttribute("id", "updateArticle")
        updateButton.setAttribute("value", item.id)
        updateButton.setAttribute("onClick", `updateArticle("${item._id}")`)

        var updateDiv = document.getElementById("UpdateDiv");
        const titleInput = document.getElementById("inputTitle");
        const contentInput = document.getElementById("inputContent");
        const updateForm = document.querySelector(".updateArticleForm");


        updateButton.addEventListener("click", async (e) => {
            const toBeUpdated = updateButton.getAttribute("value");
            updateDiv.style.display = "block";
            // let img= document.getElementById("articleImage").addEventListener("change", function (e){console.log(e.target.files[0])})


          



            // for (let i=0; i<allArticles.length; i++){
            //     if(allArticles[i].id== updateButton.value){
            //         titleInput.value = allArticles[i].title;
            //         contentInput.value = allArticles[i].content; 


            //         updateForm.addEventListener("submit", (e)=>{
            //             e.preventDefault()
            //             allArticles[i].title = titleInput.value;
            //             allArticles[i].content = contentInput.value;
            //             localStorage.setItem('articles',JSON.stringify(allArticles));
            //             alert("UPDATED SUCCESSUFLY!!")
            //             setTimeout(()=>{
            //                 updateForm.reset();
            //                 window.location.reload();
            //             },3000)

            //         })
            //     }

            // }

            // const edit = confirm("are you sure you want to edit ?");
            // if (edit === true) {
            //     const response = await fetch(
            //         `http://localhost:3000/api/v1/articles/${id}`, {
            //             method: "PATCH",
            //             headers: {
            //                 'Content-type': 'application/json; charset=UTF-8',
            //                 'Authorization':  window.localStorage.getItem ("accessToken")

            //             }

            //         }

            //     );
            //     console.log(response)
            //     const result = await response.json();

            // }

            // const title = e.target.elements.title.value
            // const content = e.target.elements.content.value
            // // let images = e.target.elements.articleImage.files[0];
            // const formData = new FormData();
            // // formData.append('img', images);
            // formData.append("title", title);
            // formData.append("content", content);

            // let existingArticle = await fetch('http://localhost:3000/api/v1/articles/${id}', {
            // method :"PATCH",
            // mode: 'cors',
            // cache: 'reload',
            // headers: {
            //   'Accept': 'application/json',

            //   'Authorization' : window.localStorage.getItem ("accessToken"),
            // },

            // body: formData,
            // })



            // .then((res) => res.json())
            // .then((data) => console.log(data));
            // // if (existingArticle) {
            // //     alert("Article edited successfully");
            // //     // window.location.href = "http://127.0.0.1:5502/Pages/article.html";
            // // } else {
            // //     alert("not created");
            // // }



        })





        var resetButton = document.getElementById("resetButton");
        resetButton.addEventListener("click", (e) => {
            updateDiv.style.display = "none";
            console.log("clicked")

        })




        div.append(h4);
        div.append(h5);
        div.append(image);
        div.append(p);
        div.append(deleteButton);
        div.append(updateButton);
        articlesContainer.appendChild(div);
    })

}

viewers()




async function deleteArticle(articleId) {
    console.log("clicked")
    const del = confirm("are you sure you want to delete ?");
    if (del === true) {
        const response = await fetch(
            `https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles/${articleId}`, {
            method: "DELETE",
            headers: {

                'Authorization': window.localStorage.getItem("accessToken")

            }

        }

        );
        console.log(response)
        const result = await response.json();
        if (response.status === 200) {
            console.log(result);
            articlesContainer.textContent = "";
            location.reload();
            alert("deleted successfull");
        }
    }

}

async function updateArticle(articleId) {
    const updateDiv = document.getElementById('UpdateDiv');
   
    const response= await fetch(`https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles/${articleId}`)
            const fetchedResponse= await response.json()
            const article=fetchedResponse.data;
            console.log(article)
           
         
            
            titleInput.value = article.title;
            contentInput.value = article.content;

    updateArticleButton.addEventListener("click", async (e)=>{
        e.preventDefault()

        await fetch(
                    `https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles/${articleId}`, {
                    method: "PATCH",
                    headers: {
        
                        'Authorization': window.localStorage.getItem("accessToken")
        
                    },
                    body: new FormData(updateArticleForm)
                }
        
                )
                .then((res)=>res.json())
                .then(data => {
                    if(data.status === 200){
                        alert("updated successfull")
                    }
                })
                .then(()=>{
                   setTimeout(()=>{
                    updateDiv.style.display = "none";
                    viewers()
                   },3000);
                })
    })
   

}
