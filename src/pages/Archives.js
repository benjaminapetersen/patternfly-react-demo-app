import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState/EmptyState';

import Article from '../components/Article/Article';

class ArchivesPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    // can map an array to some components
    const articles = [
      {title: 'Udon Noodles', url: 'archives/noodles?type=udon'},
      {title: 'Soba Noodles', url: 'archives/noodles?type=soba'},
      {title: 'Wonton Noodles', url: 'archives/noodles?type=wonton'},
      {title: 'Pad Thai', url: 'archives/noodles?type=padthai'},
      {title: 'Lo Mein', url: 'archives/noodles?type=lomein'}
    // key is unique index to improve rendering
    // es6 spread operator
    ].map((article, i) => <li><Article key={i} {...article} /></li> );

    const randomStuff = [
      'Random thing #1',
      'Random stuff #2',
      'Random stuff and things #3'
    ];

    const randomThing = randomStuff[
      Math.round( Math.random() * (randomStuff.length -1) )
    ];

    console.log('articles', articles);

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
            <div>{randomThing}</div>
            <ul>
              {articles}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArchivesPage);
