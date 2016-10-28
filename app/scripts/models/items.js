var Backbone = require('backbone');
var $ = require('jquery');

var MenuItem = Backbone.Model.extend({

});

var ItemCollection = Backbone.Collection.extend({
  model: Item,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/menu'
});
