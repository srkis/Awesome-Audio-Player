
jQuery(document).ready(function($){


const params = new URLSearchParams(window.location.search);




    $('#upload-song').click(function(e) {
        e.preventDefault();
        var song = wp.media({ 
            title: 'Upload MP3 File',
            button: {
	        text: 'Choose MP3 Song'
	    },

            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected song from the Media Uploader, the result is an object
            var uploaded_song = song.state().get('selection').first();
            // We convert uploaded_song to a JSON object to make accessing it easier
            // Output to the console uploaded_song
            console.log(uploaded_song);
            var song_url = uploaded_song.toJSON().url;
            // Let's assign the url value to the input field
            $('#song_url').val(song_url);
        });
    });

       $('#upload-lyrics').click(function(e) {
        e.preventDefault();
        var song = wp.media({ 
            title: 'Upload Lyrics File',
            button: {
            text: 'Choose Lyrics'
        },

            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected song from the Media Uploader, the result is an object
            var uploaded_song = song.state().get('selection').first();
            // We convert uploaded_song to a JSON object to make accessing it easier
            // Output to the console uploaded_song
            console.log(uploaded_song);
            var song_url = uploaded_song.toJSON().url;
            // Let's assign the url value to the input field
            $('#lyrics_url').val(song_url);
        });
    });


    $('#upload_song_img').click(function(e) {
        e.preventDefault();
        var song_img = wp.media({ 
            title: 'Upload Song Image',
             button: {
	        text: 'Choose Song Image'
	    },
            // mutiple: true if you want to upload multiple files at once	
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected song from the Media Uploader, the result is an object
            var uploaded_song_img = song_img.state().get('selection').first();
            // We convert uploaded_song to a JSON object to make accessing it easier
            // Output to the console uploaded_song
            console.log(uploaded_song_img);
            var song_img_url = uploaded_song_img.toJSON().url;
            // Let's assign the url value to the input field
             $('#song-img').attr('src',song_img_url);
            //$('#song-img').src(song_img_url);	
        });
    });

});






