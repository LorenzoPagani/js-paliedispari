const palinBtn = document.getElementById("palin-Btn");
palinBtn.addEventListener("click", palindrome)
function palindrome() {
    const parola = prompt("inserisci una parola");
    let reverse = "";
    for (let i = parola.length; i >= 0; i--) {
        const element = parola[i];
        reverse += [element] 
    }
    if (parola == "") {
        alert("inserisci del testo")
        palindrome()
    } else if (parola == reverse) {
        alert("Hai scritto un palindromo!");
    }
    else {
        alert("non è un palindromo");
    }
    }


