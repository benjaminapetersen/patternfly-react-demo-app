import React from 'react';

import styles from './Todo.css';

export default class Todo extends React.Component {
  render() {
    const {id, text, complete} = this.props;
    return (
      <div key={id}>{text}</div>
    );
  }
}

Todo.defaultProps = {
  id: '',
  text: '',
  complete: false
};
