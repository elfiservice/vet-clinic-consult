var app = app || {};

app.VetDetail = Backbone.View.extend({
    el: '#main_app',
    template: _.template( $('#vet_detail_template').html() ),
  
    initialize: function() {
        var vetId = this.model;
        this.vetModel = new app.VetModel({ id: vetId });

        this.vetModel.fetch()
        .then( res => this.render() )

    },
    render: function() {
        console.log(this.vetModel.get('name'));
        
        this.$el.html( this.template(this.vetModel) )
        return this;
    },
  });