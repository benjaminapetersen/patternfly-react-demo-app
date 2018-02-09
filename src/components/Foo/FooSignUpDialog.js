import React from 'react';

import FooDialog from './FooDialog';

// https://reactjs.org/docs/composition-vs-inheritance.html
// inheritance is highly discouraged.
// tutorial author indicates there is NO inheritance used @ FB
// across thousands of components!
// props can be arbitrary values, components & functions, thats all
// that should be needed.
export default class FooSignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <FooDialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </FooDialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
