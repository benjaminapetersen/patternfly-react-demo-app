aimport * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class MobxTodoPage extends React.Component {
  render() {
    console.log('Allo?');
    const todoComponents = ['Hi'];
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>MobX Todos</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>{todoComponents}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MobxTodoPage);
