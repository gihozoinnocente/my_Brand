const blogContainer = document.querySelector("#blog-container");
const articles = JSON.parse(localStorage.getItem("articles"));

function view(info,id)
{
    let div=document.createElement("blog");
    div.setAttribute("class","blog");
    div.innerHTML=`
     <img src="${info.image}" alt="" id="blogImage">
            <div id="blog-content" class="blogBody">
                <h4 id="blog-title" class="blog-title">${info.title}</h4>
                <h6>by Gihozo</h6>
                <p id="#blog-content" class= "#blog-content" ${info.content}</p>
                <p class="likeButton" id="likeButton"><i class="fas fa-thumbs-up"></i></p>
                <button id="send"><a href="/Pages/blog2.html?id=${id}">Read More</a></button>
            </div>
`;
blogContainer.appendChild(div);
}

articles.forEach((Element,id)=> {
    view(Element,id);
    console.log(id)
})





// articles.forEach(function (item) {
//     const div = document.createElement("div");
//     div.setAttribute('class', 'blog');
//     const image = document.createElement("img")
//     image.setAttribute("src", item.image)
//     image.setAttribute("id", "blogImage")
//     const h4 = document.createElement("h4");
//     h4.setAttribute('class', 'blog-title')
//     h4.textContent = item.title;
//     const p = document.createElement("p");
//     p.setAttribute("id", "#blog-content")
//     p.textContent = item.content
//     const ReadMoreButton = document.createElement("button")
//     ReadMoreButton.textContent = "Read More";
//     ReadMoreButton.setAttribute("id", "#send")
//     ReadMoreButton.setAttribute("value", item.id)



//     div.append(image)
//     div.append(h4)
//     div.append(p)
//     div.append(ReadMoreButton)
//     blogContainer.appendChild(div)

// })