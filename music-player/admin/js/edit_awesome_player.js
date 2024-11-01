
const urlParams = new URLSearchParams(window.location.search);
const playerId = urlParams.get('player');


jQuery(document).ready(function($){


if(!playerId) return;

  var params = {};
  params.action = 'awesome_player_get_player_by_id';
  params.playerId = playerId;
  //$("#playerName").val(playlistId);


  var playerWidth = ['RESPONSIVE', '300px', '450px', '550px', '650px', '700px'];

    $.each(playerWidth, function (index, value) {
       
      $('#playerWidth').append('<option id="' + index+ '">' + value+ '</option>');

    });  


  jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var playlists = response.result;
      var html;
      var j = 1;

		console.log('response',response);
 		$("#playerName").val(response.result[0].aw_player_name);
    $("#adTagUrl").val(response.result[0].aw_ad_tag_url);


  
    if(response.result[0].aw_ad_tag_url_type == "video") $( "#videoAdTag" ).attr( 'checked', true);
    if(response.result[0].aw_ad_tag_url_type == "audio") $( "#audioAdTag" ).attr( 'checked', true);
    if(response.result[0].aw_player_autoplay == "1") $( "#autoplayInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_muted == "1") $( "#muted" ).attr( 'checked', true);
    if(response.result[0].aw_player_fast_forward == "1") $( "#fastForwardInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_rewind == "1") $( "#rewindInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_sticky == "1") $( "#stickyPlayer" ).attr( 'checked', true);
    if(response.result[0].aw_player_stop == "1") $( "#stopButtonInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_progressbar == "1") $( "#progressbardInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_duration == "1") $( "#durationdInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_current_time == "1") $( "#currentTimeInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_volume_control == "1") $( "#volumeControlInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_settings_button == "1") $( "#settingsButtonInput" ).attr( 'checked', true);
    if(response.result[0].aw_player_download_button == "1") $( "#downloadButtonInput" ).attr( 'checked', true);

    var newprogress = Number(response.result[0].aw_player_seek_time);
    
    $('#ex1Slider').attr('aria-valuenow', newprogress).css('left', newprogress *10+'%');
    $(".tooltip-main").css("left", newprogress *10+'%');
    $(".tooltip-main .tooltip-inner").text(newprogress);
    $('.min-slider-handle').attr('aria-valuenow', newprogress).css('left', newprogress *10+'%');


    $("input[name=optionsRadios][value=" + response.result[0].aw_player_repeat + "]").attr('checked', 'checked');


     $.each(response.playlist, function (index, value) {
       
      $('#playerPlaylists').append('<option value="'+value.awPlaylistID+'" id="' + value.awPlaylistID+ '">' + value.aw_playlist_name+ '</option>');

    });  

    $('#playerPlaylists option[value="'+response.result[0].awPlaylistID+'"]').prop('selected', true);

    $("#playerPlaylists").val(response.result[0].awPlaylistID);


    $('#playerWidth option[value="'+response.result[0].aw_player_width+'"]').prop('selected', true);

    $("#playerWidth").val(response.result[0].aw_player_width);


    $('.selectpicker').selectpicker('refresh');

     	
     }

   });





});


function updatePlayer(e) {

	e.preventDefault();

	  var playerName = $('#playerName').val();
    var adTagUrl = $('#adTagUrl').val();
  	var muted =  $('#muted').is(':checked');
  	var loopRepeat = $('input[name="optionsRadios"]:checked').val();
    var adTagType = $('input[name="adTagType"]:checked').val();
  	var autoplay = $('#autoplayInput').is(':checked');
  	var playerWidth = $('#playerWidth').val();
  	var playerPlaylistId = $('#playerPlaylists').val();
  	var fastForwardInput =  $('#fastForwardInput').is(':checked');
  	var rewindInput =  $('#rewindInput').is(':checked');
  	var seekTime = $('#seekTime').val();
   	var stopButtonInput =  $('#stopButtonInput').is(':checked');
   	var progressbardInput =  $('#progressbardInput').is(':checked');
   	var durationdInput =  $('#durationdInput').is(':checked');
   	var currentTimeInput =  $('#currentTimeInput').is(':checked');
   	var muteButtonInput =  $('#muteButtonInput').is(':checked');
   	var volumeControlInput =  $('#volumeControlInput').is(':checked');
   	var settingsButtonInput =  $('#settingsButtonInput').is(':checked');
   	var downloadButtonInput =  $('#downloadButtonInput').is(':checked');
   	var stickyPlayer =  $('#stickyPlayer').is(':checked');


   	 var params = {};
	  params.action = 'awesome_player_update_player';
	  params.playerId = playerId;
	  params.playerName = playerName;
	  params.muted = muted;
	  params.loopRepeat = loopRepeat;
	  params.autoplay = autoplay;
	  params.playerWidth = playerWidth;
	  params.playerPlaylistId = playerPlaylistId;
	  params.fastForwardInput = fastForwardInput;
	  params.rewindInput = rewindInput;
	  params.seekTime = seekTime;
	  params.stopButtonInput = stopButtonInput;
	  params.progressbardInput = progressbardInput;
	  params.durationdInput = durationdInput;
	  params.currentTimeInput = currentTimeInput;
	  params.muteButtonInput = muteButtonInput;
	  params.volumeControlInput = volumeControlInput;
	  params.settingsButtonInput = settingsButtonInput;
	  params.downloadButtonInput = downloadButtonInput;
	  params.stickyPlayer = stickyPlayer;
    params.adTagType = adTagType;
    params.adTagUrl = adTagUrl;


	  jQuery.ajax({
   		 type: 'GET',
   		 dataType : "json",
     	 url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
     	 data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

   		 success: function( response ){

       console.log(response.result);
        //console.log(response.result[playlistName]);
          //  snackBar('Playlist Successfully created');

//
        $.toast({
            heading: 'Player updated successfully',
            text: 'You can start using your AWSOME player :) ',
            position: 'bottom-right',
            icon: 'success',
            hideAfter: 5000
        });

  
    },
  
   		 error: function (request, status, error) {
		    //alert(request.responseText);
		    // console.log('request',request);
		    // console.log('status:', status);
     
        $.toast({
          heading: 'Error',
          text: 'An unexpected error occured while trying to create playlist! Please try again later or contact our support.',
          position: 'bottom-right',
          icon: 'error',
          hideAfter: 5000
       });

  }
  
  });
  	


}





 function getBaseURL() {
    var url = location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));

    if (baseURL.indexOf('http://localhost') != -1) {

      var url = location.href;
      var pathname = location.pathname;
      var index1 = url.indexOf(pathname);
      var index2 = url.indexOf("/", index1 + 1);
      var baseLocalUrl = url.substr(0, index2);

      return baseLocalUrl + "/";
    }
    else {

      return baseURL + "/";
      }

    }