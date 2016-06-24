import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.css';

const title = 'Hello world!';

function Test(props, context) {
  context.setTitle(title);
  return(
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>This is test.</p>
      </div>
    </div>
  );
}

Test.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Test);
