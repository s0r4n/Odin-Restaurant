function home () {
    
    const contentContainer1 = document.createElement("div");
    contentContainer1.className = "container1";
    content.appendChild(contentContainer1);

    //create text elements and add class
    const pizzaText = document.createElement("div");
    pizzaText.className = "pizza-text";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.className = "animated-text";

    //add text content to text elements
    p2.textContent = "NEW YORK'S AWARD-WINNING";
    p3.textContent = "WOOD-FIRED NAPOLITAN PIZZA";
   
    //create divider with an icon in the middle
    const divider = document.createElement("div");
    const leftLine = document.createElement("span");
    const icon = document.createElement("span");
    const rightLine = document.createElement("span");
    
    //add font awesome icon
    icon.className = "fa fa-star";

    //divider class
    leftLine.className = "divider-line";
    rightLine.className = "divider-line";
    divider.className = "divider";

    //append divider elements to the divider container
    divider.appendChild(leftLine);
    divider.appendChild(icon);
    divider.appendChild(rightLine);

    //add text elements and divider to pizzaText
    pizzaText.appendChild(p1);
    pizzaText.appendChild(p2);
    pizzaText.appendChild(p3);
    pizzaText.appendChild(divider);

    //append pizzaText to container
    contentContainer1.appendChild(pizzaText);

}


export default home;