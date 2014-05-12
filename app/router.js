var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('job', { path: '/jobs/:job_id' });
  this.resource('admin', function() {
    this.route('job', { path: '/jobs/:job_id' });
  });
});

export default Router;
