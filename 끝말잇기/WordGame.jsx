const React = require('react');
const {Component} = React;

class WordGame extends Component {
    state={
        text:"HI"
   };
   
    render(){
        return <h1>{this.state.text}</h1>;
   }
}

module.exports = WordGame;