//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito, Infine scrivi sulla pagina nomecognomecolorepreferito23

// Chiedere a User nome
const userNome = (prompt("Qual'è il tuo nome?"));
console.log(userNome);

// Chiedere a User cognome
const userCognome = (prompt("Qual'è il tuo cognome?"))
console.log(userCognome)

// Chiedere a User colore preferito
const userColor= (prompt("Qual'è il tuo colore preferito?"))
console.log(userColor)
// Output per lo User

document.getElementById("mio_id").innerHTML= "Ecco la tua nuova Password: " + userNome + userCognome + userColor + "23";