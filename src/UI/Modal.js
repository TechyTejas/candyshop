import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const modalRoot = document.getElementById('modal');

export default function Modal() {
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.modalbackground}>
        <div className={classes.modal}>
          <h1>Modal Title</h1>
          {/* Modal content goes here */}
           
        </div>
      </div>
    </Fragment>,
    modalRoot
  );
}
