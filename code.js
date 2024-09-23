let n;

        // Demander à l'utilisateur de saisir un nombre entier
        do {
            n = prompt("Veuillez saisir un nombre entier pour afficher la table de multiplication :");
            // Vérification si la saisie est un entier
            if (n === null) {
                break; // Annuler
            }
            n = parseInt(n);
        } while (isNaN(n) || n <= 0); // Redemander tant que la valeur n'est pas valide

        if (n !== null) {
            // Création du tableau HTML
            let table = "<table><tr><th>Multiplicande</th><th>Résultat</th></tr>";

            // Boucle pour les multiplicateurs de 1 à 10
            for (let i = 1; i <= 10; i++) {
                table += `<tr><td>${n} x ${i}</td><td>${n * i}</td></tr>`;
            }

            table += "</table>";

            // Affichage du tableau dans le document
            document.body.innerHTML += table;
        }