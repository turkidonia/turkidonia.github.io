var compteur = document.getElementById("compteur");
var bouton = document.getElementById("btn");
var boutonm = document.getElementById("btn-");
var nombre = 0;

bouton.addEventListener('click', ajouter);
function ajouter() {
    nombre = nombre + 1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == 10) {
        compteur.style.color = "red";
        compteur.style.fontSize = "50px";
        
    }
   

}
boutonm.addEventListener('click', soustraire);
function soustraire() {
    nombre = nombre - 1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == -10) {
        compteur.style.color = "green";
        compteur.style.fontSize = "50px";
    }
}

function myFunction() {
    var element = document.getElementById("compteur");
    element.classList.toggle("dark");
  }
