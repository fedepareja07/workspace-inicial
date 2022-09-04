
const url =  `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;


const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_PROD_COST = "Precio";

let productsArray = [];
let currentSortCo = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortCategories(co, array){
    let result = [];
    if (co === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (C === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (co === ORDER_BY_PROD_COST){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}
function traerProductos(){

    let htmlContentToAppend = "";
    for (let elemento of productsArray){
    
        let buscarProductos = document.getElementById("searchShow").value.toLowerCase(); 
   
        if (((minCount == undefined) || (minCount != undefined && parseInt(elemento.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(elemento.cost) <= maxCount)) && 
            (
            (elemento.name.toLowerCase().includes(buscarProductos)) || (elemento.description.toLowerCase().includes(buscarProductos)))){
 
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${elemento.image}" alt="${elemento.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${elemento.name} - ${elemento.currency} ${elemento.cost}</h4>
                        <small class="text-muted">${elemento.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${elemento.description}</p>
                </div>
            </div>
        </div>
        `
            }
            
            document.getElementById("prod-container").innerHTML = htmlContentToAppend;
    }

}

function mostrarProductosSort(sortCo, productosArray){
    currentSortCo = sortCo;

    if(productosArray != undefined){
        productsArray = productosArray;
    }

    productsArray = sortCategories(currentSortCo, productsArray);


    traerProductos();
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then(function(result){
        if (result.status === "ok"){
            mostrarProductosSort(ORDER_ASC_BY_COST, result.data.products);
        } 
    });// Automáticamente se muestra por orden de menor a mayor

    document.getElementById("sortAsc").addEventListener("click", function(){
        mostrarProductosSort(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        mostrarProductosSort(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        mostrarProductosSort(ORDER_BY_PROD_COST);
    });
});
   
    // });// Automáticamente se muestra por orden de menor a mayor


    document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    traerProductos();
});



document.getElementById("rangeFilterCount").addEventListener("click", function(){

    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    traerProductos();
});

