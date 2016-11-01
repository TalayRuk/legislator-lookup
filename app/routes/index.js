import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
      //route to "results route"
      //thus we need to create route called results
      //Next we'll go to app/router.js to add route results path
    }
  }
});
