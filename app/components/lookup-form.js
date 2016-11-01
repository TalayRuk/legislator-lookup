import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var zips = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', zips);
    }
  }
});
