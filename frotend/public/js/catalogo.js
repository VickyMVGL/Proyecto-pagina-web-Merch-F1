// botones de los filtros
const btn_camisetas = document.getElementById('filtro_camisetas');
const btn_chaquetas = document.getElementById('filtro_chaquetas');
const btn_gorras = document.getElementById('filtro_gorras');
const btn_legos = document.getElementById('filtro_legos');
const btn_souvenirs = document.getElementById('filtro_souvenirs');
const btn_agregar_carrito = document.getElementById('btn_ver_producto');
let productos_formula = []
let carrito = []
let cuenta = 0;

async function loadShirts() {
  try {
      const respuesta = await fetch('http://localhost:2005/shirts');
      if(respuesta.status === 200){
        const camisetas = await respuesta.json();
        let Camisas = '';
        productos_formula = camisetas.map(camisetas => {
          Camisas += `
            <div class="card">
                <img src="${camisetas.image}" alt="">
                <h3>${camisetas.name}</h3>
                <p>${camisetas.price} $</p>
                <button class="btn-comprar">Comprar</button>
            </div>
          `
          return {
              id: camisetas.id,
              name: camisetas.name,
              price: camisetas.price,
              image: camisetas.image
          }
        })
        document.getElementById('catalog').innerHTML = Camisas;
        const buttonComprar = document.querySelectorAll('.btn-comprar');
        buttonComprar.forEach((button, index) => {
          button.addEventListener('click', () => {
              cuenta++;
              const InfoCamisas = {
                id: productos_formula[index].id,
                name: productos_formula[index].name,
                price: productos_formula[index].price,
                image: productos_formula[index].image
              }
              carrito.push(InfoCamisas);
              localStorage.setItem('producto', JSON.stringify(carrito));
              localStorage.setItem('cuenta', cuenta);

          })
        })
      }
  } catch (error) {
    console.error("Error al cargar camisetas:", error);
  }
}

async function loadJackets() {
  try {
    const respuesta = await fetch('http://localhost:7000/jackets');
    if(respuesta.status === 200){
      const chaquetas = await respuesta.json();
      let Chaquetas = '';
      productos_formula = chaquetas.map(chaquetas => {
        Chaquetas += `
          <div class="card">
              <img src="${chaquetas.image}" alt="">
              <h3>${chaquetas.name}</h3>
              <p>${chaquetas.price} $</p>
              <button class="btn-comprar">Comprar</button>
          </div>
        `
        return {
            id: chaquetas.id,
            name: chaquetas.name,
            price: chaquetas.price,
            image: chaquetas.image
        }
      })
      document.getElementById('catalog').innerHTML = Chaquetas;
      const buttonComprar = document.querySelectorAll('.btn-comprar');
      buttonComprar.forEach((button, index) => {
        button.addEventListener('click', () => {
            cuenta++;
            const InfoChaquetas = {
              id: productos_formula[index].id,
              name: productos_formula[index].name,
              price: productos_formula[index].price,
              image: productos_formula[index].image
            }
            
            carrito.push(InfoChaquetas);
            localStorage.setItem('producto', JSON.stringify(carrito));  
            localStorage.setItem('cuenta', cuenta);
        })
      })
    }
  } 
  catch (error) {
    console.error("Error al cargar chaquetas:", error);
  }
}

async function loadCaps() {
  try {
    const respuesta = await fetch('http://localhost:8585/caps');
    if(respuesta.status === 200){
      const gorras = await respuesta.json();
      let Gorras = '';
      productos_formula = gorras.map(gorras => {
        Gorras += `
          <div class="card">
              <img src="${gorras.image}" alt="">
              <h3>${gorras.name}</h3>
              <p>${gorras.price} $</p>
              <button class="btn-comprar">Comprar</button>
          </div>
        `
        return {
            id: gorras.id,
            name: gorras.name,
            price: gorras.price,
            image: gorras.image
        }
      })
      document.getElementById('catalog').innerHTML = Gorras;
      const buttonComprar = document.querySelectorAll('.btn-comprar');
      buttonComprar.forEach((button, index) => {
        button.addEventListener('click', () => {
            cuenta++;
            const InfoGorras = {
              id: productos_formula[index].id,
              name: productos_formula[index].name,
              price: productos_formula[index].price,
              image: productos_formula[index].image
            }
            carrito.push(InfoGorras);
            localStorage.setItem('producto', JSON.stringify(carrito));
            localStorage.setItem('cuenta', cuenta);
        })
      })
    }
  } 
  catch (error) {
    console.error("Error al cargar gorras:", error);
  }
}

