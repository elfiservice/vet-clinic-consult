var Backbone = require('backbone');

const VetModel = Backbone.Model.extend({
    defaults: {
        id: 0,
        name: "",
        specialist: "",
        description: ""
    },
    urlRoot: 'http://localhost:3000/vets'
});

module.exports = VetModel;