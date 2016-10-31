var Backbone = require('backbone');
var $ = require('jquery');

var OrderItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderItemCollection = Backbone.Collection.extend({
  model: OrderItem,
  total: function(){
    this.reduce(function(sum, model){
      return sum + parseFloat(model.get('price'));
    }, 0);
  }
});

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection,
  OrderItem: OrderItem,
  OrderItemCollection: OrderItemCollection
};
