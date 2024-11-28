// Voici un jeu de données : interdiction d'y toucher :) 
const characterNames = [
    "63AIS",
    "A'misandra",
    "Amimari",
    "Alika",
    "54B2",
    "A'merpact",
    "Amazora",
  ];

/**
 * -------------------------------------------------------
 * 1 - Afficher le nombre de personnages dans le tableau 
 * -------------------------------------------------------
 */

console.log(characterNames.length);

/**
 * -------------------------------------------------------
 * 2 - Afficher le nom du premier personnage du tableau
 * -------------------------------------------------------
 */
 console.log(characterNames[0]);

 /**
 * -------------------------------------------------------
 * 3 - Afficher le nom du dernier personnage (le 7eme)
 * -------------------------------------------------------
 */

 console.log(characterNames[6]);

 /**
 * -------------------------------------------------------
 * 4 - Afficher le nom du dernier personnage **SANS** 
 * savoir qu'il est le 7eme
 * -------------------------------------------------------
 */

 const lastElement = characterNames.length-1;
 console.log(characterNames[lastElement]);

 /**
 * -------------------------------------------------------
 * 5 - Afficher les noms de tous les personnages
 * -------------------------------------------------------
 */
 
 console.log(characterNames);
 
/**
 * -------------------------------------------------------
 * 6 - Afficher le nom de chaque personnage accompagné du 
 * nombre de caractères qu'il contient. Ex: Alika (5)
 * -------------------------------------------------------
 */


characterNames.forEach((element,index)=> console.log(element , index));



/**
 * -------------------------------------------------------
 * 7 - Afficher le nom de chaque personnage en minuscules
 * -------------------------------------------------------
 */

characterNames.forEach((element)=> console.log(element.toLowerCase()));

/**
 * -------------------------------------------------------
 * 8 - Afficher le nombre de personnages dont le nom 
 * contient la lettre 'a' (minuscule ou majuscule)
 * -------------------------------------------------------
 */

const maches = [];

characterNames.forEach((element )=>)
