var React = require('react');
var EmailField = require('./EmailField');
var NameField = require('./NameField');

var LeadCapture = React.createClass({
  handleSubmit: function(){
      if(!this.refs.fieldEmail.state.valid){
        alert("error");
      } else{
        var httpRequestBody = {
          email: this.refs.fieldEmail.state.value,
          firstName: this.refs.fieldName.state.value
        };
        this.refs.fieldEmail.clear();
        this.refs.fieldName.clear();

      }
  },

  render: function(){
     return(
       <div className="col-sm-3">
         <div className="panel panel-default">
           <div className="panel-body">
              <NameField type="First" ref="fieldName"/>
              <EmailField ref="fieldEmail"/>
              <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
           </div>
         </div>
       </div>
     );
  }
});

module.exports = LeadCapture;
