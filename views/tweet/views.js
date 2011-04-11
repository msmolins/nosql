var couchapp = require('couchapp');
ddoc = {
    _id: '_design/app'
  , views: {}
}
module.exports = ddoc;

ddoc.views.byTags = {
  map: function(doc) {
   for (var k in doc.tags)
      emit(doc.tags[k], doc.quotation);
  },
  reduce: "_count"
}

ddoc.views.toWordCloud = {
  map: function(doc) {
   for (var k in doc.tags)
     emit({tag: doc.tags[k], quotation: doc.quotation}, null);
  },
  reduce: function(keys, values) {
    return null;
  }
}