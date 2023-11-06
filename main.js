const palinBtn = document.getElementById('palin-Btn')
palinBtn.addEventListener('click', palindrome)
function palindrome () {
  const parola = prompt('inserisci una parola')
  let reverse = ''
  for (let i = parola.length; i >= 0; i--) {
    const element = parola[i]
    reverse += [element]
  }
  if (parola == '') {
    alert('inserisci del testo')
    palindrome()
  } else if (parola == reverse) {
    alert('Hai scritto un palindromo!')
  } else {
    alert('non è un palindromo')
  }
}

function randomizza (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const PoDButton = document.getElementById('PoD-Btn')
PoDButton.addEventListener('click', pariDispari)
function pariDispari () {
  const PoDChoice = prompt('pari o dispari?')
  let numChoice = ''

  if (PoDChoice == 'pari') {
    alert('Hai scelto pari')
    numChoice = parseInt(prompt('scegli un numero da 1 a 5'))
  } else if (PoDChoice == 'dispari') {
    alert('Hai scelto dispari')
    numChoice = parseInt(prompt('scegli un numero da 1 a 5'))
  } else {
    alert('dovevi scegliere fra pari e dispari :(')
    return
  }

  while (numChoice < 1 || numChoice > 5) {
    alert('deve essere un numero da 1 a 5')
    numChoice = parseInt(prompt('scegli un numero da 1 a 5'))
  }

  const CPURandom = randomizza(1, 5)
  const somma = numChoice + CPURandom
  console.log(somma)

  if (somma % 2 == 0 && PoDChoice == 'pari') {
    console.log('pari, hai vinto!!')
    alert(`il computer ha lanciato ${CPURandom}. ${numChoice} + ${CPURandom} = ${somma}. pari, hai vinto!!`)
  } else if (somma % 2 == 0 && PoDChoice == 'dispari') {
    console.log('Pari, hai perso :(')
    alert(`il computer ha lanciato ${CPURandom}. ${numChoice} + ${CPURandom} = ${somma}. Pari, hai perso :(`)
  } else if (somma % 2 != 0 && PoDChoice == 'dispari') {
    console.log('Dispari, hai vinto!!')
    alert(`il computer ha lanciato ${CPURandom}. ${numChoice} + ${CPURandom} = ${somma}. Dispari, hai vinto!!`)
  } else {
    console.log('Dispari, hai perso :(')
    alert(`il computer ha lanciato ${CPURandom}. ${numChoice} + ${CPURandom} = ${somma}. Dispari, hai perso :(`)
  }
}
