var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

var MenuItemCollection = require('../models/items').MenuItemCollection;

var MenuListItem = React.createClass({
  render: function(){
    var model = this.props.model;
    return (
      <li> {model.get("item")} </li>
    );
  }
})

var MenuListComponent = React.createClass({
  render: function(){
    var collection = this.props.menu;
    console.log(collection);

    var listOfItems = collection.map(function(item){
      return (
        <MenuListItem
          key={item.get('_id')}
          model={item}
        />
      );
    });

    // console.log(listOfItems);
    return (
      <div className="col-md-8">
        <h3>Menu List</h3>
        <ul className="menu-list">
          {listOfItems}
        </ul>
      </div>
    )
  }
});

// Will use this

// <div className="col-md-8">
//   <h3>Category List</h3>
//   <ul className="category-list">
//     <li className="menu-category"><a href="#">Appetizers</a></li>
//     <li className="menu-category"><a href="#">Entrees</a></li>
//     <li className="menu-category"><a href="#">Soups and Salads</a></li>
//     <li className="menu-category"><a href="#">Sides and Extras</a></li>
//   </ul>
// </div>

module.exports = {
  MenuListComponent: MenuListComponent
};
