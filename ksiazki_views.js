var couchapp = require('couchapp');
ddoc = {
    _id: '_design/app'
  , views: {}
}
module.exports = ddoc;

ddoc.views.notNull = {
  map: function(doc) function(doc) {
  for(key in doc)
    if(doc[key] != '' && doc[key] !=null)
      emit(key, doc);
  },
  reduce: "_count"
}
ddoc.views.null = {
  map: function(doc) {
	for(key in doc)
		if(doc[key] == null)
			emit(key, doc);
  },
  reduce: "_count"
}
ddoc.views.empty = {
  map: function(doc) {
	for(key in doc)
		if(doc[key] == "")
			emit(key, doc);
  },
  reduce: "_count"
}
