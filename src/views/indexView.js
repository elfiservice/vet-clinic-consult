var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var VetsView = require('./vetsView')

const IndexView = Backbone.View.extend({
    el: '#main_app',
    template: _.template( $('#index_template').html() ),
  
    initialize: function() {
        this.render();
        this.vetsView = new VetsView();

        this.vetsListInitial = this.vetsView.vetList.models
        this.on('change:searchFilter', this.filterBySearch, this);
        this.vetsView.vetList.on('reset', this.renderVetsView, this);
    },

    events: {
        'keyup #search_vet' : 'searchFilter'
    },

    render: function() {
        this.$el.html( this.template() )
        return this;
    },

    renderVetsView: function(newVetsSearch) {
        this.vetsView.renderBySearch(newVetsSearch);
    },

    searchFilter: function(e) {
        this.searchFilterString = e.target.value;
        this.trigger('change:searchFilter');
    },

    filterBySearch: function() {
        this.vetsView.vetList.reset(this.vetsListInitial);  //reset to Inital Data before filter
        var filterString = this.searchFilterString;
        var filtered = _.filter(this.vetsView.vetList.models, function(item) {
            return item.get('name').toLowerCase()
                    .indexOf(filterString.toLowerCase())
                    !== -1;
            });
        this.vetsView.vetList.reset(filtered);
    }

  });

  module.exports = IndexView;