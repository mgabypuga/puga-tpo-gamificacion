
/*Mostrar y Ocultar Menú*/
const navToggle = document.querySelector(".nav_toggle") 
const navMenu = document.querySelector(".nav_menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu_visible")
});
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu_visible")
});


/*Animación de la Info*/
var info_elem = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < info_elem.length; i++) {
    info_elem[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}


/*Animación Formulario*/
var form_elem = document.getElementsByClassName("input_form");
var j;

for (var j = 0; j < form_elem.length; j++) {
  form_elem[j].addEventListener("keyup", function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}


/*Validación Formulario*/
function validar(){
  var nombre, apellido, turno, correo;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  turno = document.getElementById("turno").value;
  correo = document.getElementById("correo").value;
  correo = document.getElementById("mensaje").value;
  
  if(nombre === "" || apellido === "" || turno === "" || correo === "" || mensaje === ""){
    alert("Todos los campos son obligatorios");
    return false;
  }  
}
