async function datos() {
   let traerDatos = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
   let traidos = await traerDatos.json();

   let traerListado = document.getElementById('autos')
   for (let elemento of traidos.products) {
      traerListado.innerHTML +=`
      <link href="css/styles.css" rel="stylesheet">
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <div class="container">
         <div class="row">
            <div class="list-group">
               <div class="list-group-item list-group-item-action cursor-active">
                     <div class="row">
                        <div class="col-3">
                           <img class="img-thumbnail" src="${elemento.image}">
                        </div>
                           <div class="col">
                              <div class="d-flex w100 justify-content-between">
                                 <h4 class="text-muted"> ${elemento.name} ${elemento.currency}${elemento.cost}</h4>
                                 <small class="text-muted">${elemento.soldCount} vendido</small>
                              </div>
                              <p class="mb-1">${elemento.description}</p>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>      
  
      `
   }
}
datos();