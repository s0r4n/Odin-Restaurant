function contact() {
    //create a container for the contact form
    const container = document.createElement("div");
    container.className = "contact-container";

    // create a form
    const form = document.createElement("form");
    form.className = "contact-form";

    //create form elements
    const name = document.createElement("input");
    const email = document.createElement("input");
    const message = document.createElement("textarea");
    const subject = document.createElement("input");
    const submit = document.createElement("input");

    //create labels
    const nameLabel = document.createElement("label");
    const emailLabel = document.createElement("label");
    const subjectLabel = document.createElement("label");
    const messageLabel = document.createElement("label");

    //set input types
    name.setAttribute("name", "name");
    name.setAttribute("type", "text");
    name.required = true;
    name.id = "name";
    email.setAttribute("name", "email");
    email.setAttribute("type", "email");
    email.required = true;
    email.id = "email";
    subject.setAttribute("name", "subject");
    subject.setAttribute("type", "text");
    subject.required = true;
    subject.id = "subject";
    message.setAttribute("name", "message");
    message.required = true;
    message.id = "message"
    submit.setAttribute("type", "submit");
    submit.id = "submit";
    submit.value = "SEND";

    //set label attributes
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Your Name (required)";
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Your Email (required)";
    subjectLabel.setAttribute("for", "subject");
    subjectLabel.textContent = "Subject (required)";
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Your Message (required)";

    //append inputs and labels to the form;
    form.appendChild(nameLabel);
    form.appendChild(name);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(subjectLabel);
    form.appendChild(subject);
    form.appendChild(messageLabel);
    form.appendChild(message);
    form.appendChild(submit);

    container.appendChild(form);

    const content = document.querySelector("#content");
    content.appendChild(container);

    const navbarText = document.querySelectorAll(".links");
    for(let elm of navbarText) {
        elm.style.color = "black";
    }


    const map = document.createElement("iframe");
    map.className = "map";
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6042.3793678345355!2d-73.97155716479612!3d40.779843863424716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2suk!4v1670617144809!5m2!1sen!2suk")
    
    container.appendChild(map);


    
}



  
  

export default contact;