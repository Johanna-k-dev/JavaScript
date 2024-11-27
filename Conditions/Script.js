// verifier une condition pour afficher

// Voici une variable : ne pas toucher :) 
const guessName = "Sphinx";
/**
   * -------------------------------------------------------
   * 1 - Si la variable guessName est égale à "Sphinx", afficher "Vive l'Égypte".
   *  Sinon, afficher "De toute façon je ne comprends rien aux cartes"
   * -------------------------------------------------------
*/

if (guessName=== "Sphinx") {
    console.log("Vive l'Égypt");
    
    
}

// Voici une variable : ne pas toucher :) 
const comparedString = "secret"
/**
   * -------------------------------------------------------
   * 2 - Demander à l'utilisateur de saisir un mot de passe (voir la fonction Javascript “prompt”)
   *  Si ce mot de passe correspond à la variable comparedString, afficher "Bienvenue BG ! 🙌" dans la console
    Sinon: afficher "C'est NON 🦄".
   * -------------------------------------------------------
*/

let userPassword =prompt("secret","Tapez le MDP")
if (userPassword === "secret") {
    console.log("Bienvenue BG ! 🙌");
    
}else{
    console.log("C'est NON 🦄");
    
}

/**
   * -------------------------------------------------------
   * 3 - Écrire un programme qui demande à l'utilisateur d'entrer son âge (en utilisant “prompt”) et qui affiche ensuite un message en fonction de sa tranche d'âge :
    Si l'âge est inférieur à 3 : "Hello, Baby 🍼!"
    Si l'âge est inférieur à 18: "Hi! 👋"
    Si l'âge est supérieur à 100: "Greetings 🖖"
    Dans les autres cas: "Wow... 😲"
   * -------------------------------------------------------
*/
