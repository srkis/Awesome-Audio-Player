jQuery(document).ready(function($){


const urlParams = new URLSearchParams(window.location.search);

  var playlistId = urlParams.get('playlist');
  var purchase = '';
  var download = '';
  var none = '';
  var downloadPurchaseIcon;

  var params = {};
  params.action = 'awesome_player_get_playlist_by_id';
  params.playlistId = playlistId;
  $("#playlistId").val(playlistId);


  jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var playlists = response.result;
      var html;
      var j = 1;
      var lyrics_url = '';

 	  $("#playlistName").val(response.result[0].aw_playlist_name);
       
      let songs = JSON.parse(response.result[0].aw_playlist);
    
     	for(var i = 0; i < songs.length; i++ ){

            var artistName = songs[i].artistName === undefined ? "Not Set" : songs[i].artistName; 
            var songName = songs[i].songName === undefined ? "Not Set" : songs[i].songName; 
            var trackImg = songs[i].trackImg === undefined ? "Not Set" : songs[i].trackImg; 
            if(songs[i].lyrics_url !== "" ) {
                lyrics_url = songs[i].lyrics_url;
            }

            switch( songs[i].purchaseDwnload ) {
                case "purchase_button": 
                    purchase = "checked='checked'";
                    downloadPurchaseIcon = '<a class="playlist-icon download" href="'+songs[i].song_url+'" download="" title="Download" aria-label="Download"><svg width="15" height="15" fill="#999" viewBox="0 0 512 512"><path d="M288 32V0H224V32 274.7l-73.4-73.4L128 178.7 82.7 224l22.6 22.6 128 128L256 397.3l22.6-22.6 128-128L429.3 224 384 178.7l-22.6 22.6L288 274.7V32zM0 512H512V352H346.5l-45.3 45.3L256 442.5l-45.3-45.3L165.5 352H0V512zM432 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></a>';
                    break;

                case "download_button": 
                    download = "checked='checked'";
                    downloadPurchaseIcon = '<a class="playlist-icon hap-link" href="https://www.amazon.com/s?k='+songs[i].songName+'&i=digital-music" target="_blank" title="Purchase" aria-label="Purchase" rel="nofollow"><svg width="15" height="15" fill="#999" viewBox="0 0 576 512"><path d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM316 180H256V140h60V80h40v60h60v40H356v60H316V180z"></path></svg></a>';

                    break;

                case "none": 
                    none = "checked='checked'";
                    downloadPurchaseIcon = '';

                    break;

            }   


     		html += '<div id="trackCount" class="card card-warning song-panel" style="max-width:100%;">'+
                    '<div class="card-header card-code-header" role="tab" id="trackHead">'+
                        '<h4 class="panel-title card-code-title">'+
                            '<a class="collapsed withripple" role="button" data-bs-toggle="collapse" href="#track-'+j+'" aria-expanded="false" aria-controls="track1">'+
                                '<i class="zmdi zmdi-collection-music"></i> Track - '+j+' '+
                            '</a>'+
                        '</h4>'+
                    '</div>'+


                '<div id="track-'+j+'" class="card-collapse collapse" role="tabpanel" aria-labelledby="trackHead">'+
                   '<div class="card-code-block">'+    

                             '<div id="songDiv" class="form-group row is-empty">'+
                            '<label for="artistName" autocomplete="false" class="col-lg-2 control-label">Artist Name</label>'+
                            '<div class="col-lg-5">'+
                              '<input type="text" name="artistName" class="form-control" value="'+artistName+'" id="artistName">'+
                            '</div>'+
                          '</div>'+


                        '<div id="songDiv" class="form-group row is-empty">'+
                            '<label for="songName" autocomplete="false" class="col-lg-2 control-label">Song Name</label>'+
                            '<div class="col-lg-5">'+
                              '<input type="text" name="songName" class="form-control" value="'+songName+'" id="songName">'+
                            '</div>'+
                          '</div>'+

                        '<div class="col-lg-8">'+
                          '<div class="form-group row justify-content-end">'+
                                '<label id="sourceFileLabel" class="col-lg-2 control-label">Source File</label>'+

                                    '<div class="col-lg-10">'+
                                        '<div class="radio radio-primary">'+
                                            '<label style="width:50%">'+
                                                '<input type="radio" name="sourceFile-'+j+'" id="localMp3-'+j+'" value="localMp3" checked="">'+
                                                '<span class="circle"></span><span class="check"></span>'+
                                                    '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Local MP3</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="sourceFile" id="externalAudioFile" value="externalFile">'+
                                                '<span class="circle"></span>'+
                                      			'<span class="check"></span>'+ 
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">External Audio FIle</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="sourceFile" id="iceCast" value="iceCast">'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span> '+
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Icecast</span>'+
                                            '</label>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<br>'+

                        '<div class="col-lg-8">'+
                          '<div class="form-group row justify-content-end">'+
                                '<label id="sourceFileLabel" class="col-lg-2 control-label">Purchase / Download</label>'+
                                    '<div class="col-lg-10">'+
                                        '<div class="radio radio-primary">'+
                                            '<label style="width:50%">'+
                                                '<input type="radio" name="purchase-'+j+'" id="purchase-'+j+'" value="purchase_button" '+purchase+'>'+
                                                '<span class="circle"></span><span class="check"></span>'+
                                                    '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Show Purchase Button</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="purchase-'+j+'" id="purchase-'+j+'" value="download_button" '+download+'>'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span> '+
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Show Download Button</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                           '<label>'+
                                                '<input type="radio" name="purchase-'+j+'" id="purchase-'+j+'" value="none" '+none+'>'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span>'+
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">None</span>'+
                                            '</label>'+
                                        '</div>'+
                                   '</div>'+
                               '</div>'+
                            '</div>'+
                            '<br>'+

                         '<div id="songUrl" class="form-group row justify-content-end is-empty">'+
                         '<label id="sourceFileLabel" class="col-lg-2 control-label">MP3 File</label>'+

                         '<label id="sourceFileLabel" class="col-lg-6 control-label">MP3 File Recommended Format: MP3 file encoded at 320kbps with sample rate of 44.1kHz'+
                            '<input type="text" readonly name="song_url" id="song_url-'+j+'" class="form-control"  value="'+songs[i].song_url+'">'+
                         '</label>'+

                          '<label id="sourceFileLabel" style="position: relative;left: 110px;" class="col-lg-3 control-label">'+
                         '<input type="button" onClick="upload_song(event, '+j+')" name="upload-song" id="upload-song-'+j+'" class="btn btn-raised btn-warning" value="Add / Upload Song">'+
                          '</label>'+
                        '</div>'+
                        '<br>'+

                        '<div id="lyrics_url" class="form-group row justify-content-end is-empty">'+
                         '<label id="sourceFileLabel" class="col-lg-2 control-label">Lyrics File</label>'+

                         '<label id="sourceFileLabel" class="col-lg-6 control-label">Lyrics File Recommended Format: song.lrc file with timestamp'+
                            '<input type="text" readonly name="lyrics_url" id="lyrics_url-'+j+'" class="form-control" value="'+lyrics_url+'">'+
                         '</label>'+

                          '<label id="sourceFileLabel" style="position: relative;left: 110px;" class="col-lg-3 control-label">'+
                         '<input type="button" onClick="upload_lyrics(event, '+j+')"  name="upload-lyrics" id="upload-lyrics" class="btn btn-raised btn-warning" value="Add / Upload Lyrics">'+
                          '</label>'+
                        '</div>'+
                         '<br>'+

                         '<div class="form-group row justify-content-end is-empty">'+
                                    '<label for="textArea" class="col-lg-2 control-label">Optional Track Information</label>'+
                                    '<div class="col-lg-10">'+
                                        '<textarea class="form-control" name="trackInfo" rows="3" id="textArea"></textarea>'+
                                        '<span class="help-block">BPM, Hashtag, Description, etc. Will appear below track title in the playlist.</span>'+
                                    '</div>'+
                                '</div>'+
                             '<br><br>'+


                            '<div class="form-group row justify-content-end is-empty is-fileinput">'+
                                '<label for="inputFile" class="col-lg-2 control-label">Optional Track Image</label>'+

                              '<div class="col-lg-4">'+
                                 '<input type="button" onClick="upload_img_song('+j+')" name="upload_song_img" id="upload_song_img" class="btn btn-raised btn-warning" value="Add / Upload Song">'+
                              '</div>'+
                              '<div class="col-lg-6">'+
                                 '<img style="width:300px; max-height:300px;" src="'+trackImg+'" id="song-img" name="song_img">'+
                              '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

                j++;
     	}


        html = html.replace("undefined", ""); 

     	$('#playlistTracks').append(html);

  
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




});