$(document).ready(function () {

  var Trackster = {};

  /*
    Given an array  of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {
    // console.log(tracks);
    var xlimit = tracks.tracks.limit;
    console.log(xlimit);
    console.log(tracks);

    for(i=0; i<xlimit; i++) {
      var xprev = tracks.tracks.items[i].preview_url;
      var xtitle = tracks.tracks.items[i].name;
      var xartist = tracks.tracks.items[i].artists[0].name;
      var xalbum = tracks.tracks.items[i].album.name;
      var xpopularity = tracks.tracks.items[i].popularity;
      console.log(xalbum);
    }



  };

  /*
    Given a search term as a string, query the Spotify API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url:'https://api.spotify.com/v1/search?type=track&q=' + title,
      success: function(data) {
        // console.log(data);
        Trackster.renderTracks(data)
      }

    })
  };
  $('#search-button').click(function() {

    var srch = $('#search-input').val();
    // var title = $('#title-input').val();
    Trackster.searchTracksByTitle(srch);
  });

});
