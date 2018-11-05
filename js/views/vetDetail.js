var app = app || {};

app.VetDetail = Backbone.View.extend({
    el: '#main_app',
    template: _.template( $('#vet_detail_template').html() ),
  
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html( this.template() )
        return this;
    },
  });