var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var VetModel = require('../models/vetModel')

const VetDetail = Backbone.View.extend({
    el: '#main_app',
    template: _.template( $('#vet_detail_template').html() ),
  
    initialize: function() {
        var vetId = this.model;
        this.vetModel = new VetModel({ id: vetId });

        this.vetModel.fetch()
        .then( res => this.render() )
    },
    render: function() {
        this.$el.html( this.template(this.vetModel.attributes) )
        return this;
    },
  });

  module.exports = VetDetail;