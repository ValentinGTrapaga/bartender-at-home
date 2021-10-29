"use strict";

function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    alert("El nombre no puede estar vacio.");
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    alert("El email no puede estar vacio.");
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        alert("Email invalido.");
      return false;
    }
  }
  var subject = document.getElementById("subject").value;
  if (subject == "") {
    alert("El motivo no puede estar vacio.");
    return false;
  }
  var message = document.getElementById("comment").value;
  if (message == "") {
    alert("El mensaje no puede estar vacio.");
    return false;
  }
  alert("El mensaje fue exitosamente enviado.");
}
