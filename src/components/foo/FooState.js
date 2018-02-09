import * as React from 'react';

// https://reactjs.org/docs/faq-state.html
//   Props should be used more than state
//   ideally keep components as stateless as possible
// https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
//   Stateless components are preferred
//   Stateful components are State Managers, responsible for XHR, WebSockets, etc
//     use them minimally.
// http://lucybain.com/blog/2016/react-state-vs-pros/
//   State is for keeping track of information between renderings with the component itself
//
export default class FooState extends React.Component {
  constructor() {
    super();
    // yup, create state in the constructor
    //  - state can be hard-coded
    //  - or you can set state via props (gah!)
    // when state changes, components will re-render,
    // and if the DOM changes, react will update the DOM.
    // if it doesn't change, the DOM will not update.
    // if it does change, then only the specific updated
    // DOM nodes that have changed will be updated.
    this.state = {
      name: Date.now(),
      count: 1
    };
    this.handleClick = this.handleClick.bind(this);
    // nope! cuz this second one, is wrapped in a fat arrow in render...
    // this.handleClick = this.handleClick.bind(this);
    setInterval(() => {
      this.setState({
        name: Date.now()
      });
      console.log('updating state....', this.state.count, this.state.name);
    }, 1200);
  }
  handleClick() {
    // give set state a fn to ensure it always uses the latest value of state!
    this.setState((prevState, props) => {
      console.log('handleClick()', prevState, 'and props!', props);
      return {
        count: prevState.count + 1
      }
    });
  }
  // shows that you can put fat arrows in render & avoid the bind() stuff, if you prefer
  handleOtherClick() {
    this.setState((prevState, props) => {
      console.log('handleOtherClick()', prevState, 'and props!', props);
      return {
        count: prevState.count + 1
      }
    });
  }
  render() {
    // es6 desctructuring, woot
    const { name, count } = this.state;
    return (
      <div>
        <div>
          <strong>name (state):</strong> {name}
        </div>
        <div onClick={this.handleClick}>increment: {count}</div>
        <div onClick={() => { this.handleOtherClick() }}>increment: {count}</div>
      </div>
    );
  }
}
