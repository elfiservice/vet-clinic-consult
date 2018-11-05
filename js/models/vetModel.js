var app = app || {};

app.VetModel = Backbone.Model.extend({
    defaults: {
        id: 0,
        name: "",
        specialist: "",
        description: ""
    },
    urlRoot: 'http://localhost:3000/vets'
});