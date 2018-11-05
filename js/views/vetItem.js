var app = app || {};

app.VetItem = Backbone.View.extend({
  tagName: 'tr',
  className: 'vetContainer',
  template: _.template( $('#vetTemplate').html() ),


  render: function() {
    this.$el.html( this.template( this.model.attributes ) );

    return this;
  },

});