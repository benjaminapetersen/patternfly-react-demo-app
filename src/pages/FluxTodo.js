import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState/EmptyState';

import * as TodoActions from '../FluxActions/FluxTodoActions';
import TodoStore from '../FluxStore/TodoStore';
import Todo from '../components/FluxTodo/Todo';

// picking up from the flux tutorial:
// https://www.youtube.com/watch?v=PvjNglsyOHs&index=9&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
class FluxTodoPage extends React.Component<RouteComponentProps<any>, {}> {
  constructor() {
    super();

    let count = 1;

    this.state = {
      todos: TodoStore.getAll(),
      newText: ''
    };
    this.getTodos = this.getTodos.bind(this);
    this.reloadTodos = this.reloadTodos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this will only happen once, so is the best place to put
  // event listeners
  componentWillMount() {
    // listen to the store for changes && update our state
    // let React decide how to render things out
    TodoStore.on('change', this.getTodos);
    // NOTE: if you don't clean up your event listeners,
    // you will create memory leaks!
    console.log('TodoStore listener count:', TodoStore.listenerCount('change'));
  }
  // yay, cleanup
  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos);
  }
  getTodos() {
    this.setState((prevState, props) => {
      return {
        todos: TodoStore.getAll()
      };
    });
  }
  reloadTodos() {
    TodoActions.reloadTodos();
  }
  handleSubmit(event) {
    event.preventDefault();
    TodoActions.createTodo(this.state.newText);
    this.state.newText = '';
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState((prevState, props) => {
      return {
        newText: value
      }
    });
  }
  // Forms
  // Controlled Components: https://reactjs.org/docs/forms.html
  // Uncontrolled Components: https://reactjs.org/docs/uncontrolled-components.html
  render() {
    const {todos} = this.state;
    const todoComponents = todos.map((todo, i) => {
      return <li key={i}><Todo {...todo} /></li>
    });
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Flux Todos</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>{todoComponents}</ul>
          </div>
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="todo"
                value={this.state.newText}
                onChange={this.handleChange}/>
              <input type="submit" value="Create!" />
            </form>
            <button onClick={this.reloadTodos}>Reload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FluxTodoPage);
