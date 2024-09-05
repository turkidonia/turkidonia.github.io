
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errorMessages = '';
    try {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const file = document.getElementById('file').files[0];

        if (!name) throw 'Le nom est requis.';
        if (!phone) throw 'Le téléphone est requis.';
        if (!email) throw 'L\'email est requis.';
        if (!message) throw 'Le message est requis.';
        if (file && file.size > 1048576) throw 'Le fichier ne doit pas dépasser 3 Mo.';

        alert('Formulaire soumis avec succès !');
    } catch (error) {
        errorMessages += `<p>${error}</p>`;
    } finally {
        document.getElementById('errorMessages').innerHTML = errorMessages;
    }
});