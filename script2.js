document.addEventListener("DOMContentLoaded", () => {
    // Datos de ejemplo con imágenes
    const products = [
        { name: "Producto 1", category: "Categoría 1", price: 100, image: "https://www.pedazodearte.com/image/clothing02.png" },
        { name: "Producto 2", category: "Categoría 2", price: 200, image: "https://via.placeholder.com/200" },
        { name: "Producto 3", category: "Categoría 1", price: 150, image: "https://via.placeholder.com/200" },
        { name: "Producto 4", category: "Categoría 3", price: 300, image: "https://via.placeholder.com/200" },
        { name: "Producto 5", category: "Categoría 2", price: 250, image: "https://via.placeholder.com/200" },
        { name: "Producto 6", category: "Categoría 1", price: 90, image: "https://via.placeholder.com/200" },
    ];

    const productList = document.getElementById("product-list");

    function displayProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "col-md-4 product-item";
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}">
                <p>Categoría: ${product.category}</p>
                <p>Precio: $${product.price}</p>
            `;
            productList.appendChild(productItem);
        });
    }

    displayProducts(products);

    window.searchProducts = function() {
        const searchName = document.getElementById("search-name").value.toLowerCase();
        const searchCategory = document.getElementById("search-category").value.toLowerCase();
        const searchPrice = document.getElementById("search-price").value;

        const filteredProducts = products.filter(product => {
            return (
                (searchName === "" || product.name.toLowerCase().includes(searchName)) &&
                (searchCategory === "" || product.category.toLowerCase().includes(searchCategory)) &&
                (searchPrice === "" || product.price <= searchPrice)
            );
        });

        displayProducts(filteredProducts);
    };
});
