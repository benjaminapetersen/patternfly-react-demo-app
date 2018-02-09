import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Foo from '../components/Foo/Foo';
import FooLifecycle from '../components/Foo/FooLifecycle';
import FooState from '../components/Foo/FooState';
import FooProps from '../components/Foo/FooProps';
import FooEvents from '../components/Foo/FooEvents';

import FooFancyBorder from '../components/Foo/FooFancyBorder';
import FooWelcomeDialog from '../components/Foo/FooWelcomeDialog';
import FooSignUpDialog from '../components/Foo/FooSignUpDialog';
import FooSplitPane from '../components/Foo/FooSplitPane';

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

    let left = [<div>left stuff goes left</div>];
    let right = [<div>right stuff goes right</div>];

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
            <FooLifecycle />
            <FooState />
            <FooProps timestamp={timestamp} />
            <FooEvents
              changeTitle={this.changeTitle}
              title={this.state.title}
            />
            <FooFancyBorder>
              <div>Not so fancy...</div>
            </FooFancyBorder>
            <FooFancyBorder color="blue">
              <div>Now its fancy</div>
            </FooFancyBorder>
            <FooWelcomeDialog title="Hiya">
              <p>Greetings. This is a fancy foo dialog</p>
            </FooWelcomeDialog>
            <FooSplitPane left={left} right={right}></FooSplitPane>
            <FooSignUpDialog></FooSignUpDialog>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FooPage);
