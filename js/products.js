async function datos() {
   let traerDatos = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
   let traidos = await traerDatos.json();

   let traerListado = document.getElementById('autos')
   for (let elemento of traidos.products) {
      traerListado.innerHTML +=`
      <link href="css/styles.css" rel="stylesheet">
      <div class="coches">
      <img src="${elemento.image}" class="autos">
      <h3 class="titulo"> ${elemento.name}" </h3>
      <p class="descripcion"> ${elemento.description}</p>
      <p class="costo"> ${elemento.cost}</p>
    </div>
      `
   }
}
datos();