function appendPlaylistTracks(e) {

	e.preventDefault();

	   var count =  jQuery('[id^=trackCount]').length;

	   var nextId = count + 1;


    var addTrackSection = jQuery('<div id="trackCount" class="card card-warning song-panel" style="max-width:100%;margin-bottom:10px;">'+
                    '<div class="card-header card-code-header" role="tab" id="trackHead-'+nextId+'">'+
                       '<h4 class="panel-title card-code-title">'+
                            '<a class="collapsed withripple" role="button" data-bs-toggle="collapse" href="#track-'+nextId+'" aria-expanded="false" aria-controls="track-'+nextId+'">'+
                               '<i class="zmdi zmdi-collection-music"></i>Track - '+nextId+' '+
                            '</a>'+
                        '</h4>'+
                    '</div>'+
                '<div id="track-'+nextId+'" class="card-collapse collapse" role="tabpanel" aria-labelledby="trackHead-'+nextId+'">'+
                    '<div class="card-code-block">'+

                     '<div id="" class="form-group row is-empty">'+
                            '<label for="artistName" autocomplete="false" class="col-lg-2 control-label">Enter Artist Name</label>'+
                            '<div class="col-lg-5">'+
                              '<input type="text" name="artistName" class="form-control" id="artistName">'+
                            '</div>'+
                          '</div>'+

                           '<div id="songDiv" class="form-group row is-empty">'+
                            '<label for="songName" autocomplete="false" class="col-lg-2 control-label">Enter Song Name</label>'+
                            '<div class="col-lg-5">'+
                              '<input type="text" name="songName" class="form-control" id="songName">'+
                            '</div>'+
                          '</div>'+


                        '<div class="col-lg-8">'+
                          '<div class="form-group row justify-content-end">'+
                                '<label id="sourceFileLabel-'+nextId+'" class="col-lg-2 control-label">Source File</label>'+
                                    '<div class="col-lg-10">'+
                                        '<div class="radio radio-primary">'+
                                            '<label style="width:50%">'+
                                                '<input type="radio" name="sourceFile-'+nextId+'" id="localMp3-'+nextId+'" value="localMp3-'+nextId+'" checked="">'+
                                                '<span class="circle"></span><span class="check"></span>'+
                                                    '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Local MP3</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="sourceFile-'+nextId+'" id="externalAudioFile-'+nextId+'" value="externalFile-'+nextId+'">'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span> '+
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">External Audio FIle</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="sourceFile-'+nextId+'" id="iceCast-'+nextId+'" value="iceCast-'+nextId+'">'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span>'+ 
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
                                                '<input type="radio" name="purchase-'+nextId+'" id="purchase-'+nextId+'" value="purchase_button" checked="">'+
                                                '<span class="circle"></span><span class="check"></span>'+
                                                    '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Show Purchase Button</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="purchase-'+nextId+'" id="purchase-'+nextId+'" value="download_button">'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span> '+
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Show Download Button</span>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="radio radio-primary">'+
                                            '<label>'+
                                                '<input type="radio" name="purchase-'+nextId+'" id="purchase-'+nextId+'" value="none">'+
                                                '<span class="circle"></span>'+
                                                '<span class="check"></span> '+
                                                 '<span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">None</span>'+
                                            '</label>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                             '<br>'+

                            '<div id="songUrl" class="form-group row justify-content-start is-empty">'+
                        	 '<label id="sourceFileLabel" class="col-lg-2 control-label">MP3 File</label>'+
                         
                         '<label id="sourceFileLabel" class="col-lg-6 control-label">MP3 File Recommended Format: MP3 file encoded at 320kbps with sample rate of 44.1kHz'+
                            '<div class="form-group is-empty">'+
                            '<input type="text" readonly name="song_url" id="song_url-'+nextId+'" class="form-control" placeholder="https://example.com/wp-content/uploads/2023/03/Song-2.mp3">'+
                        	'</div>'+
                         '</label>'+
                     
                          '<label id="sourceFileLabel" style="position: relative;left: 110px;" class="col-lg-3 control-label">'+
                         
                         '<input type="button" onClick="upload_song(event, '+nextId+')" name="upload-song" id="upload-song" class="btn btn-raised btn-warning" value="Add / Upload Song">'+
                         
                          '</label>'+
                        '</div>'+
                           ' <br>'+
                            '<div id="lyrics_url" class="form-group row justify-content-end is-empty">'+
                             '<label id="sourceFileLabel" class="col-lg-2 control-label">Lyrics File</label>'+

                             '<label id="sourceFileLabel" class="col-lg-6 control-label">Lyrics File Recommended Format: song.lrc file with timestamp'+
                               '<input type="text" readonly name="lyrics_url" id="lyrics_url-'+nextId+'" class="form-control" placeholder="https://example.com/wp-content/uploads/2023/03/Song-2.lrc">'+
                            '</label>'+

                             '<label id="sourceFileLabel" style="position: relative;left: 110px;" class="col-lg-3 control-label">'+
                               '<input type="button" onClick="upload_lyrics(event, '+nextId+')" name="upload-lyrics" id="upload-lyrics" class="btn btn-raised btn-warning" value="Add / Upload Lyrics">'+
                            '</label>'+
                           '</div>'+



                         '<div class="form-group row justify-content-end is-empty">'+
                                    '<label for="textArea-'+nextId+'" class="col-lg-2 control-label">Optional Track Information</label>'+
                                    '<div class="col-lg-10">'+
                                        '<textarea class="form-control" rows="3" id="textArea-'+nextId+'"></textarea>'+
                                        '<span class="help-block">BPM, Hashtag, Description, etc. Will appear below track title in the playlist.</span>'+
                                    '</div>'+
                                '</div>'+
                             '<br><br>'+

                              	 '<div class="form-group row justify-content-end is-empty is-fileinput">'+
                                '<label for="inputFile" class="col-lg-2 control-label">Optional Track Image</label>'+

                              '<div class="col-lg-4">'+
                                 '<input type="button" onClick="upload_img_song('+nextId+');" name="upload_song_img_'+nextId+'" id="upload_song_img_'+nextId+'" class="btn btn-raised btn-warning" value="Add / Image Song">'+
                              '</div>'+
                              '<div class="col-lg-6" >'+
                                  '<img style="width:300px; max-height:300px;" id="song-img-'+nextId+'">'+
                              '</div>'+
							'</div>'+


                        	 '<div  class="form-group row deleteHolder ">'+ 
		                        '<div class="col-lg-12 deleteContainer" style="display:flex; justify-content: flex-end">'+
									'<a href="javascript:void(0)" class="btn btn-raised btn-danger remove">Remove Track</a>'+
		                        '</div>'+
	                        '</div>'+
			             '</div>'+

                '</div>');

   jQuery(".append_data").append(addTrackSection);
   // spaces.insertAfter(cell);



   jQuery('.remove').click(function() {

   // deleteButton.click(function () {
        addTrackSection.remove();
      //  spaces.remove();
    });
//});

	

}




function upload_song(e, songId) {

	 e.preventDefault();
        var song = wp.media({ 
            title: 'Upload MP3 File',
            button: {
	        text: 'Choose MP3 Song1'
	    },

            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected song from the Media Uploader, the result is an object
            var uploaded_song = song.state().get('selection').first();
            // We convert uploaded_song to a JSON object to make accessing it easier
            // Output to the console uploaded_song
            console.log(uploaded_song);
            var song_url = uploaded_song.toJSON().url;
            // Let's assign the url value to the input field
            $('#song_url-'+songId).val(song_url);

      });
}


