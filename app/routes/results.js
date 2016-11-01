//after add the ENV.myApiKey in config/environment  import it here so we can use API key then add var key ...after that need to cancel server and run source .env then run ember s

import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey; //import it from config
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0aee23fb3b244c9683ec0f34b1a7fbe0&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
      //next -need to go to template(results.hbs) to display our results

    //arguement = params that we made it up in lookup-form.js which = parameters from URL
    //We set variable url to congress.api.sunlight ...& our api key in the query string
    //we use the jQuery getJSON method to make our API request
    //We use .then(function) b/c Ember is asynchronus. so w/o then method it'll makes a GET request & before it's finished, it'll start executing the next line. Thus no data has been received.
    //The getJSON method runs asynchronously & returns what's called a promise.
    //A promise is a standard way of dealing w/the results of asynchronous operations.
    //When getJSON receives a response from the server, it invokes the callback function passed to .then(), and the JSON from the response is assigned to the parameter, which we've called responseJSON
    //Now, in the callback function, we can add the code that should run after the response is received.
    });
  }
});
