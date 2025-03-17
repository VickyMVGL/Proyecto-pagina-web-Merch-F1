async function loadJackets() {
  try {
    const response = await fetch('../../Chaquetas/MVC/Routers/jacket.mjs');
    const jackets = await response.json();

    const catalog = document.getElementById('catalog');
    catalog.innerHTML = jackets.map(jacket => createCard(jacket)).join('');
  } catch (error) {
    console.error("Error al cargar chaquetas:", error);
  }
}

// Componente Card (HTML dinámico)
function createCard(jacket) {
  return `
    <div class="card">
      <img src="${jacket.image}" alt="${jacket.name}">
      <h3>${jacket.name}</h3>
      <p>Precio: $${jacket.price}</p>
    </div>
  `;
}
// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', loadJackets);