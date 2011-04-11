var couchapp = require('couchapp');
ddoc = {
    _id: '_design/app'
  , views: {}
}
module.exports = ddoc;

ddoc.views.toTimeline = {
  map: function(doc) {
	if(doc.overview != "No overview found.")
      emit({title: doc.name, start: doc.released, link: doc.url, description: doc.overview, icon: doc.posters[3].image.url}, null);
  },
  reduce: function(keys, values) {return null;}
}  