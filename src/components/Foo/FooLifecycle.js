import React from 'react';

// https://reactjs.org/docs/react-component.html#componentwillmount
export default class FooLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'FooLifecycle';
    console.log(this.name, 'constructor()');
  }
  // mounting
  componentWillMount() {
    console.log(this.name, 'componentWillMount()');
  }
  render() {
    console.log(this.name, 'render()');
    return (<div>Foo Lifecycle</div>);
  }
  componentDidMount() {
    console.log(this.name, 'componentDidMount()');
  }
  // updating
  componentWillReceiveProps() {
    console.log(this.name, 'componentWillReceiveProps()');
  }
  shouldComponentUpdate() {
    console.log(this.name, 'shouldComponentUpdate()');
  }
  componentWillUpdate() {
    console.log(this.name, 'componentWillUpdate()');
  }
  componentDidUpdate() {
    console.log(this.name, 'componentDidUpdate()');
  }
  // unmounting
  componentWillUnmount() {
    console.log(this.name, 'componentWillUnmount()');
  }
  // method is called when there is an error
  componentDidCatch() {
    console.log(this.name, 'componentDidCatch()');        
  }
}
