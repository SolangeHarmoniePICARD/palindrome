/* Projet de script en JS qui vérifie si le texte renseigné par l'utilisateur est un palindrome, c'est-à-dire un mot ou groupe de mots qui peut se lire indifféremment de gauche à droite ou de droite à gauche en gardant le même sens. */

function palindrome(word) {
  word = word.toLowerCase().replace(/[^a-z0123456789]+/g,"");
  var reverse = word.split("").reverse().join("");
  if (word == reverse) {
    return true
  } else {
    return false
  }
}
