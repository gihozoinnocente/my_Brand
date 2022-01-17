let blog = document.querySelector("#articles");
function displayBlog(){
    let articles = JSON.parse(localStorage.getItem('articles'));
    articles.forEach(function (item){

        const div = document.createElement("div");
        div.setAttribute('class','blogOne');

        const blogTitle = document.createElement("p");
        blogTitle.setAttribute('class','blog-title')
        blogTitle.style.color = 'red';
        // blogTitle.textContent = Object.values(item);
        const blogText = document.createElement("p");
        blogText.setAttribute('class','blog-text')
        blogText.textContent = Object.values(item);
        blogText.style.color = 'blue';
        const edit = document.createElement("button");
        edit.setAttribute('class','edit');
        edit.textContent = Object.values(item)
    
        div.append(blogTitle);
        div.append(blogText);
        div.append(edit);
        blog.appendChild(div);

    
    }) 
    
}

displayBlog();
