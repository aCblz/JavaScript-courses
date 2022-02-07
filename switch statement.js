function caseInSwitch(val) {
    var answer = "";
    switch(val) { 
        case 1: 
            answer = "alpha";
            break; // Signifie qu'on est à la fin de la déclaration "case 1"
        case 2: // Agit comme un "else" dans une déclaration "If Else"
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default: // else, si l'entrée  n'est pas 1,2,3 ni 4
            answer = "none"
    }

    return answer;
}

console.log(caseInSwitch(3)); // entrée

/* Ecrire une déclaration switch qui test val et définis answer pour les conditions suivantes :
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
// Multiple options identiques dans une déclaration Switch
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break; // Ici, le break est mît après les 3 cases, donc si l'entrée est est 1, 2 ou 3 la réponse sera "Low"
        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break; 
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "Enter a value between 1 and 9";
}
return answer;
}
console.log(sequentialSizes(11));

// Transformer une chaine Else If avec switch : 
function chainToSwitch(val) {
    var answer = "";
                                                            switch(val) {
    if (val === "Bob") {                        |           case "Bob":
        answer = "Marley";                      |               answer = "Marley";
    } else if (val === 42) {                    |               break;
        answer = "The Answer";                  |           case 42:
    } else if (val === 1) {                     |               answer = "The Answer";
        answer = "There is not #1";             |               break;
    } else if (val === 99) {                    |           case 1:
        answer = "Missed me by this much!";     |               answer = "There is not #1";
    } else if (val === 7) {                     |               break;
        answer = "Ate Nine";                    |           case 99;
    }                                           |               answer = "You missed me by this much!";
    return answer;                              |               break;
}                                               |           case 7; 
                                                |               answer =  "Ate Nine";
                                                |               break;
                                                            return answer;
                                                            }

// Retourner des valeurs Booléennes des fonctions
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
// =====================
function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15)); // Check si 10 est plus petit que 15 
// Card Counting
/* Compteur de cartes blackjack, can on a une carte faible le compteur monte et quand on a une carte élevée le compteur descend,
si c'est une carte moyenne le compteur reste le même, quand le compteur est positif le joueur doit miser 'élevé' et quand le compteur
est 0 ou négatif, le joueur doit miser 'low' */
var count = 0;

function cc(card) {
    switch(card) {
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10: 
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A'); 
console.log(cc(4))