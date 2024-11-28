/**
   * -------------------------------------------------------
   * 1 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de ces 2 paramètres. Afficher le résultat dans la console.
   * -------------------------------------------------------
*/

function calculated(a,b) {
    console.log (a + b);
    
}
calculated(5,6)


/**
   * -------------------------------------------------------
   * 2 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de :
   *  → la raçine carrée du premier paramètres
   *  → le second paramètre à la puissance 7
   *  Afficher le résultat dans la console.
   * -------------------------------------------------------
*/

function calculation(a,b){
    let add= a+b;
    let c = add
    // raçine carré
    console.log(Math.sqrt(c))
    //puissance 7
    console.log(Math.pow(c, 7))
}
calculation(7,8)

/**
   * -------------------------------------------------------
   * 3 - Créer une fonction qui vérifie si l’utilisateur est apte à apprendre du Javascript : 
    avec prompt, demander successivement à l’utilisateur les deux langages de programmation à apprendre avant de démarrer le JS
    → S’il répond successivement HTML puis CSS, alors la fonction retourne vrai ; sinon faux.
    → Si l’exécution de la fonction retourne vrai, alors la console affiche “Bienvenue en JS jeune éphèbe”
    → Si l’exécution de la fonction retourne faux, alors la console affiche “Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais”
   * -------------------------------------------------------
*/
const youCanLearnJavaScript = "Bienvenue en JS jeune éphèbe";
const youCantLearnJavaScript = 'Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais';

function canYouLearnJavascript (){
    let userAnswer1 = prompt("premier langage de programmation ","")
    let userAnswer2 = prompt("dexième langage de programmation ","")
    if (userAnswer1 === "Html" && userAnswer2 === "Css") {
        console.log(youCanLearnJavaScript);
        
    }else{
        console.log(youCantLearnJavaScript);
        
    }
}
canYouLearnJavascript()