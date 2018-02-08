import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Foo from '../components/foo/Foo';
import FooState from '../components/foo/FooState';
import FooProps from '../components/foo/FooProps';
import FooEvents from '../components/foo/FooEvents';

class FooPage extends React.Component<RouteComponentProps<any>, {}> {
  constructor() {
    super();
    this.state = {
      title: 'Bob'
    };
    // meh.
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(title) {
    console.log('Called?', title);
    this.setState({ title });
  }
  render() {
    let timestamp = Date.now();
    setInterval(() => {
      timestamp = Date.now();
    }, 1000);

    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Foo</h1> {this.state.title}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Foo />
            <FooState />
            <FooProps timestamp={timestamp} />
            <FooEvents
              changeTitle={this.changeTitle}
              title={this.state.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FooPage);
