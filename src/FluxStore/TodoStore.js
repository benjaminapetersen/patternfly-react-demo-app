// EventEmitter is built into node.js
// this is very convenient
import { EventEmitter } from "events";

import Dispatcher from '../Flux/FluxDispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    let count = 0;
    // dummy to start
    this.todos = [
      { id: count++, text: 'Thing to do', complete: false },
      { id: count++, text: 'Other thing to do', complete: false },
    ];
  }
  createTodo(text) {
    this.todos.push({
      text,
      complete: false,
      id: Date.now()
    });
    // on change, listeners can get this event
    this.emit('change');
  }
  receiveTodos(todos) {
    this.todos = todos;
    this.emit('change');
  }
  clearTodos() {
    this.todos = [];
    this.emit('change');
  }
  getAll() {
    return this.todos;
  }
  // fn to register with the dispatcher in Flux
  // tho we hear about EVERY action from the dispatcher,
  // we only pay attention to those we care about
  // and components registered with this Store only respond
  // to relevent events, when the store emits its own event.
  // This double-event system is decoupled, creating lots of
  // room to scale up to thousands of actions.
  handleActions(action) {
    console.log('TodoStore received an action:', action.type);
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.text);
        break;
      }
      case 'RECEIVE_TODOS': {
        this.receiveTodos(action.todos);
        break;
      }
      case 'FETCH_TODOS': {
        this.clearTodos();
        break;
      }
    }
  }
}

const todoStore = new TodoStore();

// register so we can receice actions
Dispatcher.register(todoStore.handleActions.bind(todoStore));

// for testing, expose globally:
window.todoStore = todoStore;
window.Dispatcher = Dispatcher;

export default todoStore;
