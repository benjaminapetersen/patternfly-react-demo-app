import React from 'react';

import FooFancyBorder from './FooFancyBorder';

const FooDialog = (props) => {
  return (
    <FooFancyBorder color="blue">
    <h1 className="Dialog-title">
      {props.title || 'Welcome'}
    </h1>
    {
      props.children ?
        props.children :
        <p className="Dialog-message">
          Your content goes here.
        </p>
    }
    </FooFancyBorder>
  );
};

export default FooDialog;
