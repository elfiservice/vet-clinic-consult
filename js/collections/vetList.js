var app = app || {};

app.VetList = Backbone.Collection.extend({
  model: app.VetModel,
  url: 'http://localhost:3000/vets'
});