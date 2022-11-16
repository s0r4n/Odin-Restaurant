function home () {
    //create the navigation bar and its elements
    const navbar = document.createElement("div");
    const navElement1 = document.createElement("div");
    const navElement2 = document.createElement("div");
    const navElement3 = document.createElement("div");

    //add text to elements
    navElement1.textContent = "Home";
    navElement2.textContent = "Menu";
    navElement3.textContent = "Contact";

    //add class to navbar
    navbar.className = "navbar";

    //append div elements to navbar
    navbar.appendChild(navElement1);
    navbar.appendChild(navElement2);
    navbar.appendChild(navElement3);

    const content = document.querySelector("#content");
    content.appendChild(navbar);

}


export default home;