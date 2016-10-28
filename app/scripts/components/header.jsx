var React = require('react');

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <h1>Majestic Thai!</h1>
        <HeaderLinksComponent />
      </div>
    )
  }
});

var HeaderLinksComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <nav className="navbar-fluid navbar-default navbar-static-bottom">
          Hello!
        </nav>
      </div>
    )
  }
});


module.exports = {
  HeaderComponent: HeaderComponent
};
