
/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

/* Charlotte
1) prompt
2) reponse prenom : if prenom, bonjour
3) saisie de l'âge
4) cclsion
*/ 

/*1*/ /*prompt prenom*/
var prenom = prompt("Bonjour, quel est ton prénom ?");
console.log(prenom);

/*2*/ /*prompt reponse prenom demande age*/
var age = prompt("Bonjour " + prenom + " , Quel âge as-tu ?");
console.log(age);

/*3*/ // année de naissance / var adn = 2018 - (age)

var anneeactuelle = 2018
anneenaissance = anneeactuelle - age;
console.log(anneenaissance);

alert("Tu es donc né(e) en" + anneenaissance);

/*4*/ //write ccls

function cclsion(prenom, age) {
    document.write("<p> Bonjour " + prenom + ". Tu as " + age + " ans !</p>")
   }
cclsion(prenom, age)

/*** ---  CORRECTION  ---
 * 1. Initialisation des variables
 * 2. Création d'une fonction
 *  2.a Demander à l utilisateur de son prénom
 *  2.b Demander son age
 *  2.c déduire l'année de naissance et l'afficher dans une alerte
 *  2.d afficher un recapitulatif dans la page */

/**
 * 1. Initialisation des variables
 * var ObjetDate = New Date ();
 * var AnnéeActuelle = ObjetDate.getFullYear();
 * 
 * 
 * 2. Création d'une fonction
 *  function Hello () {
 * 
    * 2.a Je demande à l'utilisateur son Prénom
    *  var prenom = prompt("Hello" + prenom + ! What is your name ?", "<Saisir votre Prénom>")
    * console.log(prenom)
    * console.log(typeof prenom)
    
    * 2.b Je lui demande son age
    *  var age = parseInt(prompt("Hello" + prenom + ! How old are you ?", "<Saisir votre Age>"))
    * // age = parseInt(age)
    * console.log(age)
    * console.log(typeof age)
    * 
    * -- 2c. Déduire l'année de naissance et l'afficher dans une alerte
    var AnneeDeNaissance = AnneeActuelle - age;
    alert('AMAZING ! So you were born in ' + AnneeDeNaissance);

    * -- 2c. Afficher dans la page un récapitulatif
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
   

    * -- 3. Execution de la fonction
    Hello();
        * 
    *
 
*/
