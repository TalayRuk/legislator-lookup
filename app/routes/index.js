import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(zips) {
      this.transitionTo('results', zips.zip);
    }
  }
});
