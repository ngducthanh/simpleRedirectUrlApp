Router.configure({
  layoutTemplate: 'layout'
})
Router.route('/', {
  name: 'home',
  waitOn: function() {
    Meteor.subscribe('getUrl');
  }
});
Router.route('/redirect/:_id', {
  name: 'redirect',
  waitOn: function() {
    Meteor.subscribe('getUrl', this.params._id);
  },
  data: function() {
    return UrlCollection.findOne({_id: this.params._id});
  }
});