//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Essa função é responsável por adicionar um amigo na lista de amigos
function adicionarAmigo() {
    let name = document.querySelector('#amigo').value;

    if (name == '') {
        alert('Por favor, insira um nome');
        return;
    } else {
        // Adiciona o amigo na lista de amigos
        friends.push(name.trim());
        listarAmigos();
        let list = document.getElementById('resultado');
        list.innerHTML = '';
        limparCampo();
    }
};

// Essa função é responsável por listar os amigos na tela
function listarAmigos() {
    let list = document.getElementById('lista-amigos');
    list.innerHTML = '';
    for (let i = 0; i < friends.length; i++) {
        list.innerHTML += `<li>${friends[i]}</li>`;
    }
};
// Essa função é responsável por sortear os amigos
function sortear() {
    if (friends.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }
    embaralhar(friends);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < friends.length; i++) {
        if (i == friends.length - 1) {
            sorteio.innerHTML += `${friends[i]} --> ${friends[0]} <br>`;
        } else {
            sorteio.innerHTML += `${friends[i]} --> ${friends[i + 1]} <br>`;
        }
    }
};

// Essa função é responsável por limpar o campo de input
function limparCampo() {
    document.querySelector('#amigo').value = '';
};

// Essa função é responsável por embaralhar os amigos
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
};
// Essa função é responsável por reiniciar o sorteio
function reiniciar() {
    friends = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};  