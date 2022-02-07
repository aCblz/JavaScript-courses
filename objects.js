// Les objects sont similaires aux Arrays sauf qu'au lieu d'utiliser des indices pour accéder aux données, on utilise des propriétés
var aDog = {
    "name": "Bob",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "favorite food": ["nuggets"] // utilisation Bracket Notation obligatoire
};

// Accéder à la propriété d'un objet avec la Dot Notation
var nomDuChien = aDog.name; // Variable + . + nom de la proriété désirée
var amisDuChien = aDog.friends; 

// Accéder à la propriété d'un objet avec la Bracket Notation
// La bracket notation est utilisable quand on veut mais est obligée lorsque le nom de l'objet a un espace dedans
var nourritureFavorite = aDog["favorite food"]; 

// Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

var playerNumber = 16; // playerNumber = 16
var player = testObj[playerNumber]; // Variable player = playerNumber = Montana
console.log(playerNumber)
console.log(player)

// Updating Object Properties 
var aDog = {
    "name": "Bob",
    "legs": 4
};

aDog.name = "Bobinou"; // Change Bob en Bobinou
console.log(aDog)

// Add new properties
aDog.barkbark = "Woof Woof"; // Ajoute la proriété barkbark à l'objet aDog
aDog['bark'] = "Woof !";

// Delete properties
delete aDog.barkbark; // Retire la propriété barkbark à l'objet aDog

// Utiliser les objets pour des recherches
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    };
    result = lookup[val]
    return result;
}
console.log(phoneticLookup("charlie"));
// Ce qui équivaut à : *************************************************************************************************************
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago"
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break; 
        }
// Tester les objets pour trouver des propriétés
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) { // Check si l'objet a la propriété demandée
        return myObj[checkProp]; // Renvoie la propriété demandée si l'objet la possède
    } else {
        return "Not Found"; // Renvoie "Not Found" si l'objet ne possède pas la proriété demandée
    }
}
console.log(checkObj("gift")); // l'objet possède la propriété gift qui est associée "pony"
console.log(checkObj("hello")); // l'objet ne possède pas la propriété hello donc va renvoyer "Not Found"

// Manipuler des objets complexes
// Ajouter une nouvelle propriété à l'Array "myMusic"
var myMusic = [ // Début Array myMusic 
    {
        "artist": "Kanye West",
        "title": "Stronger",
        "release_year": 2007,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "La Feve",
        "title": "Kanye West",
        "release_year": 2021,
        "formats": [
            "Youtube",
            "Spotify",
            "CD",
        ],
        "gold": false
    }
]; // Fin Array myMusic
    
// Objets Imbriqués
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outisde": {
            "trunk": "jack"
        }
    }
};
// Accéder à un objet dans un objet 
var gloveBoxContents = myStorage.car.inside["glove box"]; // les "[]" sont nécessaires au lieu des "." dû à l'espace dans le nom
console.log(gloveBoxContents)