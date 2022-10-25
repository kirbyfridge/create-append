var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
var list = document.createElement("ol");
var food1 = document.createElement("li");
var food2 = document.createElement("li");
var food3 = document.createElement("li");
var food4 = document.createElement("li");

food1.textContent = "chicken";
food2.textContent = "chicken";
food3.textContent = "chicken";
food4.textContent = "chicken";

list.appendChild(food1);
list.appendChild(food2);
list.appendChild(food3);
list.appendChild(food4);
document.body.appendChild(list);

list.setAttribute("style", "background-color: #333333; padding: 20px;");

food1.setAttribute("style", "background-color: pink; color: white; padding: 5px; margin-left: 35px;");
food2.setAttribute("style", "background-color: red; color: white; padding: 5px; margin-left: 35px;");
food3.setAttribute("style", "background-color: blue; color: white; padding: 5px; margin-left: 35px;");
food4.setAttribute("style", "background-color: purple; color: white; padding: 5px; margin-left: 35px;");