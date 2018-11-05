var Backbone = require('backbone');
var VetModel = require('../models/vetModel')

const VetList = Backbone.Collection.extend({
  model: VetModel,
  url: 'http://localhost:3000/vets'
});

module.exports = VetList;