
let inputs = document.querySelectorAll(".control");
let value = false;
let mostrarAlerta = document.querySelector(".form-alert");
let mostrarAlerta1 = document.querySelector(".form-alert1");

 

mostrarAlerta.style.display="none";
mostrarAlerta1.style.display="none";


function buena(){
for (let input of inputs){
if(input.value.length !=0) {
value = true;
} else {
value = false;
}
}
return value;
};

let eemail = document.getElementById("email");

btn.addEventListener("click", () => {
if(buena()){
    window.location.replace("principal.html")
} else {
    mostrarAlerta.style.display="block";
mostrarAlerta1.style.display="block";
};
localStorage.setItem("email",eemail.value);
});


