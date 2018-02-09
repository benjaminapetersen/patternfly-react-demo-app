import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState/EmptyState';

class FooChildPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <EmptyState title="Foo Child Page" />
        nom nom
      </div>
    );
  }
}

export default withRouter(FooChildPage);