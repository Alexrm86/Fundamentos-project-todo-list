const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');


function addNovasTarefas() {
    criarTarefa.addEventListener('click', () => {
        const textoTarefas = document.getElementById('texto-tarefa');
        const itemTarefa = document.createElement('li');
        if (textoTarefas.value === '') {
            alert('Digite uma tarefa');
        } else {
            itemTarefa.innerText = textoTarefas.value;
            listaTarefas.appendChild(itemTarefa);
            textoTarefas.value = '';
        }
    });
}
addNovasTarefas();

function criarBotaoTarefas(Adicione) {
    let tarefaBotao = document.querySelector('#lista-tarefas');
    let novoBotao = document.createElement('btn-primary');
    let novoBotaoID = 'criar-tarefa';

    novoBotao.innerHTML = Adicione;
    novoBotao.id = novoBotaoID;
    tarefaBotao.appendChild(novoBotao);
};

criarBotaoTarefas("Adicione");