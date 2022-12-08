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
    
}

export default contact;