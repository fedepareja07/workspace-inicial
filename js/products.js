async function datos() {
   let traerDatos = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
   let traidos = await traerDatos.json();

   let traerListado = document.getElementById('autos')
   for (let elemento of traidos.products) {
      traerListado.innerHTML +=`
      <link href="css/styles.css" rel="stylesheet">
      <div class="coches">
      <img src="${elemento.image}" class="autos" >
      <h4 class="titulo"> ${elemento.name} ${elemento.currency}  ${elemento.cost}" </h4>
      <p class="descripcion"> ${elemento.description}</p>
      <p class="vendidos"> ${elemento.soldCount} Vendidos</p>
      
    </div>
      `
   }
}
datos();
/*

function mostrar(traidos.products){
for (let elemento of traidos.products){
   jsoN.innerHTML +=
   `<div class="row">
    <div class="list-group">
     <div class="list-group-item list-group-item-action cursor-active">
     <div class="row">
       <div class="col-3">
        <img class="img-thumbnail" src="${dat.image}">
        </div>
        <div class="col">
        <div class="d-felx w100 justify-content-between">
           <h4 class="text-muted"> ${dat.name, dat.currency,dat.cost}</h4>
           <small class="text-muted">${dat.soldCount}</small>
           </div>
           <p class="mb-1">${dat.description}</p>
           </div>
           </div>
           </div>
           </div>
           </div>
`
}
}
*/
