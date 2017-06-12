$(document).ready(function () {

  var Trackster = {};
  var API_KEY = "f829e7e6646f98349aa3c64cb1b2999c";


  /*
    Given an array  of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {
    // console.log(tracks);
    $( "#track-list" ).empty();

    var xlimit = tracks.tracks.limit;
    console.log(xlimit);
    // console.log(tracks);

    for(i=0; i<xlimit; i++) {
      var xprev = tracks.tracks.items[i].preview_url;
      var xtitle = tracks.tracks.items[i].name;
      var xartist = tracks.tracks.items[i].artists[0].name;
      var xalbum = tracks.tracks.items[i].album.name;
      var xpopularity = tracks.tracks.items[i].popularity;

      // console.log(xprev);
      // console.log(xtitle);
      // console.log(xartist);
      // console.log(xalbum);
      // console.log(xpopularity);
      // console.log(" ");

      var trakrow = '<div class="row track"><div class="col-xs-1 col-xs-offset-1 play-button"><a href="' + xprev + '" target="_blank"><i class="fa fa-play-circle-o fa-2x"></i></a></div><div class="col-xs-4" id="track-title">' + xtitle + '</div><div class="col-xs-2" id="track-artist">' + xartist + '</div><div class="col-xs-2" id="track-album">' + xalbum + '</div><div class="col-xs-2" id="track-popularity">' + xpopularity + '</div></div>';

      // console.log(i);
      // console.log(trakrow);

      $('#track-list').append(trakrow);
    }

  };

  /*
    Given a search term as a string, query the Spotify API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      // url:'https://api.spotify.com/v1/search?type=track&q=' + title,
      // success: function(data) {
      console.log("hi there");

      // url:'http://ws.audioscrobbler.com/2.0/?method=track.search&track=proud+mary&api_key=f829e7e6646f98349aa3c64cb1b2999c&format=json' + title,


      url:'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=f829e7e6646f98349aa3c64cb1b2999c&format=json',
      success: function(data) {

        // console.log(data);
        Trackster.renderTracks(data)
      }

    })
  };
  $('#search-button').click(function() {
    var srch = $('#search-input').val();
    Trackster.searchTracksByTitle(srch);
  });


  $('#search-input').keyup(function (e) {
      if (e.keyCode === 13) {
        var srch = $('#search-input').val();
        Trackster.searchTracksByTitle(srch);
      }
    });


});
