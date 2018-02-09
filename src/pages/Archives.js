import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState/EmptyState';

class ArchivesPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Archives</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>
                <Link to="archives/noodles?type=udon">Udon Noodles!</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArchivesPage);
