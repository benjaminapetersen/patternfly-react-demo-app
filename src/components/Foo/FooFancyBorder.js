import * as React from 'react';

// we can import the styles & inline render them out!
import styles from './FooFancyBorder.css';

// this is pretty common in react
const defaultStyle = {
  background: '#f7fff6',
  // cotta camel case names
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.35)',
  margin: '4px',
  padding: '2px'
};

// if props.color = blue, color will change
const FooFancyBorder = (props) => {
  // this component illustrates that props.children
  // is how you nest components, much like any other
  // DOM nodes
  return (
    <div
      style={defaultStyle}
      className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
};

export default FooFancyBorder;
