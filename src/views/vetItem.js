var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

const VetItem = Backbone.View.extend({
  tagName: 'tr',
  className: 'vetContainer',
  template: _.template( $('#vetTemplate').html() ),


  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  },

});

module.exports = VetItem;