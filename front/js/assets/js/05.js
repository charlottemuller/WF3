/*----------------------------
INCREMENTATION & DECREMENTATION
------------------------------*/ 

// -- Incrémentation --  //

var nb1 = 1;
nb1 = nb1 + 1;

// -- Ecriture Simplifiée
nb1++; // Raccourci de nb1 = nb1 + 1 -> Par pas de 1 
//(attention ++ est égal à une incrémentation de 1)


// -- Decrémentation --  //

nb1 = nb1 - 1;
// -- Ecriture Simplifiée
nb1--; // Raccourci de nb1 = nb1 - 1 -> Par pas de 1

// -- Subtilité --  //
nb1 = 0;
console.log( nb1++ )
console.log(nb1);

nb1 = 0;
console.log( ++nb1)