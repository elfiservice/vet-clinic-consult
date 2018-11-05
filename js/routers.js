var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "" : "index",
        "vet-details/:id" : "vetDetails"
    },

    index: function() {
        new app.IndexView();
    },

    vetDetails: function(vetId) {
        new app.VetDetail({ model: vetId });
    },
})

