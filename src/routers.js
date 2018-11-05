// var app = app || {};
var Backbone = require('backbone')
var IndexView = require('./views/indexView')
var VetDetail = require('./views/vetDetail')

const Router = Backbone.Router.extend({
    routes: {
        "" : "index",
        "vet-details/:id" : "vetDetails"
    },

    index: function() {
        new IndexView();
    },

    vetDetails: function(vetId) {
        new VetDetail({ model: vetId });
    },
})

new Router();
Backbone.history.start();

module.exports = Router;