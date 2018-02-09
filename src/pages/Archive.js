import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState/EmptyState';

class ArchivePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    console.log('Props?', this.props);
    // es6 destructure. this is not the most optimal usage, but its interesting
    const {match} = this.props;
    const {params} = match;
    const {archive} = params;

    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Archive: {archive}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            Stuff....
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArchivePage);
