import * as React from 'react';

export default class FooState extends React.Component {
  constructor() {
    super();
    // when state changes, components will re-render,
    // and if the DOM changes, react will update the DOM.
    // if it doesn't change, the DOM will not update.
    // if it does change, then only the specific updated
    // DOM nodes that have changed will be updated.
    this.state = {
      name: 'FooState'
    };

    setInterval(() => {
      this.setState({
        name: 'FooState ' + Date.now()
      });
      console.log('updating state....');
    }, 1200);
  }
  render() {
    return (
      <div>
        <strong>name:</strong> {this.state.name}
      </div>
    );
  }
}
