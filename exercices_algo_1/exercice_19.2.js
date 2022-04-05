/*
DÉTERMINER LA CLASSE D'ÂGE
A partir des données fournies par l'utilisateur,
vous devez afficher la classe d'âge en suivant les règles ci-dessous :

- nourrisson  : 1 an
- enfant      : 2 à 10 ans
- adolescent : 11 à 19 ans
- adulte      : 20 à 65 ans
- senior      : 66 ans et plus

ATTENTION:
- Ce code nécessite le package 'prompts'
- Vous devez placer votre code à l'endroit indiqué
*/

const prompts = require('prompts');

(async function() {
	const response = await prompts({
		type: 'number',
		name: 'value',
		message: 'How old are you?'
	});

	const age = response.value;

	// ----- Votre code ici -----

let age_class = '';

	if (age <= 1) {
		age_class = "Nourrisson";
	} else if (age <= 10) {
		age_class = "enfant";
	} else if (age <= 19) {
		age_class = "adolescent";
	} else if (age <= 65) {
		age_class = "adulte";
	} else if (age >= 66) {
		age_class = "senior";
	}

console.log(age_class);
	// --------------------------
})();
