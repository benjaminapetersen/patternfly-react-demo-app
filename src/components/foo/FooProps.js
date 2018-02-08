import * as React from 'react';

export default class FooProps extends React.Component {
  // this component takes timestamp in as a prop, but
  // as the parent updates this prop, there is not a
  // natural re-render.  odd?

  render() {
    return (
      <div>
        <strong>name:</strong> FooProps {this.props.timestamp}
      </div>
    );
  }
}
