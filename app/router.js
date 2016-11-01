import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  //add {path:'/results ..'} as dynamic segment in the route URL which will have the zip code we got from user
  //next is to create model hook at route results.js where we'll implement APIkeys
});

export default Router;
// Now, when we submit the form in our lookup-form component located on the index, the component will grab the parameters from the form, pass the zipLookup() action and its parameters from the component, through the index template, and to the index route. Once on the index route handler, we will transition to the results route using zip code from the form (currently located in params) to fill the dynamic portion of the results route's URL.
