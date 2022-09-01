let userM = document.getElementById('userSet');

document.addEventListener("DOMContentLoaded", function(){

    let emailCorrecto = localStorage.getItem("email"); // CONSIGNA 1 ENTREGA 2
    userM.innerHTML += `
    <a class="nav-link active" href="my-profile.html">${emailCorrecto}</a>    
    `
    console.log(emailCorrecto)

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
