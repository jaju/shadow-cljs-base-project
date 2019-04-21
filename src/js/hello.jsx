import React from "react";
import ReactDOM from 'react-dom';

export const showHello = (elementId, title) =>
  ReactDOM.render(
  <div>{title}</div>,
  document.getElementById(elementId)
);

export const sayHello = subject => console.log(`Hello, ${subject}!`);
