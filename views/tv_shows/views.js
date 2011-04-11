var couchapp = require('couchapp');
ddoc = {
    _id: '_design/statistics'
  , views: {}
}
module.exports = ddoc;

ddoc.views.countryCount = {
  map: function(doc) {
    if(doc.country_of_origin != "unknown"){    
      var countries = doc.country_of_origin.split(",");
      for (var i = 0, len = countries.length; i < len; i++) {
        var country = countries[i];
            emit(country, 1);
      }
    }
  },
  reduce: "_count"
}
ddoc.views.programHoursCount = {
  map: function(doc) {
    if(doc.episode_running_time != "" && doc.number_of_episodes != "")
      emit(doc.name, doc.episode_running_time * doc.number_of_episodes / 60 );    
  },  
}
ddoc.views.toTimeline = {
  map: function(doc) {
    var start;
    var end;
    if(doc.air_date_of_first_episode != "" && doc.air_date_of_final_episode != "" && doc.currently_in_production == "false") {
      start = doc.air_date_of_first_episode;
      end = doc.air_date_of_final_episode;
      emit({start: start, end: end, title: doc.name, description: doc.genre}, null);
  },
  reduce: function(keys, values) {
    return null;
  }
}
ddoc.views.toDrasticTree = {
  map: function(doc) {
    if((doc.genre != "" && doc.genre != "unknown") && (doc.country_of_origin != "" && doc.country_of_origin != "unknown")) {
      var genres = doc.genre.split(",");
      genres.forEach(function(type) {
        var countries = doc.country_of_origin.split(",");
        for (var i = 0, len = countries.length; i < len; i++) {
          var country = countries[i];
          emit({nation: country, genre: type}, null);
        } 
      });
    }
  },
  reduce: "_count"
}
ddoc.views.showsDurationInCountries = {
  map: function(doc) {
    if(doc.episode_running_time != "" && doc.number_of_episodes != "" && doc.country_of_origin != "" && doc.country_of_origin != "unknown") {
      var countries = doc.country_of_origin.split(",");
      for (var i = 0, len = countries.length; i < len; i++) {
        var country = countries[i];
        var runningTime = parseInt(doc.episode_running_time);
        var numberEpisodes = parseInt(doc.number_of_episodes);
        emit({nation: country}, {timeTotal: runningTime * numberEpisodes / 60 / 24});
      } 
    }
  },
  reduce: function(keys, values, rereduce) {   
    var time= 0;
    values.forEach(function(element) {
      time += element.timeTotal;
    });
    return {timeTotal: time};
  }
}