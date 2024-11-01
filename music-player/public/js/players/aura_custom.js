jQuery(document).ready(function($){

  var params = {};
  var playerType = $("#player_type").val();
  params.action = 'awesome_player_get_playlist_by_id_frontend';
  params.playerType = playerType;
 
 // console.log(playerType);return;

  jQuery.ajax({
    type: 'GET',
    dataType : "json",
       url: "/wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var playlist = response.result;
      var html;
      var options;
      var j = 1;

      let songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;

      console.log('result:',response.result);

	$("#playlistName").val(response.result.playlist[0].aw_playlist_name);
      
    // let songs = JSON.parse(response.result[0].aw_playlist);

   
   
    for(var i = 0; i < songs.length; i++ ){

    	html += ' <div class="audioplayer-tobe button-aspect-noir button-aspect-noir--filled" style="width:100%;"'+
    	 				'data-thumb="'+songs[i].trackImg+'"'+
                         'data-videoTitle="Audio Video" data-type="normal" data-source="'+songs[i].song_url+'">'+
                           '<div class="meta-artist"><span class="the-artist">'+songs[i].artistName+'</span><br/><span class="the-name">'+songs[i].songName+'</span>'+
                                '</div>'+
                                '<div class="menu-description">'+
                                    '<div class="menu-item-thumb-con">'+
                                    '<div class="menu-item-thumb" style="background-image: url('+songs[i].trackImg+')"></div></div>'+
                                    '<span class="the-artist">'+songs[i].artistName+'s</span>'+
                                    '<span class="the-name">'+songs[i].songName+'</span>'+
                                '</div>'+
                            '</div>';

	}

 html = html.replace("undefined", ""); 

$("#songItems").append(html);

 var settings_ap = {
            disable_volume: "off"
            ,disable_scrub: "default"
            ,design_skin: "skin-wave"
            ,skinwave_dynamicwaves:"off"
            ,skinwave_enableSpectrum:"off"
            ,settings_backup_type:"full"
            ,skinwave_enableReflect:"on"
            ,skinwave_comments_enable:"on"

        };
        dzsag_init("#ag1",{
             "transition":"fade"
            ,"autoplay" : "off"
            ,"autoplayNext" : "on"
            ,design_menu_position:"bottom"
            ,"settings_ap":settings_ap
            ,design_menu_state: "open"
            ,design_menu_show_player_state_button: "on"
        });




  }

  });  



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



  });  
