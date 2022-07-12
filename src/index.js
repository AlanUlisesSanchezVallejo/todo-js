import { crearTodoHtml, saludar } from './js/componentes';
import './styles.css';

import { Todo,TodoList } from './classes'; //Busca archivo index.js por defecto!!!!
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';


export const todoList = new TodoList();

// const tarea = new Todo('APRENDER JavaScript!!!!!');



// todoList.nuevoTodo(tarea);
//  tarea.completado = true;

// console.log({tarea});
console.log({todoList});

// crearTodoHtml(tarea);


// localStorage.setItem('Mi-key','ABC');
// // sessionStorage.setItem('KEY1', 'HOLAAAAA')


// setTimeout (()=>{
//     localStorage.removeItem('Mi-key');
//  }, 1500);


console.log(todoList.todos);


todoList.todos.forEach( todo  => crearTodoHtml(todo));





// const newTodo = new Todo('Aprender JS!');
// // todoList.nuevoTodo(newTodo);
// // console.log('todos: ', todoList.todos);

// newTodo.imprimirClase();

todoList.todos[0].imprimirClase();