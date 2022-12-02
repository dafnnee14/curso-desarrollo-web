let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image: "white-t-shirt.jpg",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "short-skirt.jpg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "sporty smartwatch",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "Knitted-top.jpg",
        },

    ],
};

for (let i of products.data) {
    // Creamos la carta
    let card = document.createElement("div");
    // La carta debe tener una categoría 
    card.classList.add("card", i.category, "hide");
    // Imagen div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Imagen tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(imgContainer);
    // Contenedor
    let container = document.createElement("div");
    container.classList.add("container");
    // Nombre del producto
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = "$" + i.productName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
// Las categorías de los parametros y el pase de botónes
function filterProduct(value) {
    // Code clase de botones
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button) => { }
}
// Comprobar si el valor es igual que Innertext


