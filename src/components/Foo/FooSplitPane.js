import React from 'react';

import styles from './FooSplitPane.css';


// https://reactjs.org/docs/composition-vs-inheritance.html
const FooSplitPane = (props) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
};

export default FooSplitPane;
