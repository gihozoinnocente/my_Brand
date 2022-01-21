const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the values from the form
    const name = e.target.elements.name.value
    const message = e.target.elements.text.value
    const email = e.target.elements.email.value
    const subject = e.target.elements.subject.value
    const phonenumber = e.target.elements.phonenumber.value
    // defining the message
    const query = {
        
        id: uuidv4(),
        name: name,
        email: email,
        message: message,
        subject: subject,
        phonenumber: phonenumber,
        location : userLocation,
        sentOn: Date.now()
    }
    // Let first get the existing queries
    const queries = JSON.parse(localStorage.getItem("queries")) === null ? [] : JSON.parse(localStorage.getItem("queries"));
    queries.push(query)
    // Let send the message to the local storage
    localStorage.setItem("queries", JSON.stringify(queries))
    window.alert("Thank you for contacting me")
    e.target.elements.name.value = ''
    e.target.elements.text.value = ''
    e.target.elements.email.value = ''
    e.target.elements.subject.value = ''
    e.target.elements.phonenumber.value = ''
})

var userLocation 

function getLocation(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        userLocation = "Your browser not support";
    }
}

function onSuccess(position){
    
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=7792c32f77b34c3a85b1ecf6f26c1cce`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        userLocation = `${county} , ${country}`;
    }).catch(()=>{
        userLocation = "Something went wrong";
    });
}


function onError(error){
    if(error.code == 1){
        userLocation = "You denied the request";
    }else if(error.code == 2){
        userLocation = "Location is unavailable";
    }else{
        userLocation = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}
getLocation()
