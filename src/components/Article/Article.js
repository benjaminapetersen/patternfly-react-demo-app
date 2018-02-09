import React from 'react';
import { Link } from 'react-router-dom';

export default class Article extends React.Component {
  render() {
    return (
      <Link to={this.props.url}>{this.props.title}</Link>
    );
  }
}
