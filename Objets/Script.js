// Voici un objet qui représente un Chat : interdit d'y toucher :) 

const billyTheCat = {
    name: "billy",
    color: "black",
    favouriteFoods: ["fish", "chicken"],
    isHungry: true,
    meow: function () {
        return "Meeeeeeeow";
    }
}

/**
 * -------------------------------------------------------
 * 1 - Afficher les valeurs de chacunes des clés
 * -------------------------------------------------------
 */

console.log(`he's name is ${billyTheCat.name} he's ${billyTheCat.color} cat he's favorit food is ${billyTheCat.favouriteFoods} he is always hungry it's ${billyTheCat.isHungry} and he love say ${billyTheCat.meow}`);



/**
 * -------------------------------------------------------
 * 2 - Grâce à prompt(), afficher la valeur de la clé "color"
 * -------------------------------------------------------
 */
/*
function printColor() {
    const colorOfBilly = billyTheCat.color;
    const colorPrompt = prompt("quelle est la couleur de Billy","écrit color")
    if (colorPrompt === "color") {
    return colorOfBilly; 
    }
}
console.log(printColor());
*/

// Voici un tableau d'objets : interdit d'y toucher  :) 
const animals = [
    { name: "kitty", species: "cat", noise: "meow" },
    { name: "skaly", species: "squale", noise: "frrrrrr" },
    { name: "wormy", species: "worm", noise: "????" },
    { name: "Pikatchue", species: "electrick mouse", noise: "pikaaaaa" }
];

/**
 * -------------------------------------------------------
 * 3 - Afficher le dernier élément
 * -------------------------------------------------------
 */
 
 
 


/**
 * -------------------------------------------------------
 * 3 - Afficher le dernier élément sans savoir que c'est le 4ème
 * -------------------------------------------------------
 */



/**
 * -------------------------------------------------------
 * 4 - Supprimer le nom du 2ème animal et l'espèce du 3ème
 * -------------------------------------------------------
 */


/**
 * -------------------------------------------------------
 * 5 - Remplacer le nom du premier animal par celui du 4ème (2 façons de faire)
 * -------------------------------------------------------
 */



// Voici un objet qui contient (entre autres) une fonction : interdit d'y toucher :) 
const apple = {
    isEaten: false,
    eat: function () {
        return this.isEaten ? "le fruit a déjà été mangé" : this.isEaten = true;
    }
}

/**
 * -------------------------------------------------------
 * 6 - En manipulant l'objet, afficher "le fruit a déjà été mangé"
 * -------------------------------------------------------
 */
