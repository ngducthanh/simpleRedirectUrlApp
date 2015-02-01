Meteor.methods({
  urlInsert: function(urlItem) {
    UrlCollection.insert(urlItem);
  }
});