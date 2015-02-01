Template.redirect.rendered = function() {
  if ( this.data.url ) {
    console.log('New location: '+ this.data.url);
  } else {
    console.log('No where');
  }
}
Template.redirect.helpers({
  url: function() {
    return this.url;
  }
});