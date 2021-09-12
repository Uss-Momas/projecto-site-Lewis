const campo_email = document.querySelector('input#input-email')
//console.log(campo_email.value.length);
//console.log("Ola mundo!")
const campo_password = document.querySelector('input#input-password')
document.querySelector("form#form-login").addEventListener("submit", event => {
  if (campo_email.value.length == 0) {
    event.preventDefault();
    alert("Campo do email nao pode estar vazio!")
  }
})