//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema
 // exibirTextoNaTela = ('O mundo é ruim,embora o mundo seja ruim, glórias ao Deus Eterno, Majestoso e todo poderoso, pois Ele é bom e a sua misericórdia dura para sempre!!!');

let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert('Insira um nome válido');
        return;
    }

    listaDeAmigos.push(nome);
    console.log(listaDeAmigos);
    nomeInput.value = "";
    exibirAmigos(); // Exibir amigos após adicionar um novo nome
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    console.log('listaLimpa');

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('O sorteio precisa de no mínimo dois nomes');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
 }
