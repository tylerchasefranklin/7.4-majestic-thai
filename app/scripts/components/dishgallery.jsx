var React = require('react');

var DishGalleryComponent = React.createClass({
  render: function(){
    return (
      <div className="gallery container-fluid">
        <h3>Popular Dishes!</h3>
        <DishPictureComponent />
      </div>
    )
  }
});

var DishPictureComponent = React.createClass({
  render: function(){
    return (
      <img className="dish-picture" src="#" alt="Dish Picture"></img>
    )
  }
});

module.exports = {
  DishGalleryComponent: DishGalleryComponent
};
