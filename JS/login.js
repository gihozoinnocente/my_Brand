
// localStorage.setItem("user", JSON.stringify({ email: "admin@gmail.com", password: "pass123" }))

// const isLogedIn = JSON.parse(localStorage.getItem("isLogedIn")) === null ? localStorage.setItem("isLogedIn", JSON.stringify(false)) : JSON.parse(localStorage.getItem("isLogedIn"))
// if (isLogedIn) {
//     location.assign("/Pages/Admin_Gen.html/admin_dash.html")
// }
// const loginForm = document.querySelector("#loginForm");
// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const email = e.target.elements.email.value
//     const password = e.target.elements.password.value
//     const user = JSON.parse(localStorage.getItem("user"))
//     if (validateEmail(email) && email === user.email && password === user.password) {
//         localStorage.setItem("isLogedIn", JSON.stringify(true))
//         document.querySelector("#loginError").style.display = "none";
//         location.assign("/Pages/Admin_Gen.html/admin_dash.html")
//     } else {
//         document.querySelector("#loginError").style.display = "block";
//     }
// })
// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };



const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const user = {
        email,
        password
    
    }

    //Authenticating user
    const auth = await post('/users/login',user)
    console.log(auth)

 
    //check if the user is successfuly logged in
    if (auth.status === 200 ) {
               // can only be accessible if logged in
                const token = "Bearer" +' '+auth.data.accessToken;
                localStorage.setItem ("accessToken",token)
                localStorage.setItem("isLogedIn", JSON.stringify(true))
                document.querySelector("#loginError").style.display = "none";
                location.assign("/Pages/Admin_Gen.html/admin_dash.html")
            } else {
                document.querySelector("#loginError").style.display = "block";
            } 
})


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};