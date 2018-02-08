import * as React from 'react';

export default class FooEvents extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    // e is the elem receiving the change
    const title = e.target.value;
    console.log('woop!', title);
    this.props.changeTitle(title);
  }
  render() {
    // nifty loop trigger. woop
    // this.props.changeTitle('newTitle!');
    return (
      <div>
        <div>Hi, {this.props.title}</div>
        <div>
          <input value={this.props.title} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
