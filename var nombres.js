// -------------------------------------------------------------------------------------------------------------------------------------- //
/* LES NOMBRES 

var utilisatble dans tout le programme / let utilisable seulement dans la zone ou on la declare / const une varible qui ne changera jamais */
var myName = "Adrien";
myName = 8;

let ourName = "Adrien";

const pi = 3.14;

// -------------------------------------------------------------------------------------------------------------------------------------- //

var a; // variable déclarée
var b = 2; // variable déclarée et assignée (b = 2)
console.log(a); // nous indique que la variable a est égale à null

a = 7;
b = a; // le contenu de a est assigné à b (b = 7)

console.log(a); // nous indique que la variable a est égale à 7, c'est utile pour checker les variables au fil du programme

// -------------------------------------------------------------------------------------------------------------------------------------- //

var a = 5;
var b = 10;
var c = "I am a";
var d = 10 + 10;
var e = 10 - 5;
var f = 10 * 10;
var g = 10 / 10;

a = a + 1; // a+ = 1;
b = b - 5; // b- = 5;
c = c + " String!"; // c+ = " String!";
d = d * 10; // d *= 10;
e = e / 2; // e /= 2;
console.log(a, b, c, d, e, f, g);

// -------------------------------------------------------------------------------------------------------------------------------------- //

var tuToRIEldeCODe; // Les majuscules/minuscules sont importantes à respecter
TUTORIELDECODE = 10;
console.log(tuToRIEldeCODe); // null

// La règle : le premier mot est toujours en minuscule et les mots qui suivent auront une majusucle
var tutorielDeCode;

tutorielDeCode = 10;
console.log(tutorielDeCode);

var remainder;
remainder = 11 % 3; // Cherche à diviser le nombre 11 par 3 et calcule les restes, ici 11 - 9 = 2
console.log(remainder);

// utiliser .toLowerCase() pour ignorer les majuscules/minuscules (quand on veut récuperer du texte, pas dans le code)
// -------------------------------------------------------------------------------------------------------------------------------------- //