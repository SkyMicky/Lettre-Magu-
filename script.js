var  B = function verifPassword() {
    event.preventDefault();
    var A = document.querySelector("#password").value ;
    var D = document.querySelector("#username").value ;
     if (A == "Orchidee" && D == "Magué") {
         window.location.href = "index2.html";
     } else {
         alert("Désolé mafia mais, le mot de Passe est incorrect.");
     }
} ;
document.querySelector("#loginBtn").addEventListener("click", B) ;