async function loadLegos() {
  try {
    const respuesta = await fetch('http://localhost:9595/legos');
    if(respuesta.status === 200){
      const legos = await respuesta.json();
      let Legos = '';
      productos_formula = legos.forEach(legos => {
        Legos += `
          <div class="card">
              <img src="${legos.image}" alt="">
              <h3>${legos.name}</h3>
              <p>${legos.price} $</p>
              <button class="btn-comprar">Comprar</button>
          </div>
        `
        return {
            id: legos.id,
            name: legos.name,
            price: legos.price,
            image: legos.image
        }
      })
      document.getElementById('catalog').innerHTML = Legos;
      const buttonComprar = document.querySelectorAll('.btn-comprar');
      buttonComprar.forEach((button, index) => {
        button.addEventListener('click', () => {
            cuenta++;
            const LegosInfo = {
              id: productos_formula[index].id,
              name: productos_formula[index].name,
              price: productos_formula[index].price,
              image: productos_formula[index].image
            }
            
            carrito.push(LegosInfo);
            localStorage.setItem('producto', JSON.stringify(carrito));
            localStorage.setItem('cuenta', cuenta);
        })
      })
    }
  } 
  catch (error) {
    console.error("Error al cargar legos:", error);
  }
}

async function loadKeys() {
  try {
    const respuesta = await fetch('http://localhost:5555/keys');
    if(respuesta.status === 200){
      const llaveros = await respuesta.json();
      let Llaveros = '';
      productos_formula = llaveros.map(llaveros => {
        Llaveros += `
          <div class="card">
              <img src="${llaveros.image}" alt="">
              <h3>${llaveros.name}</h3>
              <p>${llaveros.price} $</p>
              <button class="btn-comprar">Comprar</button>
          </div>
        `
        return {
            id: llaveros.id,
            name: llaveros.name,
            price: llaveros.price,
            image: llaveros.image
        }
      })
      document.getElementById('catalog').innerHTML = Llaveros;
      const buttonComprar = document.querySelectorAll('.btn-comprar');
      buttonComprar.forEach((button, index) => {
        button.addEventListener('click', () => {
            cuenta++;
            const InfoLlaveros = {
              id: productos_formula[index].id,
              name: productos_formula[index].name,
              price: productos_formula[index].price,
              image: productos_formula[index].image
            }
            carrito.push(InfoLlaveros);
            localStorage.setItem('producto', JSON.stringify(carrito));
            localStorage.setItem('cuenta', cuenta);
        })
      })
    }
  } 
  catch (error) {
    console.error("Error al cargar souvenirs:", error);
  }
}
async function loadALL(){
  try{
    const respuesta = await fetch('http://localhost:1000/products');
    if(respuesta.status === 200){
      const productos = await respuesta.json();
      let Productos = '';
      productos_formula = productos.map((productos,index) => {
        Productos += `
          <div class="card" data-index="${index}">
              <img src="${productos.image}" alt="">
              <h3>${productos.name}</h3>
              <p>${productos.price} $</p>
              <button class="btn-comprar">Comprar</button>
          </div>
        `
        return {
            id: productos.id,
            name: productos.name,
            price: productos.price,
            image: productos.image
        }
      })
      
      document.getElementById('catalog').innerHTML = Productos;
      const buttonComprar = document.querySelectorAll('.btn-comprar');
      buttonComprar.forEach((button, index) => {
        button.addEventListener('click', () => {
          cuenta++;
          const info = {
            id: productos_formula[index].id,
            name: productos_formula[index].name,
            price: productos_formula[index].price,
            image: productos_formula[index].image
          }
          carrito.push(info);
          localStorage.setItem('producto', JSON.stringify(carrito));
          localStorage.setItem('cuenta', cuenta);
        })
      })

    }
  }
  catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

//El filtro segun la categoria
btn_camisetas.addEventListener('click', loadShirts);
btn_chaquetas.addEventListener('click', loadJackets);
btn_gorras.addEventListener('click', loadCaps);
btn_legos.addEventListener('click', loadLegos);
btn_souvenirs.addEventListener('click', loadKeys);

loadALL();
