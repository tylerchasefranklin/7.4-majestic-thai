var React = require('react');

var FooterComponent = React.createClass({
  render: function(){
    return (
      <div className="footer container-fluid">
        <h1>Footer Here</h1>
        <FooterLinksComponent />
      </div>
    )
  }
});

var FooterLinksComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <nav className="navbar-fluid navbar-default navbar-static-bottom">
          Nav Links Here
        </nav>
      </div>
    )
  }
});


module.exports = {
  FooterComponent: FooterComponent
};
