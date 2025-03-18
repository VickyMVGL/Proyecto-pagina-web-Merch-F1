
async function loadProduct() {
    try {
      // Obtener el ID de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
  
      // Hacer fetch al endpoint correcto (usando el ID)
      const response = await fetch(`http://localhost:5555/keys/${productId}`); // <- Usar el ID
      if (!response.ok) throw new Error("Producto no encontrado");
  
      const product = await response.json(); // <- Obtener UN producto, no un array
      const catalog = document.getElementById('container-producto');
      catalog.innerHTML = create_product_page(product); // <- Pasar el objeto product, no souvenirs
    } catch (error) {
      console.error("Error:", error);
      catalog.innerHTML = "<p>Producto no encontrado</p>";
    }
  }
  
  
  function create_product_page(product) {
    return `
    <div class="img-producto">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="info-producto">
      <h2>${product.name}</h2>
      <p>Equipo: ${product.exposor}</p>
      <p>${product.description}</p>
      <p>$ ${product.description}</p>
      <button class="btn-comprar">Comprar</button>
    </div>
    `;
  }