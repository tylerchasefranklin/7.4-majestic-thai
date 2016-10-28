var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');

var HeaderComponent = require('./components/header.jsx').HeaderComponent;



var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'orders/': 'orders',
  },
  index: function(){
    console.log(this);
    ReactDOM.render(
      React.createElement(HeaderComponent, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
