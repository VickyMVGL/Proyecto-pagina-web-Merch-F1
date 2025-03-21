// Varaibles del localstorage
const carrito = JSON.parse(localStorage.getItem('producto'));
console.log(carrito);
// Variables del DOM
const cuenta_productos = document.getElementById('carrito-contador');
const info_producto = document.getElementById('info-producto-carrito');
const total = document.getElementById('Total');

// Funcion para calcular el total del carrito
function calcularTotalCarrito(carrito){
  let total = 0;
  carrito.forEach(item => {
    total += item.price;
  });
  return total;
}
// Aumentamos la cuenta de los productos en el carrito
function aumentarCuenta(){
  cuenta_productos.innerHTML = carrito.length;
}
// Mostrar la informacion de los productos en el carrito
function mostrarCarrito(carrito){
  let result = calcularTotalCarrito(carrito);
  console.log(result);
  total.innerHTML = `Total: $${result}`;
  // Limpiamos el contenido del carrito
  info_producto.innerHTML = '';
  if(carrito){
    carrito.forEach(item => {
      info_producto.innerHTML += `
        <div class="Content--info">
                <div class="info-producto-carrito" id="info-producto-carrito">
                    <div class="producto-carrito">
                        <div class="img-producto">
                            <img src=${item.image} alt="">
                        </div>
                        <div class="info-producto">
                            <h3>${item.name}</h3>
                            <p>${item.price} $</p>
                        </div>
                    </div>
                    <div class="eliminar-producto">
                        <button class="btn-comprar">Eliminar</button>
                    </div>
                </div>
          </div>
      `
    })
  }
}

mostrarCarrito(carrito);
aumentarCuenta();


