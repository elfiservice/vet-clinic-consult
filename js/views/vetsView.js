var app = app || {};

app.VetsView = Backbone.View.extend({
  el: "#vet-list",

  initialize: function() {
    this.vetList = new app.VetList();
    
    this.vetList.fetch()
        .then( res => this.render() )
  },
  render: function() {
    this.vetList.each(function( vet ){
      this.renderVetItem( vet );
    }, this);
  },

  renderVetItem: function( vet ) {
    var vetItem = new app.VetItem({
      model: vet
    });
    this.$el.append( vetItem.render().el );
  },

  renderBySearch: function(newVetsSearch) {
    this.$el.empty();
    newVetsSearch.each(function( vet ){
      this.renderVetItem( vet );
    }, this);
  }

});
