
// Carrito.js - Clase principal
class Carrito {
    constructor() {
        // Escuchar eventos personalizados
        document.addEventListener('add-to-cart', (e) => {
          this.agregarProducto(e.detail);
        });
      }
  
    // Método para obtener el carrito desde LocalStorage
    obtenerCarrito() {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    }
  
    // Método para guardar el estado actual del carrito
    guardarCarrito() {
      localStorage.setItem(this.key, JSON.stringify(this.items));
    }
  
    // Método para agregar productos
    agregarProducto(producto) {
      const itemExistente = this.items.find(item => item.id === producto.id);
      
      if(itemExistente) {
        itemExistente.cantidad++;
      } else {
        this.items.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: 1
        });
      }
      
      this.guardarCarrito();
      this.actualizarUI();
    }
  
    // Método para eliminar productos
    eliminarProducto(id) {
      this.items = this.items.filter(item => item.id !== id);
      this.guardarCarrito();
      this.actualizarUI();
    }
  
    // Método para actualizar cantidades
    actualizarCantidad(id, nuevaCantidad) {
      const item = this.items.find(item => item.id === id);
      if(item) {
        item.cantidad = Math.max(1, nuevaCantidad);
        this.guardarCarrito();
        this.actualizarUI();
      }
    }
  
    // Método para calcular el total
    calcularTotal() {
      return this.items.reduce((total, item) => {
        return total + (item.precio * item.cantidad);
      }, 0);
    }
  
    // Método para actualizar la interfaz
    actualizarUI() {
      const contador = document.getElementById('carrito-contador');
      const lista = document.getElementById('carrito-lista');
      const total = document.getElementById('carrito-total');
      
      // Actualizar contador
      if(contador) {
        contador.textContent = this.items.reduce((sum, item) => sum + item.cantidad, 0);
      }
      
      // Actualizar lista de productos
      if(lista) {
        lista.innerHTML = this.items.map(item => `
          <div class="carrito-item" data-id="${item.id}">
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="info">
              <h4>${item.nombre}</h4>
              <div class="controles">
                <input type="number" 
                       value="${item.cantidad}" 
                       min="1" 
                       class="cantidad-input">
                <button class="eliminar-btn">Eliminar</button>
              </div>
              <p class="subtotal">$${(item.precio * item.cantidad).toFixed(2)}</p>
            </div>
          </div>
        `).join('');
      }
      
      // Actualizar total
      if(total) {
        total.textContent = `Total: $${this.calcularTotal().toFixed(2)}`;
      }
    }
  
    // Método para inicializar eventos
    inicializarEventos() {
      // Eventos delegados para toda la aplicación
      document.addEventListener('click', (e) => {
        // Agregar al carrito
        if(e.target.classList.contains('agregar-carrito-btn')) {
          const producto = {
            id: e.target.dataset.id,
            nombre: e.target.dataset.nombre,
            precio: parseFloat(e.target.dataset.precio),
            imagen: e.target.dataset.imagen
          };
          this.agregarProducto(producto);
        }
        
        // Eliminar del carrito
        if(e.target.classList.contains('eliminar-btn')) {
          const id = e.target.closest('.carrito-item').dataset.id;
          this.eliminarProducto(id);
        }
      });
      
      // Eventos para actualizar cantidades
      document.addEventListener('input', (e) => {
        if(e.target.classList.contains('cantidad-input')) {
          const id = e.target.closest('.carrito-item').dataset.id;
          const nuevaCantidad = parseInt(e.target.value);
          this.actualizarCantidad(id, nuevaCantidad);
        }
      });
    }
  }
  
// Uso en la aplicación
const carrito = new Carrito();

// Ejemplo de productos en el catálogo
document.querySelector('.catalogo').innerHTML = `
<div class="producto">
    <h3>Camiseta</h3>
    <p>$25.00</p>
    <button class="agregar-carrito-btn" 
            data-id="1" 
            data-nombre="Camiseta" 
            data-precio="25" 
            data-imagen="camiseta.jpg">
    Agregar al carrito
    </button>
</div>
<div class="producto">
    <h3>Pantalón</h3>
    <p>$45.00</p>
    <button class="agregar-carrito-btn" 
            data-id="2" 
            data-nombre="Pantalón" 
            data-precio="45" 
            data-imagen="pantalon.jpg">
    Agregar al carrito
    </button>
</div>
`;