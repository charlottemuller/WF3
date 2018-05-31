/*----------------------------
LES FONCTIONS
------------------------------*/ 

/**
 * Déclarer une fonction
 * NB : Cette fonction en retourne aucune valeur et 
 * ne prend pas de paramètres
 */

 function Bonjour( ) {

/** lors de l'appel de cette fonction,
 * les instructions ci-dessous seront exécutées...
 */
alert ('Bonjour !')

 }

 /**
  * Je vais appeler ma fonction "Bonjour" et déclencher ses instructions
  */

  Bonjour();

  //Function NomDeMaFonction (Argument 1, Argument 2, Argument n) {
    // Les instructions... 
  //}

  /**
   * Déclarer une fonction qui prend un argument (un paramètre)
  */
 function ditBonjour(Prenom, Nom) {
     document.write("<p> Bonjour <strong>" + Prenom + "" + Nom + "</strong> !</p>")
    }

//Appeler / Utiliser une fonction avec des arguments
ditBonjour("Hugo", "LIEGEARD")


/*----------------------------
Exercice :
Créez une fonction permettant d'effectuer l'addition de deux nombres (nb1 et nb2) passés en paramètres.
------------------------------*/ 

function addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) +"<p/>");