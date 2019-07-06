/* Script en JS qui vérifie si le texte renseigné par l'utilisateur est un palindrome, c'est-à-dire un mot ou groupe de mots qui peut se lire indifféremment de gauche à droite ou de droite à gauche en gardant le même sens. */

var submit = document.getElementById("button");

function palindrome(word) {
  word = word.toLowerCase().replace(/[^a-z0123456789]+/g,"");
  var reverse = word.split("").reverse().join("");
  if (word == reverse) {
    return true ;
  } else {
    return false ;
  }
}

submit.addEventListener("click", function() {
    var text = document.getElementById("text").value;
    var result = palindrome(text);
    if(result === true) {
        document.getElementById("notification").innerHTML = text + " est un palindrome";
        document.getElementById("notification").className = "text-success";
    } else {
        document.getElementById("notification").innerHTML = text + " n'est pas un palindrome";
        document.getElementById("notification").className = "text-danger";
    }
});
