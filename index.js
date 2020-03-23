//busca o ul dentro de #app 
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('lista_todos')); // Pega os dados JSON via LocalStorage

function renderTodos(){
  listElement.innerHTML = ''; //Limpa a lista de todos

  for(todo of todos){
    console.log(todo);

    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a'); // Cria um "a"
    linkElement.setAttribute('href', '#'); // Cria um href antes e um # na Tag
    
    var posicaoElemento = todos.indexOf(todo); // Peça a posição do elemento
    linkElement.setAttribute('onclick','deletarTodo('+ posicaoElemento +')'); // Pega o Elemento ao clicar

		var linkText = document.createTextNode(' '+ 'Excluir');
		linkElement.appendChild(linkText);
    //<a href="#">Excluir</a>


    todoElement.appendChild(todoText); // Cria uma nova Li
    todoElement.appendChild(linkElement); // Cria o texo Exluiir dentro do li
    listElement.appendChild(todoElement); // Cria ua nova todo

  }
}
renderTodos();

function adicionarTodo(){
  if (inputElement.value == ''){ // Não deixa que um item vazio seja adicionado
    alert("Digite alguma Tarefa!");
    return false;
  }
  else{
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    salvarDados();
  }
}

buttonElement.onclick = adicionarTodo;

function deletarTodo(posicaoElemento){
  // Splice remove o item da lista de acoro com a posição
  todos.splice(posicaoElemento, 1);
  renderTodos();
  salvarDados();
}

function salvarDados(){
  localStorage.setItem('lista_todos', JSON.stringify(todos));
}