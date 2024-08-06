let ajoutTache = document.getElementById("monBouton");
let tacheList =  document.getElementById("maListe");

ajoutTache.addEventListener("click", function() {
    // Récupérer la valeur du champ de texte
    let taskInput = document.getElementById("entrerTache");
    let taskText = taskInput.value;

    // Vérifier si la tâche n'est pas vide
    if (taskText !== "") {
        // Créer un nouvel élément de liste
        let li = document.createElement("li");
        li.textContent = taskText;

         // Ajouter l'élément de liste à la liste des tâches
         tacheList.appendChild(li);

          // Vider le champ de texte
        taskInput.value = "";

        // Ajouter un écouteur d'événement pour supprimer la tâche en cliquant dessus
        li.addEventListener("click", function() {
            this.parentNode.removeChild(this);
        });   
    }
});

// Permet d'ajouter une tâche en appuyant sur la touche "Enter"
document.getElementById("entrerTache").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("monBouton").click();
    }
});

