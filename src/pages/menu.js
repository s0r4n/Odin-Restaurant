function menu() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    const menuBackground = document.createElement("div");
    menuBackground.className = "menu-background";

    const content = document.querySelector("#content");

    menuBackground.appendChild(menuContainer);
    content.appendChild(menuBackground);
    
}

export default menu;