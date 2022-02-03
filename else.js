// -------------------------------------------------------------------------------------------------------------------------------------- //
// Else statement : Execute un segment de code alternatif si le premier n'est pas vrai
function testElse(val) {
    var result = "";

    if (val == 5) {
        result = "Equals 5";
    } else {
        result = "Do not equal 5";        
    }
    return result;
}
console.log(testElse(5));

// Else if statement : 
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5 ) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(11));
// Ordres logiques pour Else if

// Cet exemple est considéré comme incorrect, si la valeur est < à 10, la console affichera "Smaller than 10" mais si elle est inférieure à 5, elle affichera encore
// "Smaller than 10" alors qu'on voudrait qu'elle affiche "Smaller than 5".
function wrongOrderElseIf(val) {
    if (val < 10) {
        return "Smaller than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(wrongOrderElseIf(4));
// En mettant la déclaration < 5 avant < 10, elle aura la priorité dans le code, ainsi le code affichera "Smaller than 5" quand ça sera plus petit que 5, et non
// "Smaller than 10"
function rightOrderElseIf(val) {
    if (val < 5) {
        return "Smaller than 5";
    } else if (val < 10) {
        return "Smaller than 10";
    } else {
        return "Between 5 and 10";
    }
}
console.log(rightOrderElseIf(4));

// Enchaîner les déclarations Else 
/*
Write chained if/else if statements to fulfill the following conditions : 

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/
function chainedIfElse(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(chainedIfElse(4));
console.log(chainedIfElse(9));
console.log(chainedIfElse(14));
console.log(chainedIfElse(19));
console.log(chainedIfElse(20));
