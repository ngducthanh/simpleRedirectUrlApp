Meteor.publish('getUrl', function(_id) {
  if ( _id ) {
    return UrlCollection.find({_id: _id});
  } else {
    return UrlCollection.find();
  }
});