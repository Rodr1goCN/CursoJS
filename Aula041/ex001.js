const novaTarefa = document.querySelector('.nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li'); //cria um li no dentro da ul no HTML
  return li;
}

novaTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) { //O 13 é referente o código da tecla ENTER
    if (!novaTarefa.value) return; // se lê (diferente de nova tarefa, retorna)
    criaTarefa(novaTarefa.value);
  }
});

function limpaInput() {
  novaTarefa.value = '';
  novaTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' '; //adiciona uma espaço no antes do botão apagar
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  //botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar'); //define uma class e um nome para esta class
  //botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefa.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
  if (!novaTarefa.value) return; //faz com que ao clicar no botão adicionar tarefa e se estiver vazio não retorne nada vazio

  //console.log(novaTarefa.value) //novaTarefa.value (caputura o que tem dentro da caixa de texto e retorna no console do navegador)
  criaTarefa(novaTarefa.value);
});

document.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas() {
  const liTarefas = tarefa.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefas of liTarefas) {
    let tarefaTexto = tarefas.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '');
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON); //salva a tarefa no armazenamento local do computador
}

function adicionaTarefaSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}

adicionaTarefaSalvas();