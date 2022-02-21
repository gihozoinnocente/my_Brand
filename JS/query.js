// const queriesContainer = document.querySelector("#queries");
// const queries = JSON.parse(localStorage.getItem("queries"));
// queries.forEach(function (item) {
//     const div = document.createElement("div");
//     div.setAttribute('class', 'query');
//     const h4 = document.createElement("h4");
//     h4.setAttribute('class', 'queryHeader')
//     h4.textContent = item.name;
//     const h5 = document.createElement("h5")
//     h5.textContent = item.email;
//     const h6 = document.createElement("h6")
//     const phonenumber = document.createElement("h6")
//     phonenumber.textContent = "Phone number: " + item.phonenumber
//     h6.textContent = `Sent: ${moment(item.sentOn).fromNow()}`
//     const p = document.createElement("p");
//     p.setAttribute("class", "messagepar")
//     p.textContent = item.message
//     const locationP= document.createElement("p");
//     locationP.setAttribute('class','querHeader')
//     locationP.textContent = "User location:" + item.location
//     const deleteButton = document.createElement("button")
//     deleteButton.textContent = "Delete";
//     deleteButton.setAttribute("id", "deleteQuery")
//     deleteButton.setAttribute("value", item.id)
//     deleteButton.addEventListener("click", (e) => {
//         const toBeDeleted = deleteButton.getAttribute("value");
//         const allQueries = JSON.parse(localStorage.getItem("queries"));
//         const theRest = allQueries.filter((query) => {
//             return query.id !== toBeDeleted;
//         })
//         if (window.confirm("Are you sure you want to delete this message? ")) {
//             localStorage.setItem("queries", JSON.stringify(theRest))
//             location.reload()
//         }
//     })
//     div.append(h4);
//     div.append(h5);
//     div.append(h5);
//     div.append(h6);
//     div.append(phonenumber)
//     div.append(p);
//     div.append(locationP);
//     div.append(deleteButton);
//     queriesContainer.appendChild(div);
// })


const queriesContainer = document.querySelector("#queries");

async function viewer() {
    
    const getQueries = await get('/queries/');
    console.log(getQueries)
    const queries = getQueries.data;
    console.log(queries)

  

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
            const locationP= document.createElement("p");
            locationP.setAttribute('class','querHeader')
            locationP.textContent = "User location:" + item.location
            
            
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("id", "deleteQuery")
            deleteButton.setAttribute("value", item.id)
            deleteButton.setAttribute("onClick", `deleteQuerie("${item._id}")`)
            
            // deleteButton.addEventListener("click", async (e) => {
                // const toBeDeleted = deleteButton.getAttribute("value");
                // const allQueries = JSON.parse(localStorage.getItem("queries"));
                // const theRest = allQueries.filter((query) => {
                //     return query.id !== toBeDeleted;
                // })
                // if (window.confirm("Are you sure you want to delete this message? ")) {
                //     localStorage.setItem("queries", JSON.stringify(theRest))
                //     location.reload()
                // }
                

                // deleteButton.addEventListener("click", async(e) => {
                    //     const toBeDeleted = deleteButton.getAttribute("value");
                    //     // const allArticles = JSON.parse(localStorage.getItem("articles"));
                    //     // const theRest = allArticles.filter((article) => {
                    //     //     return article.id !== toBeDeleted;
                    //     // })
                    //     // if (window.confirm("Are you sure you want to delete this article? ")) {
                    //     //     localStorage.setItem("articles", JSON.stringify(theRest))
                    //     //     location.reload()
                    //     // }
                
                        
                
            //                 const del = confirm("are you sure you want to delete comment?");
            //                 if (del === true) {
            //                     const response = await fetch(
            //                         `https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/queries/${id}`, {
            //                             method: "DELETE",
            //                             headers: {
            //                                 'Content-type': 'application/json; charset=UTF-8',
            //                                 'Authorization':  window.localStorage.getItem ("accessToken")
                                            
            //                             }
                
            //                         }
                                   
            //                     );
            //                     console.log(response)
            //                     const result = await response.json();
            //                     if (response.status === 200) {
            //                         console.log(result);
            //                         queriesContainer.textContent = "";
            //                         location.reload();
            //                         alert("deleted successfull");
            //                     }
            //                 }
            //             // };
            //         })

            // })




            div.append(h4);
            div.append(h5);
            div.append(h5);
            div.append(h6);
            div.append(phonenumber)
            div.append(p);
            div.append(locationP);
            div.append(deleteButton);
            queriesContainer.appendChild(div);
        })


    
    
}
viewer()


async function deleteQuerie(querieId) {

    const del = confirm("are you sure you want to delete ?");
    if (del === true) {
        const response = await fetch(
            `https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/queries/${querieId}`, {
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
            queriesContainer.textContent = "";
            location.reload();
            alert("deleted successfull");
        }
    }

}

