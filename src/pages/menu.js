function menu() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    const menuBackground = document.createElement("div");
    menuBackground.className = "menu-background";

    const content = document.querySelector("#content");

    //create pizzas
    const pizza1 = document.createElement("div");
    const pizza2 = document.createElement("div");
    const pizza3 = document.createElement("div");
    const pizza4 = document.createElement("div");
    const pizza5 = document.createElement("div");
    const pizza6 = document.createElement("div");
    const pizza7 = document.createElement("div");



    //add class to pizzas 
    pizza1.className = "pizza";
    pizza2.className = "pizza";
    pizza3.className = "pizza";
    pizza4.className = "pizza";
    pizza5.className = "pizza";
    pizza6.className = "pizza";
    pizza7.className = "pizza";

    //pizza names and prices
    const pizza1Name = document.createElement("div");
    const pizza2Name = document.createElement("div");
    const pizza3Name = document.createElement("div");
    const pizza4Name = document.createElement("div");
    const pizza5Name = document.createElement("div");
    const pizza6Name = document.createElement("div");
    const pizza7Name = document.createElement("div");
    const pizza1Price = document.createElement("div");
    const pizza2Price = document.createElement("div");
    const pizza3Price = document.createElement("div");
    const pizza4Price = document.createElement("div");
    const pizza5Price = document.createElement("div");
    const pizza6Price = document.createElement("div");
    const pizza7Price = document.createElement("div");

    pizza1Name.textContent = "FOCACCIA";
    pizza2Name.textContent = "INSALATINA";
    pizza3Name.textContent = "TAGLIERE";
    pizza4Name.textContent = "TONNO E CECI";
    pizza5Name.textContent = "BURRATA PLATE";
    pizza6Name.textContent = "PROSCIUTTO & MOZZARELLA";
    pizza7Name.textContent = "BARBABIETOLE";
    pizza1Price.textContent = "$6";
    pizza2Price.textContent = "$9";
    pizza3Price.textContent = "$20";
    pizza4Price.textContent = "$11";
    pizza5Price.textContent = "$15";
    pizza6Price.textContent = "$16";
    pizza7Price.textContent = "$11";

    //add pizza headers 
    const pizza1Header  = document.createElement("div");
    const pizza2Header  = document.createElement("div");
    const pizza3Header  = document.createElement("div");
    const pizza4Header  = document.createElement("div");
    const pizza5Header  = document.createElement("div");
    const pizza6Header  = document.createElement("div");
    const pizza7Header  = document.createElement("div");

    //set pizza header class
    pizza1Header.className = "pizza-header";
    pizza2Header.className = "pizza-header";
    pizza3Header.className = "pizza-header";
    pizza4Header.className = "pizza-header";
    pizza5Header.className = "pizza-header";
    pizza6Header.className = "pizza-header";
    pizza7Header.className = "pizza-header";

    //append content to headers
    pizza1Header.appendChild(pizza1Name);
    pizza1Header.appendChild(pizza1Price);
    pizza2Header.appendChild(pizza2Name);
    pizza2Header.appendChild(pizza2Price);
    pizza3Header.appendChild(pizza3Name);
    pizza3Header.appendChild(pizza3Price);
    pizza4Header.appendChild(pizza4Name);
    pizza4Header.appendChild(pizza4Price);
    pizza5Header.appendChild(pizza5Name);
    pizza5Header.appendChild(pizza5Price);
    pizza6Header.appendChild(pizza6Name);
    pizza6Header.appendChild(pizza6Price);
    pizza7Header.appendChild(pizza7Name);
    pizza7Header.appendChild(pizza7Price);

    //create pizza content elements 
    const pizza1Content = document.createElement("div");
    const pizza2Content = document.createElement("div");
    const pizza3Content = document.createElement("div");
    const pizza4Content = document.createElement("div");
    const pizza5Content = document.createElement("div");
    const pizza6Content = document.createElement("div");
    const pizza7Content = document.createElement("div");

    //set pizza content
    pizza1Content.textContent = "Pizza Bread, Coarse Sea Salt, E.V.O.O., Rosemary +$4 with Italian Olive Medley";
    pizza2Content.textContent = "Mixed Greens, Chrery Tomatoes, E.V.O.O. Balsamic Dressing";
    pizza3Content.textContent = "Selection of Italian Cheeses and Cured Meats Served with Focaccia";
    pizza4Content.textContent = "Chickpeas, Tuna, Capers, Red Onions, Garlic, Lemon E.V.O.O. Dressing";
    pizza5Content.textContent = "Fresh burrata served with arugula and cherry tomatoes";
    pizza6Content.textContent = "Served with a Side of Arugula Salad";
    pizza7Content.textContent = "Roasted Beets, Apple, Whipped Goat Cheese, E.V.O.O. Dressing";

    //append pizza elements to pizzas
    pizza1.appendChild(pizza1Header);
    pizza1.appendChild(pizza1Content);
    pizza2.appendChild(pizza2Header);
    pizza2.appendChild(pizza2Content);
    pizza3.appendChild(pizza3Header);
    pizza3.appendChild(pizza3Content);
    pizza4.appendChild(pizza4Header);
    pizza4.appendChild(pizza4Content);
    pizza5.appendChild(pizza5Header);
    pizza5.appendChild(pizza5Content);
    pizza6.appendChild(pizza6Header);
    pizza6.appendChild(pizza6Content);
    pizza7.appendChild(pizza7Header);
    pizza7.appendChild(pizza7Content);


    //create menu
    const menu = document.createElement("div");
    menu.className = "menu";

    //add pizzas to the menu
    menu.appendChild(pizza1);
    menu.appendChild(pizza2);
    menu.appendChild(pizza3);
    menu.appendChild(pizza4);
    menu.appendChild(pizza5);
    menu.appendChild(pizza6);
    menu.appendChild(pizza7);

    menuContainer.appendChild(menu);





    menuBackground.appendChild(menuContainer);
    content.appendChild(menuBackground);
    
}

export default menu;