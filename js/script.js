const productos = [
    // Collares
    {
        id: 1,
        nombre: "Collar Fancy Ajustable",
        categoria: "collares",
        precio: 39900,
        imagen: "images/productos/1.jpg"
    },
    {
        id: 2,
        nombre: "Collar Lavanda",
        categoria: "collares",
        precio: 30000,
        imagen: "images/productos/2.jpg"
    },
    {
        id: 3,
        nombre: "Collar Candy",
        categoria: "collares",
        precio: 30000,
        imagen: "images/productos/3.jpg"
    },
    {
        id: 4,
        nombre: "Collar Kawai",
        categoria: "collares",
        precio: 37000,
        imagen: "images/productos/4.jpg   "
    },
    {
        id: 5,
        nombre: "Collar Primavera",
        categoria: "collares",
        precio: 37000,
        imagen: "images/productos/5.jpg"
    },
    {
        id: 6,
        nombre: "Collar Sunshine",
        categoria: "collares",
        precio: 35000,
        imagen: "images/productos/6.jpg"
    },
    {
        id: 7,
        nombre: "Collar Lovely",
        categoria: "collares",
        precio: 37000,
        imagen: "images/productos/7.jpg"
    },
    {
        id: 8,
        nombre: "Collar Princess",
        categoria: "collares",
        precio: 32000,
        imagen: "images/productos/8.jpg"
    },
    {
        id: 9,
        nombre: "Collar Garden",
        categoria: "collares",
        precio: 39000,
        imagen: "images/productos/9.jpg"
    },
    {
        id: 10,
        nombre: "Collar Daisy",
        categoria: "collares",
        precio: 44000,
        imagen: "images/productos/10.jpg"
    },

    // Plaquitas
    {
        id: 11,
        nombre: "Plaquita Huesito Clásica",
        categoria: "plaquitas",
        precio: 25000,
        imagen: "images/productos/placa1.jpg"
    },
    {
        id: 12,
        nombre: "Plaquita Corazón",
        categoria: "plaquitas",
        precio: 28000,
        imagen: "images/productos/placa2.jpg"
    },
    {
        id: 13,
        nombre: "Plaquita Daisy",
        categoria: "plaquitas",
        precio: 29000,
        imagen: "images/productos/placa3.jpg"
    },
    {
        id: 14,
        nombre: "Plaquita Estrella",
        categoria: "plaquitas",
        precio: 27000,
        imagen: "images/productos/placa4.jpg"
    },
    {
        id: 15,
        nombre: "Plaquita Mini Love",
        categoria: "plaquitas",
        precio: 23000,
        imagen: "images/productos/placa5.jpg"
    },
    {
        id: 16,
        nombre: "Plaquita Arcoíris",
        categoria: "plaquitas",
        precio: 28000,
        imagen: "images/productos/placa6.jpg"
    },

    // Temporada
    {
        id: 17,
        nombre: "Corbatín Teddy",
        categoria: "temporada",
        precio: 25000,
        imagen: "images/productos/corbatin1.jpg"
    },
    {
        id: 18,
        nombre: "Corbatín Fiesta",
        categoria: "temporada",
        precio: 27000,
        imagen: "images/productos/corbatin2.jpg"
    },
    {
        id: 19,
        nombre: "Bandana Sweet",
        categoria: "temporada",
        precio: 20000,
        imagen: "images/productos/bandana.jpg"
    },
    {
        id: 20,
        nombre: "Kit Kiki Deluxe",
        categoria: "temporada",
        precio: 85000,
        imagen: "images/productos/kikideluxe.jpg"
    }
];

const productsContainer = document.querySelector("#productsContainer");
const filterButtons = document.querySelectorAll(".filter-btn");

mostrarProductos(productos);

function mostrarProductos(listaProductos) {

    productsContainer.innerHTML = "";

    listaProductos.forEach(producto => {

        const card = document.createElement("article");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="product-info">

                <span class="product-category">
                    ${producto.categoria}
                </span>

                <h3>${producto.nombre}</h3>

                <p class="price">
                    $${producto.precio.toLocaleString("es-CO")}
                </p>

                <div class="product-buttons">

                    <button
                        class="btn-cart"
                    >
                        Agregar al carrito
                    </button>

                    <a
                        href="https://wa.me/573042003759?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(producto.nombre)}"
                        target="_blank"
                        class="btn-buy"
                    >
                        Pedir por WhatsApp
                    </a>

                </div>

            </div>
        `;

        productsContainer.appendChild(card);
    });
}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const categoria = button.dataset.filter;

        if (categoria === "todos") {

            mostrarProductos(productos);

        } else {

            const filtrados = productos.filter(
                producto => producto.categoria === categoria
            );

            mostrarProductos(filtrados);
        }

    });

});

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

//Para actualizar el año automatic
document.getElementById("year").textContent =
new Date().getFullYear();