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

        // Créer une case à cocher
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Créer une icône de poubelle
        var deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = "<i class='fa-solid fa-trash'></i>";
        deleteIcon.classList.add("delete-icon");

        // Ajouter un écouteur d'événement pour supprimer la tâche en cliquant sur l'icône de poubelle
        deleteIcon.addEventListener("click", function() {
        li.parentNode.removeChild(li);
        });

        // Ajouter les éléments créés à l'élément de liste
        li.appendChild(checkbox);
        li.appendChild(deleteIcon);
        
        // Vider le champ de texte
          taskInput.value = "";
      
          
    }
});

// Permet d'ajouter une tâche en appuyant sur la touche "Enter"
document.getElementById("entrerTache").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("monBouton").click();
    }
});

//  créer un champ de texte qui change lorsqu'il reçoit le focus:
document.getElementById("entrerTache").addEventListener("focus", function() {
    this.classList.add("yellow");
    this.style.color = "red"
});