function upload_lyrics(e, songId) {

     e.preventDefault();
        var song = wp.media({ 
            title: 'Upload Lyrics File',
            button: {
            text: 'Choose Lrc'
        },

            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected song from the Media Uploader, the result is an object
            var uploaded_song = song.state().get('selection').first();
            // We convert uploaded_song to a JSON object to make accessing it easier
            // Output to the console uploaded_song
            console.log(uploaded_song);
            var lyrics_url = uploaded_song.toJSON().url;
            // Let's assign the url value to the input field
            $('#lyrics_url-'+songId).val(lyrics_url);

      });
}



function upload_img_song(trackId) {

		var mediaUploader;

         if( mediaUploader ){
       		 mediaUploader.open();

       		 return;
   		 }

      mediaUploader = wp.media.frames.file_frame = wp.media({
	    title: 'Choose a Hotel Picture',
	    button: {
	        text: 'Choose Picture'
	    },
	    multiple:false
	  });

	   mediaUploader.on('select', function(){
   	  	var attachment = mediaUploader.state().get('selection').first().toJSON();
   		 // $('#profile-picture'+buttonID).val(attachment.url);
    	// $('#profile-picture-preview'+buttonID).css('background-image','url(' + attachment.url + ')');
   	  	
            // Let's assign the url value to the input field
             jQuery('#song-img-'+trackId).attr('src',attachment.url);
   	  	 mediaUploader.remove();
   	  
  		});
 		
        mediaUploader.open();
}








function createPlaylist(e) {

	e.preventDefault();

    var playlist = {};
    var tracks = {};
    var songsList = [];
    var countTabs = jQuery("div[id='trackCount']").length
    var action = jQuery("#playlistAction").val();
    var playlistId;
    var playlistName =  jQuery("#playlistName").val();
 
    //var songName =  jQuery("#songName").val();
    var reverseOrder =  $('#reverseOrder').is(':checked');
    var downloadPlaylist = $('#downloadPlaylist').is(':checked');
    var playlistStatus = $('#playlistStatus').is(':checked');

    var songNames = $("input[name=songName]");
    var songUrls = $("input[name=song_url]");
    var songsLrc = $("input[name=lyrics_url]"); 
    var artistNames = $("input[name=artistName]");




    var j = 0;
	var i = 1;

	jQuery('.song-panel').each(function(){
    //if statement here 
    // use $(this) to reference the current div in the loop
    //you can try something like...

     var purchaseDwnload = $("#purchase-"+i+":checked ").val();

	//	var sourceFile = jQuery(this).find('input:radio:checked');
      // var purchaseDwnload = jQuery(this).find('input:radio:checked');  //jQuery("input[name='purchase-"+i+"']:checked").val();  

	//	var songUrl =	jQuery(this).find('input:text');
      // var songUrl = $("#songUrl").find("#song_url");


        $('input[name="myradioname"]').each(function(){
          // do something...
       })

        var songName = songNames[j].value;
        var artistName = artistNames[j].value;
        var song_url = songUrls[j].value;
        var songs_lrc = songsLrc[j].value;
	
		var trackInfo = jQuery(this).find('textarea');
		var trackImg = jQuery(this).find('img');

		//var song_url = songUrl.val();
      //  var song_name = songName.val();
		var img = trackImg.attr('src');
		var info = trackInfo.val();


        songsList.push({'artistName': artistName,'song_url': song_url, 'lyrics_url': songs_lrc, 'songName':songName, 'trackImg': img, 'trackInfo': info, 'purchaseDwnload': purchaseDwnload});
		//tracks['track'+i] = {'song_url': song_url, 'songName':songName, 'trackImg': img, 'trackInfo': info};
		//playlist[playlistName] = tracks;


		 i++;	
         j++;  


 });



    // /console.log(songsList);return;

  //  function wc_notifyme_get_btn_settings(){

  var params = {};
  
  if(action == "update") {
    playlistId =  jQuery("#playlistId").val();
    params.playlistId = playlistId;
  }

  params.action = action == 'create' ? 'awesome_player_create_playlist' : 'awesome_player_update_playlist';
  params.playlistName = playlistName;
  params.songName = songName;
  params.reverseOrder = reverseOrder;
  params.downloadPlaylist = downloadPlaylist;
  params.playlistStatus = playlistStatus;
  params.playlist = songsList;

  jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

   //     console.log(response.result);
        //console.log(response.result[playlistName]);
          //  snackBar('Playlist Successfully created');

//
        $.toast({
            heading: 'Playlist created successfully',
            text: 'You can create another playlist while you are here :) ',
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

//}




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