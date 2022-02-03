// -------------------------------------------------------------------------------------------------------------------------------------- //
//Arrays : Arrays nous permet de stocker plusieurs pièces de données dans un seul endroit
var myArray = ["Adrien", 20]; // Array déterminées par "[]". Utiliser des "," pour séparer les données stockées
var multiArray = [
	["Adrien", 20],
	["Antoine", 22]
]; // Un Array dans un Array, séparés par une ","

var myArray = [50, 75, 100];
var myData = myArray[0]; // 50
console.log(myData, myArray)

// Modifier les Arrays avec des brackets notations
var myArray = [50, 75, 100];
myArray[1] = 25; // myArray est maintenant égal à [50,25,100]
console.log(myArray)

// Utiliser les brackets notations pour sélectionner des éléments dans des Array multidimensionnels
var myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];
var myData = myArray[2][1]; /* Le premier [2] sélectionne le troisième bracket dans le Array ([7,8,9]),
                               le second [1] sélectionne le deuxième élement dans ce bracket (8) */
console.log(myData);

// push() - Ajouter des éléments à la fin d'un Array - Ajoute à la fin
var myArray = ["Daisy", "le", "chat"];
myArray.push(["est", "content"]); // myArray vaut maintenant ["Daisy", "le", "chat", ["est", "content"]]
console.log(myArray)

// unshift() - Ajouter des éléments au début d'un Array - Ajoute au premier
var myArray = ["Daisy", "le", "chat"];
myArray.unshift(["est", "content"]); // myArray vaut maintenant [ [ 'est', 'content' ], 'Daisy', 'le', 'chat' ]
console.log(myArray)

// pop() - "Voler" le dernier élément d'un Array - Enleve à la fin
var myArray = [["Adrien", 20], ["daisy", 10]];
var removedFromMyArray = myArray.pop(); // myArray = [["Adrien", 20] | removedFromMyArray= [ 'daisy', 10 ]
console.log(removedFromMyArray)

// shift() - "Voler" le premier élément d'un Array - Ajoute à la fin 
var myArray = [["Adrien", 20], ["daisy", 10]];
var removedFromMyArray = myArray.shift(); // myArray = [ [ 'daisy', 10 ] ] | removedFromMyArray = [ 'Adrien', 20 ]
console.log(myArray)

// Exemple :
var myArray = ["Daisy", "le", "chat"]; // MyArray = Daisy le chat
myArray.shift(); // MyArray = le chat
myArray.unshift("Hades"); // MyArray = Hades le chat
myArray.pop(); // myArray = Hades le 
myArray.push("gourmand"); // myArray = Hades le gourmand
console.log(myArray)
// Shopping list
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]
// -------------------------------------------------------------------------------------------------------------------------------------- //