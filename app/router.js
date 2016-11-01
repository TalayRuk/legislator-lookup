import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  //add {path:'/results ..'} as dynamic segment in the route URL which will have the zip code we got from user
});

export default Router;
