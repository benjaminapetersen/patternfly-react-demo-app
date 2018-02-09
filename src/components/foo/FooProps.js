import * as React from 'react';


// Props should be used more than state
export default class FooProps extends React.Component {
  // this component takes timestamp in as a prop, but
  // as the parent updates this prop, there is not a
  // natural re-render.  odd?

  render() {
    const { timestamp } = this.props;
    return (
      <div>
        <strong>name (props):</strong> {timestamp} (changing?)
      </div>
    );
  }
}

// props are passed from above, but a component is allowed to
// define defaults here.
FooProps.defaultProps = {
  timestamp: '???'
}
