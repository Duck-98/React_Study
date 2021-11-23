const React = require('react');
const ReactDom = require('react-dom'); 

const WordGame = require('./WordGame.jsx');  

ReactDom.render(<WordGame />, document.querySelector('#root'));