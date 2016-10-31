var React = require('react');

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <h1>Majestic Thai!</h1>
        <HeaderLinksComponent />
        <BannerComponent />
      </div>
    )
  }
});

var HeaderLinksComponent = React.createClass({
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

var BannerComponent = React.createClass({
  render: function(){
    return (
      <div className="banner">
        <h1>Graphic Banner Here!</h1>
        <BannerLinksComponent />
      </div>
    )
  }
});

var BannerLinksComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <nav className="navbar-fluid navbar-default navbar-static-bottom">
          More Nav Links Here
        </nav>
      </div>
    )
  }
});


module.exports = {
  HeaderComponent: HeaderComponent
};
