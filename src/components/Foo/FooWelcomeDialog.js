import React from 'react';

import FooDialog from './FooDialog';
import FooFancyBorder from './FooFancyBorder';

// https://reactjs.org/docs/composition-vs-inheritance.html
// composition is more powerful than inheritance
// this builds the <foo-welcome-dialog> around the
// <foo-fancy-border>, and then renders out any children inside
const FooWelcomeDialog = (props) => {
  // we just making all the fancy borders
  return (
    <FooDialog title={props.title}>
      <FooFancyBorder color="red">
        {props.children}
      </FooFancyBorder>
    </FooDialog>
  );
};

export default FooWelcomeDialog;
