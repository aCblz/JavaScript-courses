// -------------------------------------------------------------------------------------------------------------------------------------- //
// LES OPPERATEURS : Boléens : true false / Egalité : == / Strictement Egal : === / Inégalité : != / Strictement Inégal : !== / Plus grand que : > 
// Plus petit que : < / Oppérateur logique "And", "Et" : && / Oppérateur logique "Or", "Ou" : || /  
// Les oppérateurs booléens ( booleans )
// true : on
// false : off
function welcomeToBooleans() {
    return true; 
}

// Vrai ou faux avec If
function vraiOuFaux(isItTrue) { 
    if (isItTrue) { // oppérateur booléen = true, renvoie : 
        return "Yes, it's true";
    }
    return "No, it's false";  // sinon, si l'oppérateur booléen = faux, renvoie :
}
console.log(vraiOuFaux(true)); // vraiOuFaux = true 
console.log(vraiOuFaux(false)); // vraiOuFaux = false

// == EQUAL (attention, 1 seul signe "=" équivaut à ASSIGNER une valeur, pour vérifier qu'une valeur est EGALE il faut l'oppérateur "==".)
// 3 == 3 : vrai
// 3 == '3' : vrai
// === STRICT EQUAL 
// Plus strict que ==, il faut que ca soit parfaitement égal, il ne fait pas de conversion, par exemple
// 3 === 3 : vrai
// 3 === '3' : faux
function testEqual(val) {
    if (val == 12) { // Si la valeur assignée à val est égale à 12, la fonction testEqual retournera Equal
        return "Equal";
    }
    return "Not Equal"; // Sinon, elle retournera Not Equal
}
function strictEqual(val) {
    if (val === 12) { 
        return "Equal";
    }
    return "Not Equal"; 
}
function comparaison(a, b){
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual('12'));
console.log(strictEqual('12'));
console.log(comparaison(12, "12"));

// != INEQUALITY OPPERATOR
// Verifie que la valeur n'est pas égale à 
function testNotEqual(val) {
    if (val != 99) { // Verifie que la valeur entrée n'est pas égale à 99
        return "Not Equal"; // Si non égale, renvoie :
    }
    return "Equal";
}
console.log(testNotEqual(10));
// !== STRICTEMENT INEGAL
// Meme principe que pour strictement égal

// > PLUS GRAND QUE 
function testGreaterThan(val) {
    if (val > 100) { // Si la valeur est supérieure à 100, renvoie Over 100
        return "Over 100";
    }
    if (val > 10) { // Si la valeur est supérieure à 10, renvoie Over 10
        return "Over 10";
    }
    return "10 or under"; // Si la valeur est 10 ou inférieure à 10, renvoie 10 or under
}
console.log(testGreaterThan(100));
// >= PLUS GRAND QUE OU EGAL 
function testGreaterThan(val) {
    if (val >= 100) { // Si la valeur est supérieure ou égale à 100, renvoie Over 100
        return "Over or equal 100";
    }
    if (val >= 10) { // Si la valeur est supérieure ou égale à 10, renvoie Over 10
        return "Over or equal 10";
    }
    return "under 10"; // Si la valeur est inférieure à 10, renvoie "under 10"
}
console.log(testGreaterThan(100));
// < PLUS PETIT QUE 
 // <= PLUS PETIT OU EGAL
 // Même fonctionnement

 // && Oppérateur logique "And" "Et"
 function testLogicalAnd(val) {
     if (val < 50 && val > 25) { // Si la valeur est inférieure à 50 et supérieure à 25
        return "Inside 24-49";
     }
     return "Outside 24-49"; 
 }
console.log(testLogicalAnd(49));
// || Oppérateur logique "Or" "Ou"
function testLogicalAnd(val) {
    if (val < 50 || val > 25) { // Si la valeur est inférieure à 50 ou supérieur à 25 (c'est forcément oui du coup)
       return "Impossible à expliquer mais j'ai compris";
    }
    return "Toujours imposslbe à expliquer mais j'ai compris"; // Dans tous les cas c'est true, faut pas se casser la tête sur celui-ci
}
console.log(testLogicalAnd(25));
// -------------------------------------------------------------------------------------------------------------------------------------- //