function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validation(){
    let name = document.getElementById("nombre").value;
    let lastName = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    let check = document.getElementById("terminos").checked;
    if (name.length != 0 && lastName.length != 0 && email.length != 0 && pass1.length >= 6 && pass1 == pass2 && check){
        return true;
    } else{
        return false;
    }
};
let regBtn = document.getElementById("regBtn");
regBtn.addEventListener("click", () => { 
    document.getElementById("alert-danger").classList.remove("show");
    if (validation()){
        showAlertSuccess();
    } else{
        showAlertError();
    }
});