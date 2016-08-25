var React = require('react');
var ReactDOM = require('react-dom');
var LeadCapture = require('./LeadCapture');
var App = React.createClass({
  render : function(){
    return <LeadCapture /> ;
  }
});

module.exports = App ;
