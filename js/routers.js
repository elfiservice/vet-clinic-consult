var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "" : "index",
        "vet-details" : "vetDetails"
    },

    index: function() {
        new app.IndexView();
    },

    vetDetails: function() {
        new app.VetDetail()
    }
})

