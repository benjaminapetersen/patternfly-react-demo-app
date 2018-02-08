import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.foo = 'Foo foo!';
    // initial state is just set in the constructor,
    // rather than a getIntialState() fn
    this.state = {

    };
    // kinda meh.
    // handleSecondClick is done in jsx below, not much better.
    this.handleSecondClick = this.handleSecondClick.bind(this);
  }
  handleFirstClick() {
    // with es6 classes, the `this` here will
    // be null by default as properties of the
    // class do not automatically bind to the React
    // class instance.  Thats.... lame.
    console.log('Click 1!', this);
  }
  handleSecondClick() {
    // `this` has been bound in the constructor, meh.
    console.log('Click 2!', this);
  }
  handleThirdClick() {
    // `this` has been bound in jsx, meh.
    console.log('Click 3!', this);
  }
  render() {
    // jsx will figure out the array below.
    let list = [
      <li key="0">
        <Link to="foo/bar">Foo/bar (ill break!)</Link>
      </li>,
      <li key="1">{this.foo}</li>,
      <li key="2">
        <a href="" onClick={this.handleFirstClick}>
          Click 1
        </a>
      </li>,
      <li key="3">
        <a href="" onClick={this.handleSecondClick}>
          Click 2
        </a>
      </li>,
      <li key="4">
        <a href="" onClick={this.handleThirdClick.bind(this)}>
          Click 3
        </a>
      </li>
    ];

    return (
      <ul>
        {list}
      </ul>
    );
  }
};

// slight difference from React.createClass, propTypes is
// now a property of the actual Foo class.
Foo.propTypes = {

};

// the getDefaultProps() fn from React.createClass object
// definitions is also now just an object property on the class.
// its no longer a `get` fn.
Foo.defaultProps = {

};
