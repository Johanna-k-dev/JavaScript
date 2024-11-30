/**
   * -------------------------------------------------------
   * 1 - Vous êtes un pilote de F1.
   * 
   * Créer une boucle qui permette d'afficher "Tour n°X" sur vos 50 tours de circuits
   * 
   * Ex : 
   * Tour n°1
   * Tour n°2
   * Tour n°3
   * etc...
   * -------------------------------------------------------
*/
function runToursCounter() {

    for (let i = 0; i <= 5; i++) {
        const nbTours = i;
        const consoleMessageTour = `Vous avez effectué ${nbTours} tour(s) de piste`
        console.log(consoleMessageTour);
            
    }
}

// Appel de la fonction =>

// runToursCounter()

 /**
   * -------------------------------------------------------
   * 2 - Vous êtes (encore) un pilote de F1 mais cette fois-ci, vous avez avec vous un copain-pilote avec vous parce que vous avez deux fois plus de tours à faire.
   * 
   * Créer une boucle qui affiche tous les tours 🔂
   * Si vous êtes au premier tour, afficher "Zé bartiii, c'est à conducteur 1️⃣ de démarrer"
   * Si vous êtes au tour 25, afficher "Il faut changer de conducteur, c'est à conducteur 2️⃣"
   * Si vous êtes au tour 50, afficher "Il faut changer de conducteur, c'est à conducteur 1️⃣"
   * Si vous êtes au tour 75, afficher "Il faut changer de conducteur, c'est à conducteur 2️⃣"
   * Si vous êtes au tour 100, afficher "C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎"
   * -------------------------------------------------------
*/

function runToursCounterExo2() {
    
    const messageTours = ["Zé bartiii, c'est à conducteur 1️⃣ de démarrer","Il faut changer de conducteur, c'est à conducteur 2️⃣","Il faut changer de conducteur, c'est à conducteur 1️⃣","Il faut changer de conducteur, c'est à conducteur 2️⃣", "C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎"]
    console.log(messageTours.length);
    
    for (let i = 0; i <= 100; i++) {
        
        const nbToursExo2 = i;

       if (nbToursExo2 === 1) {
        console.log(messageTours[0]);
       } else if (nbToursExo2 === 25) {
        console.log(messageTours[1]);
       }else if (nbToursExo2 === 50) {
        console.log(messageTours[2]);
       }
       else if (nbToursExo2 === 75) {
        console.log(messageTours[3]);
       }else if (nbToursExo2 === 100) {
        console.log(messageTours[4]);
       };
    }
}

 //Appel de la fonction

// runToursCounterExo2()

 /**
   * -------------------------------------------------------
   * 3 - Vous êtes (toujours) un pilote de F1, sur 101 tours. Vous devez maintenant faire attention à votre essence. 
   * 
   * Votre réserve de carburant est de 74L.
   * Chaque tour consomme 7L.
   * 
   * Créer une boucle qui affiche tous les tours et le fuel restant à la fin de chaque tour 🔂. Ex : "Tour n°88, Fuel restant : 19"
   * Si vous allez être à court de carburant au prochain tour : 
   *    afficher en warning : "Attention carburant à recharger au prochain tour⛽️"
   *    recharger le carburant le tour suivant
   * Une fois le carburant rechargé, afficher en warning : "Le refuel a été fait 🙌😎"
   * Une fois la course terminée, afficher le nombre total de refuel qui aura été nécéssaire. Ex : "Nombre total de refuel :  2"
   * Vous devez obtenir le résultat de la capture d'écran "boucles-basiques-resultat"
   * -------------------------------------------------------*/



function runToursCounterExo3() {
    let refuelCounter = 0;
    let fuelReserve = 74;

    for (let i = 1; i <= 101; i++) { 
        
        fuelReserve-=7;
        const nbToursCounter = i;
        const messageToursExo3 = [`Tour N°${nbToursCounter}, Fuel restant ${fuelReserve}L`,`Attention ! il ne vous reste que ${fuelReserve}L de fuel restant! Carburant à recharger au prochain tour⛽️`,`Le refuel a été fait 🙌😎`,`Nombre total de refuel :${refuelCounter}`];
        console.log(messageToursExo3[0]); 
        
        if (fuelReserve <= 11) {

            //Ce qu'il se passe si la reserve de fuel est inferieur ou égale a 4
           
            console.warn(messageToursExo3[1]);  
            fuelReserve+=70;
            refuelCounter +=1; 
            console.log(messageToursExo3[2]);
            
        }
        
        // ce qu'il se passe si la coursser est terminée
          
        else if (nbToursCounter ===101) {
            console.log(`La course est terminée ! le nombre de refuel effectuer pendent la course s'éleve a ${refuelCounter}`);
            
        }
    }
}

runToursCounterExo3()