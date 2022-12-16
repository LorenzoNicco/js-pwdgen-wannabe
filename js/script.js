//richiesta nome
const firstname = prompt('Inserisci il tuo nome');

//debug
console.log ('Fin quì tutto ok');

//richiesta cognome
const secondname = prompt('Inserisci il tuo cognome');

//debug
console.log ('Anche quì tutto ok');

//richiesta colore
let color = prompt('Inserisci il tuo colore preferito');

//debug
console.log ('Ancora tutto a posto');

//generazione output
console.log(
    `
    ${firstname}${secondname}${color}21
    `
);

//generazione output in pagina prova1
document.writeln(
    `
    ${firstname}${secondname}${color}21
    `
);

//generazione output in pagina prova2
document.writeln(firstname+secondname+color+21);

//generazione output in pagina prova3
document.writeln(`${firstname}${secondname}${color}21`);