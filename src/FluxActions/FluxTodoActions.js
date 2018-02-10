import Dispatcher from '../Flux/FluxDispatcher';

// and just simply export function actions
export function createTodo(text) {
  const id = Date.now();
  Dispatcher.dispatch({
    type: 'CREATE_TODO',
    // es6
    text,
    id
  });
}

export function deleteTodo(id) {
  Dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}

export function reloadTodos() {
  // this emulates an http rquest with a timeout:
  // axios('https://someurl.com/somedataendpoint').then((data) => {
  //
  // });
  // notify the app that we are fetching
  Dispatcher.dispatch({ type: 'FETCH_TODOS' });
  // FAKE HTTP
  setTimeout(() => {
    // FAKE HTTP RESPONSE:
    Dispatcher.dispatch({
      type: 'RECEIVE_TODOS',
      todos: [
        {
          id: 12345,
          text: 'Go shopping for an indestructible titanium pen',
          complete: false
        },
        {
          id: 23456,
          text: 'Go hiking in the Andes',
          complete: false
        },
        {
          id: 34567,
          text: 'Go skuba diving in Cenote Esqueleto (The Temple of Doom)',
          complete: false
        }
      ]
    });
  }, 400);
}
