// -------------------------------------------------------------------------------------------------------------------------------------- //
// Les fonctions sont réutilisables partout dans le code, elles seront éxecutées chaque fois qu'on fera appel à elles.
function reusableFunction() { // On peut rentrer des paramètres dans les ()
    console.log("Heyya, World");
}

reusableFunction();
reusableFunction(); // Chaque fois que l'on fera appel à la fonction, le code l'executera. 
// Ici, on aura donc "Heyya, World" qui s'affichera dans la console 2 fois

// Entrer des paramètres entre les () de la fonction
function functionWithParameters(a, b) { // Donne des valeurs non définie à la fonction
    console.log(a, " - ", b, " = ", a - b); // Indique comment agiront les valeurs non définies
    console.log (a, " + ", b, " = ", a + b,"\n");
}

functionWithParameters(10, 5); // Execute la fonction tout en lui definissant une valeur
functionWithParameters(40, 20);
functionWithParameters(100, 50);

// -------------------------------------------------------------------------------------------------------------------------------------- //

/* Scope    ****************************************************************************************************************************************
Le scope determine si une variable sera utilisable dans tout le code ou seulement dans la fonction dans laquelle elle a été écrite.
Une variable peut être déclarée dans une fonction mais dès lors, elle devient globale
Une variable déclarée hors d'une fonction : globale
Une variable déclarée dans une fonction sans var : globale
Une variable déclarée dans une fonction avec var: utilisable uniquement dans cette fonction
Exemple : */ 

// Local scopes and functions : Lié    *************************************************************************************************************
function myLocalScope() {
    var myVar= 5;
    console.log(myVar); // Nous donne la variable liée à la fonction car la commande est dans la fonction
}
myLocalScope();
console.log(myVar) // Nous donne un message d'erreur car la commande est hors de la fonction et on demande quelque chose lié à la fonction (var)

// Local scopes and functions : Global   ************************************************************************************************************
function myLocalScope() {
    myVar= 5;
    console.log(myVar); // Nous donne la variable 
}
myLocalScope();
console.log(myVar) // Nous donne également la variable car celle ci est globale bien que dans une fonction (il n'y a pas var devant la variable)


// Exemple avancé :  *********************************************************************************************************************************
var myGlobal = 10; // Utilisable dans n'importe quelle fonction du code

function fun1() {
     oopsGlobal = 5; // Utilisable dans n'importe quelle fonction du code 
     var oopsLinked = 10; // Utilisable uniquement dans cette fonction
}
function fun2()
{
    var output = "";
    if (typeof myGlobal != "undefined") 
    {
        output += "myGlobal: " + myGlobal; // Donne le résultat de myGlobal si elle n'est pas égale à undefined
    }
    else 
    {
        output = "myGlobal is undefined"; // Sinon (si elle est égale à undefined) indique : "myGlobal is undefined"
    }
    console.log(output)
}
function fun3()
{
    var output = "";
    if (typeof oopsGlobal != "undefined") 
    {
        output += "oopsGlobal: " + oopsGlobal; // Donne le résultat de oopsGlobal si elle n'est pas égale à undefined
    }
    else 
    {
        output = "oopsGlobal is undefined"; // Sinon (si elle est égale à undefined) indique : "oopsGlobal is undefined"
    }
    console.log(output)
}
function fun4() 
{
    var output = "";
    if (typeof oopsLinked != "undefined")
    {
        output += "oopsLinked " + oopsLinked; // Donne le résultat de oopsLinked si elle n'est pas égale à undefined
    }
    else 
    {
        output = "oopsLinked is undefined"; // Sinon (si elle est égale à undefined) indique : "oopsLinked is undefined"
    }
    console.log(output)
}
fun1();
fun2();
fun3();
fun4();

// Il est possible d'avoir une variable globale et une autre liée possédant le meme nom
// Dès lors, la variable liée (locale) prendra la priorité : 
var vetement = "T-shirt";

function monOutfit() {
    var vetement = "Pull";

    return vetement;
}
console.log(monOutfit()); 
console.log(vetement);

// -------------------------------------------------------------------------------------------------------------------------------------- //

// Return *********************************************************************************************************************************
// Renvoie la valeur d'une fonction :
function moinsSept(num) {
    return num - 7
}
console.log(moinsSept(10)); // 10 - 7

function foisCinq(num) {
    return num * 5
}
console.log(foisCinq(10)); // 10 * 5

// Valeur définie / non définie dans une fonction avec Return
var sum = 0;
function addThree() {
    sum += 3; // valeur non définie
} 
console.log(addThree()) // renvoie undefined

var sum = 0;
function addFive() {
    sum += 5;
    return sum; // définie la valer
}
console.log(addFive()) // renvoie la valeur définie

// Assigner une valeur avec return
var changed = 0;

function change(num) {  // valeur à assigner
    return (num + 5) / 3; // (valeur assignée + 5) / 3 
}
changed = change(10); // la variable changed est égale à la fonction + la valeur assignée calculée (10 + 5) / 3 donc 15 / 3 = 5
console.log(changed) 

// Faire une file 
function nextInLine(array, item) {
    array.push(item); // Ajoute 6 à la fin du Array
    return array.shift(); // Renvoie la valeur retirée du Array avec .shift() (ici, 1)
}
var testArray = [1, 2, 3, 4, 5];

console.log("Avant: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("Apres: " + JSON.stringify(testArray));
// -------------------------------------------------------------------------------------------------------------------------------------- //
