// botones de los filtros
const btn_camisetas = document.getElementById('filtro_camisetas');
const btn_chaquetas = document.getElementById('filtro_chaquetas');
const btn_gorras = document.getElementById('filtro_gorras');
const btn_legos = document.getElementById('filtro_legos');
const btn_souvenirs = document.getElementById('filtro_souvenirs');
const btn_agregar_carrito = document.getElementById('btn_ver_producto')

async function loadShirts() {
  try {
    const response = await fetch('http://localhost:2005/shirts');
    const shirts = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = shirts.map(shirt => createCard(shirt)).join('');
  } catch (error) {
    console.error("Error al cargar camisetas:", error);
  }
}

async function loadJackets() {
  try {
    const response = await fetch('http://localhost:7000/jackets');
    const jackets = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = jackets.map(jacket => createCard(jacket)).join('');
  } catch (error) {
    console.error("Error al cargar chaquetas:", error);
  }
}

async function loadCaps() {
  try {
    const response = await fetch('http://localhost:8585/caps');
    const caps = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = caps.map(cap => createCard(cap)).join('');
  } catch (error) {
    console.error("Error al cargar gorras:", error);
  }
}

async function loadLegos() {
  try {
    const response = await fetch('http://localhost:9595/legos');
    const legos = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = legos.map(lego => createCard(lego)).join('');
  } catch (error) {
    console.error("Error al cargar legos:", error);
  }
}

async function loadSouvenirs() {
  try {
    const response = await fetch('http://localhost:5555/keys');
    const souvenirs = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = souvenirs.map(souvenir => createCard(souvenir)).join('');
  } catch (error) {
    console.error("Error al cargar souvenirs:", error);
  }
}

// Componente Card (HTML dinámico)
function createCard(product) {
  return `
  <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <button class="agregar-carrito-btn btn-comprar" data-id="${product.id} id="btn_ver_producto">Ver</button>
  </div>
  `;
}

function getProductId(productId) {
  console.log("ID del producto:", productId); // Retorna el ID (puedes usarlo para redirigir, etc.)
  return productId; // Si necesitas retornarlo explícitamente
}


async function loadShirts() {
  try {
    const response = await fetch('http://localhost:2005/shirts');
    const shirts = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = shirts.map(shirt => createCard(shirt)).join('');
  } catch (error) {
    console.error("Error al cargar camisetas:", error);
  }
}

document.querySelector('.agregar-carrito-btn').addEventListener('click', (e) => {
  const producto = {
    id: e.target.dataset.id,
    nombre: e.target.dataset.nombre,
    precio: parseFloat(e.target.dataset.precio)
  };

  carrito.agregarProducto(producto);
});

document.getElementById("catalog").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    const productId = e.target.dataset.id;
    const carrito = JSON.parse(localStorage.getItem("productosCarrito") || "[]");
    carrito.push(productId);
    localStorage.setItem("productosCarrito", JSON.stringify(carrito));
    
    console.log("ID guardado:", productId);
    console.log(carrito)
  }
});


//El filtro segun la categoria

btn_camisetas.addEventListener('click', loadShirts);
btn_chaquetas.addEventListener('click', loadJackets);
btn_gorras.addEventListener('click', loadCaps);
btn_legos.addEventListener('click', loadLegos);
btn_souvenirs.addEventListener('click', loadSouvenirs);
btn_agregar_carrito.addEventListener('click', getProductId)
btn_agregar_carrito.addEventListener('click', querySelector)