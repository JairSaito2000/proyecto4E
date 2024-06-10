document.addEventListener('DOMContentLoaded', function() {
    const vendedorTab = document.getElementById('vendedor-tab');
    const compradorTab = document.getElementById('comprador-tab');
    const vendedorContent = document.getElementById('vendedor-content');
    const compradorContent = document.getElementById('comprador-content');

    vendedorTab.addEventListener('click', function() {
        vendedorContent.style.display = 'block';
        compradorContent.style.display = 'none';
        vendedorTab.classList.add('active');
        compradorTab.classList.remove('active');
    });

    compradorTab.addEventListener('click', function() {
        vendedorContent.style.display = 'none';
        compradorContent.style.display = 'block';
        compradorTab.classList.add('active');
        vendedorTab.classList.remove('active');
    });

    loadProducts();
});

function loginVendedor(event) {
    event.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    location.href = 'dashboard-vendedor.html'; // Redirige al panel de vendedor
}

function loginComprador(event) {
    event.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    location.href = 'dashboard-comprador.html'; // Redirige al panel de comprador
}

function loadProducts() {
    const products = [
        {
            nombre: "Producto 1",
            descripcion: "Descripción del producto 1",
            precio: 100,
            categoria: "Categoría 1",
            imagen: "deber/conferencia 1.jpeg",
            cantidad: 10
        },
        {
            nombre: "Producto 2",
            descripcion: "Descripción del producto 2",
            precio: 200,
            categoria: "Categoría 2",
            imagen: "ruta/a/la/imagen2.jpg",
            cantidad: 5
        }
        // Agrega más productos aquí
    ];

    displayProducts(products);
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <img src="${product.imagen}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <p>${product.descripcion}</p>
                <p>Precio: $${product.precio}</p>
                <p>Categoría: ${product.categoria}</p>
                <p>Cantidad disponible: ${product.cantidad}</p>
                <button onclick="comprarProducto('${product.nombre}')">Comprar</button>
            `;

            productList.appendChild(productElement);
        });
    }
}

function searchProducts() {
    const name = document.getElementById('search-name').value.toLowerCase();
    const category = document.getElementById('search-category').value.toLowerCase();
    const price = document.getElementById('search-price').value;

    const products = [
        {
            nombre: "Conferencias 1",
            descripcion: "Descripción del producto 1",
            precio: 100,
            categoria: "Categoría 1",
            imagen: "/conferencias 1.jpeg",
            cantidad: 10
        },
        {
            nombre: "Conferencias 2",
            descripcion: "Descripción del producto 2",
            precio: 200,
            categoria: "Categoría 2",
            imagen: "/conferencias 2.jpeg",
            cantidad: 5
        },
        {
            nombre: "Conferencias 3",
            descripcion: "Descripción del producto 2",
            precio: 200,
            categoria: "Categoría 2",
            imagen: "/conferencias 3.jpeg",
            cantidad: 5
        }
        // Agrega más productos aquí
    ];

    const filteredProducts = products.filter(product => {
        return (name === '' || product.nombre.toLowerCase().includes(name)) &&
               (category === '' || product.categoria.toLowerCase().includes(category)) &&
               (price === '' || product.precio <= price);
    });

    displayProducts(filteredProducts);
}

function comprarProducto(nombre) {
    alert(`Has comprado ${nombre}`);
}
