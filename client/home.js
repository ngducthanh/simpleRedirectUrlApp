Template.home.helpers({
  urls: function(){
    return UrlCollection.find();
  }
});
Template.home.events({
  'click #add': function() {
    var urlItem = {
      url: $('#url').val(),
      des: $('#description').val()
    };

    Meteor.call('urlInsert', urlItem);
  }
});