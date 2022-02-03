// -------------------------------------------------------------------------------------------------------------------------------------- //
/* Les chaines de caractères (strings) */

var myString = "Ceci est un texte qui comporte plusieurs "guillemets" mais le code ne le "comprend pas"";
console.log(myString)
/* La console affiche un message d'erreur car pour le code, les guillemets marquent la fin du string, pour pallier ce soucis il faut utiliser un 
caractère d'échappement devant les guillemets : \                                                                       */

var myString = "Ceci est un texte qui comporte plusieurs \"guillemets\" mais le code ne le \"comprend pas\"";
console.log(myString)

// Une métode plus facile : commencer son string avec des back tics(` `) au lieu de single quote(' ') ou double quotes(" ") :
var myString = `'Ceci est un texte qui comporte plusieurs "guillemets" mais le code ne le "comprend pas"'`;
console.log(myString)

// -------------------------------------------------------------------------------------------------------------------------------------- //

/* Caractères qui peuvent être échappés avec \ : 
\' - single quote
\" - double quote
\\ - backslash
\n - newline
\r - carriage return
\t - tab
\b - backspace
\f - form feed
*/
var myString = "FirstLine\n\t\\SecondLine\n\rFourthLine";
console.log(myString)

var ourString = "I come first. ";
ourString += "I come second.\n";
var myString = "This is the start. " + "This is the end.";
console.log(ourString, myString)

// -------------------------------------------------------------------------------------------------------------------------------------- //

// Inclure une variable dans une autre : 
var monNom = "Comblez";
var monPrenom = "Adrien ";
var afficheur = "Bonjour, je m'appelle " + monPrenom + monNom + ".";
console.log(afficheur) // Bonjour, je m'appelle Adrien Comblez.

var monNom = "Comblez";
var monPrenom = "Adrien ";
monPrenom += monNom 
var afficheur = "Bonjour, je m'appelle " + monPrenom + ".";
console.log(afficheur) // Bonjour, je m'appelle Adrien Comblez.

var monNom = "Comblez";
var monPrenom = "Adrien ";
var nom = monPrenom + monNom; 
var afficheur = "Bonjour, je m'appelle " + nom + ".";
console.log(afficheur) // Bonjour, je m'appelle Adrien Comblez.

// -------------------------------------------------------------------------------------------------------------------------------------- //

// Trouver la longueur d'une chaîne de caractères : (length)
var firstNameLenght = 0;
var firstName = "Adrien";

firstNameLenght = firstName.length;
var afficheur = "Le nom " + firstName + " comporte " + firstNameLenght + " caractères.";
console.log(afficheur) // Le nom Adrien comporte 6 caractères.

// Trouver le caractère qui correspond à la 3ème lettre d'un mot : (Bracket Notation)
var thirdLetterOfFirstName = "";
var firstName = "Adrien";

thirdLetterOfFirstName = firstName[2]; // L'ordinateur compte le premier caractère à 0, donc 0 = 1 | 1 = 2 | 2 = 3 . . .
var afficheur = "La 3eme lettre du nom " + firstName + " est : " + thirdLetterOfFirstName;
console.log(afficheur)

// Trouver les deux dernières lettres d'une chaine de caractères : 
var firstName = "Adrien";
var lastLetterOfFirstName = firstName[firstName.length - 1]; // -1 car l'ordinateur commence à compter à 0 et non 1
var afficheur =  "Les deux dernieres lettres du nom " + firstName + " sont : " + firstName[firstName.length - 2] + lastLetterOfFirstName;
console.log(afficheur)

// -------------------------------------------------------------------------------------------------------------------------------------- //

// Génerer des phrases avec quelques éléments modifiables : 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}
// Changer les mots ici pour avoir une phrase différente 
console.log(wordBlanks("dog", "healthy", "ran", "quickly"));
console.log(wordBlanks("american", "fat", "walked", "slowly"));
// -------------------------------------------------------------------------------------------------------------------------------------- //