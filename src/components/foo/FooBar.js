// @DEPRECATED
// React.createClass() is deprecated form React@16+
// and has been moved to a separate package called
// `create-react-class`.  Starting fresh, dont use it.
// this file exists for learning purposes.
import * as React from 'react';

const someMixin = {

};

// React.createClass() is superceded by
// extends React.Component.  See 'Foo.js'
const FooBar = React.createClass({
  // this was kind of cool, but no longer supported
  // with extend React.Component
  mixins: [someMixin],
  // this puts propTypes as a part of the object that
  // is used to define the class.  This is also different.
  propTypes: {

  },
  getDefaultProps() {
    return {

    }
  },
  getInitialState() {

  },
  handleClick() {
    // with React.createClass, this will log the
    // React Component Instance
    console.log('Clicked!', this);
  },
  render() {
    return (
      <div>
        <a
          href="#"
          onClick={this.handleClick}>Click</a>
      </div>
    )
  }
});

export default FooBar;
