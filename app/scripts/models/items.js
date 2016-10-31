var Backbone = require('backbone');
var $ = require('jquery');

var MenuItem = Backbone.Model.extend({

});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/menu'
});


module.exports = {
  MenuItem: MenuItem,
  MenuItemCollection: MenuItemCollection
};
