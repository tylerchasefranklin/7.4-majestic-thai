var React = require('react');

var HeaderComponent = require('./header.jsx').HeaderComponent;
var FooterComponent = require('./footer.jsx').FooterComponent;
var TemplateComponent = require('./template.jsx').TemplateComponent;
var DishGalleryComponent = require('./dishgallery.jsx').DishGalleryComponent;

var AppComponent = React.createClass({
  render: function(){
    return (
      <div className="page">
        <HeaderComponent />
        <TemplateComponent />
        <DishGalleryComponent />
        <FooterComponent />
      </div>
    )
  }
});


module.exports = {
  AppComponent: AppComponent
};
