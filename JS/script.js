//Lógica antiga
//const inicio = new Date(2021, 7, 11, 1, 1, 1, 1)
//let agora = new Date()
//let diff = Math.floor((Date.parse(agora) - Date.parse(inicio)) / 86400000);
const inicio = new Date (2021,11,8, 1, 1, 1, 1)
let agora = new Date()
let diff = Math.floor((Date.parse(agora) - Date.parse(inicio)) / 86400000);

let mensagem = `<h1>A Riot lançou o Rumble no Legends of Runeterra e o Capitão Serket esta aproveitando os Mecha-Yordles há <strong>${diff}</strong> dias</h1>`

let mensagemAntiga = `<h1>O Capitão Serket está há <strong>${diff}</strong> dias pedindo para a Riot adicionar o Rumble no Legends of Runeterra</h1>`


document.getElementById('dataSerket').innerHTML = mensagem