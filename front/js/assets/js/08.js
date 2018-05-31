/*----------------------------
LES CONDITIONS
------------------------------*/ 

/*
var MarjoriteLegaleFR = 18;

if(14>=MarjoriteLegaleFR) {
    alert('Bienvenue !')
}

// Le ELSE n'est pas obligatoire

else {
    alert('Va voir chez Google si ...');
}
*/

/* -------------------------------
             EXERCICE

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fais une redirection sur Google après lui avoir signalé le soucis.

-------------------------------- */


/** 1. Initialisation des variables
 * 2. Création d'une fonction
 *  2.a Demander à l utilisateur de son age
 *  2.b Demander son age


/*  1 déclarer la majorité légale*/

/*var MarjoriteLegaleFR = 18;

/* 2 vérifier si l'utilisateur est majeur

function monUtilisateurEstMajeur(age) {
    if( age>=MarjoriteLegaleFR) {
    return true;
} else{
    return false;
}
}

/* 3 je demande à l utilisateur son age

var age = parseInt( prompt("Bonjour, quel age avez-vous ?", "Saisissez votre Age"));

/*4 verification de l'age de l'utilisateur
if( monUtilisateurEstMajeur(age) ) {
    alert ('Bienvenue sur mon site internet réservé pour les mamjeurs');
    document.write('yes');
} 
else {
    // j affecte la redirection)
    document.location.href = "https://www.google.fr"
}

/*** LES OPERATEURS DE COMPARAISON ***
 * L'opérateur de comparaison "==" signifie : Egal à
 * Il pemet de vérifier que 2 variables sont identiques.
 * 
 * L'opérateur de comparaison "===" signifie: strictement égal à.
 * Il va compareer la valeur, mais aussi le type.
 * 
 * L'opérateur "!=" : Différent de
 * L'Opérateur " !==": Strictement différent de
 * 
 */

 /* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
/*1 Déclarer les identifiants*/

var email = "wf3@hl-media.fr"
var mdp = "wf3"

/* 2. Création d'une fonction*/



/*  2.a Demander à l utilisateur de renseigner son email*/
var email = prompt("Bonjour, quel est votre identifiant ?", "Saisissez votre email");

function Login(email, mdp) {
    if( email=== "wf3@hl-media.fr") {
    return true;
} else{
    return false;
}
}

/*  2.b création d'une fonction 

if( Login(mdp) ) {
    alert ('Merci de saisir vore mdp');
    if( mdp=== "wf3") {
        return true;
    } else{
        return false;;
} 
else {
    // j accueille le visiteur
    document.write('Bienvenue SQL');*/




