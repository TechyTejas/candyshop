import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('modal');

export default function Modal() {
  return (
    <Fragment>
      {ReactDOM.createPortal(<h1>tejas</h1>, modal)}
    </Fragment>
  );
}
