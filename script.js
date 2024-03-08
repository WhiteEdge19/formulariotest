let p1 = document.getElementById("pass1");
let cpassword = document.getElementById("c-pass");
let validarPass = document.querySelector(".errorp");
let formulario = document.querySelector(".caja-form");

const testPass = () =>{
    setTimeout(50)
    if (p1.value === cpassword.value){
        validarPass.innerText = "Conforme";
        validarPass.style.color='green';
    }
    else{
        validarPass.innerText = "Denegado";
        validarPass.style.color='red';
    }
    
}


p1.addEventListener('keyup', testPass);
cpassword.addEventListener('keyup',testPass);