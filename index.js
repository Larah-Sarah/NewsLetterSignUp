 
const emailField = document.getElementById("emailfield");
const emailError = document.getElementById("err");
const button = document.getElementById("btn");
const changeMail = document.querySelector("#mail");


function validateEmail(){
  if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "valid email required";
    emailField.style.borderColor = "rgba(216, 42, 42, 0.244)";
    emailField.style.backgroundColor = "#f76a6a49";
    return false;
  }
    
    emailError.innerHTML = "";
    emailField.style.backgroundColor = ""
    document.querySelector('.grid-container').classList.add('hidden');
    document.querySelector('.con-grid-container').classList.remove('hidden');
    emailField.value = changeMail.innerHTML;
    return true;
     
}
