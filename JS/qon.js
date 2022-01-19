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
        sentOn: Date.now()
    }
    // Let first get the existing queries
    const queries = JSON.parse(localStorage.getItem("queries")) === null ? [] : JSON.parse(localStorage.getItem("queries"));
    queries.push(query)
    // Let send the message to the local storage
    localStorage.setItem("queries", JSON.stringify(queries))
    window.alert("Thanak you for contacting me")
    e.target.elements.name.value = ''
    e.target.elements.text.value = ''
    e.target.elements.email.value = ''
    e.target.elements.subject.value = ''
    e.target.elements.phonenumber.value = ''
})
