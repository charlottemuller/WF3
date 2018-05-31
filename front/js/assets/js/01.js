alert('Tu es le bienvenu !');

// Deux slash pour faire des commentaires uniligne

/*
ici, je peux faire un commentaire 
sur plusieurs lignes

RACCOURCI : " Ctrl + : "
 ou " Ctrl + shift + "

*/

// -- 1 : Déclarer un variable en JS
var Prenom;

// -- 2 : Affecter une Valeur
Prenom = "Charlotte";

// -- 3 : Afficher la valeur de ma variable dans la console.
console.log(Prenom);


/////////////////// LES TYPES DE VARIABLES \\\\\\\\\\\\\\\\\

// -- ici, typeof, me permet de connaitre le type de ma variable.
console.log(typeof Prenom)

// -- Declaration et Affectation d'un nombre              
var Age = 40;

// -- Afficher la console                              
console.log(Age);

// -- Connaitre son type
console.log(typeof Age);


    /*----------------------------------------------------------------------

        ////////////////// LA PORTEE DES VARIABLES \\\\\\\\\\\\\\\\\\\

        1) variables GLOBALES
        Les variables déclarées directement à la racine du fichier JS sont appelées 
        variables GLOBALES
        Elles sont disponibles dans l'ensemble de votre document, y compris dans
        les fonctions.

        ----

        2) variables LOCALES
        Les variables déclarées à l'intérieur d'une fonction sont appelées 
        variables LOCALES
        Elles sont disponibles UNIQUEMENT dans le scope de la fonction.

    -----------------------------------------------------------------------*/


// -- Les variables de type FLOAT --
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI / FAUX) --
var unBoolen = false; //true
console.log(unBoolen);
console.log(typeof unBoolen);

// -- Les Constantes --
/* La déclaration CONST permet de créer une constante accessible uniquement 
* à la lecture. Sa valeur ne piurra pas être modifiée par des réaffectations ultérieures.
* Une constante ne peut pas être déclarée à nouveau.
*
* Généralement par convention, les constantes sont en majuscule.
*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

USER = "Charlotte";

/*----------------------------------------------------------------------

////////////////// LA MINUTE INFO \\\\\\\\\\\\\\\\\\\

Au fur et à mesure qu'on affect ou réaffecte des valeurs à des variables, 
celle-ci prend la nouvelle valeur et le nouveau type !

En javascript ( ECMA script), les variables sont auto-typées.

Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER, 
je peux utiliser des fonctions natives de JS.*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre)

/**
 * La fonction parseInt() permet de retourner un Entier
 * à partir de ma chaine de caractères.
 */

 unNombre = parseInt(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

 // Je réaffecte une valeur à ma variable
 unNombre = "12.55";
 console.log(unNombre);
 console.log(typeof unNombre);

 unNombre = parseFloat(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

 // -- Conversion d'un Nombre en string avec toString()
 unNombre = 10;
 var monNombreDeTypeString = unNombre.toString();
 console.log(unNombre);
 console.log(typeof monNombreDeTypeString);