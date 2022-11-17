function home () {
    //create the navigation bar and its elements
    const navbar = document.createElement("div");
    const navbarLeft = document.createElement("div");
    const navbarRight = document.createElement("div");
    const logo = document.createElement("div");
    const navElement1 = document.createElement("div");
    const navElement2 = document.createElement("div");
    const navElement3 = document.createElement("div");

    //add text to elements
    navElement1.textContent = "Home";
    navElement2.textContent = "Menu";
    navElement3.textContent = "Contact";

    //add class to navbar elements
    navbar.className = "navbar";
    logo.className = "logo";
    navbarLeft.className = "navbar-left";
    navbarRight.className = "navbar-right";


    //append div elements to left and right side of the navigation bar
    navbarLeft.appendChild(logo);
    navbarRight.appendChild(navElement1);
    navbarRight.appendChild(navElement2);
    navbarRight.appendChild(navElement3);

    //append right and left side of navigation bar
    navbar.appendChild(navbarLeft);
    navbar.appendChild(navbarRight);

    const content = document.querySelector("#content");
    content.appendChild(navbar);

    const contentContainer1 = document.createElement("div");
    contentContainer1.className = "container1";
    content.appendChild(contentContainer1);
}


export default home;