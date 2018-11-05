var $ = require('jquery')
var Backbone = require('backbone')
var VetList = require('../collections/vetList')
var VetItem = require('./vetItem')

const VetsView = Backbone.View.extend({
  el: "#vet-list",

  initialize: function () {
    this.vetList = new VetList();

    this.vetList.fetch()
      .then(res => this.render())
  },
  render: function () {
    this.vetList.each(function (vet) {
      this.renderVetItem(vet);
    }, this);
  },

  renderVetItem: function (vet) {
    var vetItem = new VetItem({
      model: vet
    });
    this.$el.append(vetItem.render().el);
  },

  renderBySearch: function (newVetsSearch) {
    this.$el.empty();
    newVetsSearch.each(function (vet) {
      this.renderVetItem(vet);
    }, this);
  }

});

module.exports = VetsView;