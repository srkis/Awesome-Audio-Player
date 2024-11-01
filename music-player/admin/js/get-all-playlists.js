jQuery(document).ready(function($){


let paramsUrl = new URLSearchParams(window.location.search);




  var params = {};
  params.action = 'awesome_player_get_all_playlists';

  jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var playlists = response.result;
      var html;
      var songs;
      var options;

    //  let songs = JSON.parse(response.result[0].aw_playlist);

   //   console.log('songs',response.result[0].aw_playlist_name);
     // console.log('playlists',playlists);
   //	   return

    // if( playlists.length > 0 ) {

     	for(var i = 0; i < playlists.length; i++ ){

     		songs = JSON.parse(playlists[i].aw_playlist);
     		//console.log(playlists[i].aw_playlist_name);	

     		html += '<a href="admin.php?page=edit-awesome-playlist&playlist='+playlists[i].awPlaylistID+'" class="list-group-item list-group-item-action withripple your-playlist"><i title="Edit Playlist" class="zmdi zmdi-comment-edit"></i> '+playlists[i].aw_playlist_name+'  <span class="ms-auto badge-pill badge-pill-warning">'+songs.length+'</span> </a>';
     	}

     	$('#showPlaylists').append(html);

    //   $.each(response.result, function (index, value) {
       
    //   $('#playerPlaylists').append('<option value="'+value.awPlaylistID+'" id="' + value.awPlaylistID+ '">' + value.aw_playlist_name+ '</option>');

    // });  

//$('.selectpicker').selectpicker('refresh');
          

         


// options += '<li class="selected active"><a role="option" class="dropdown-item" id="bs-select-2-0" tabindex="0" aria-setsize="6" aria-posinset="2"><span class="text">300px</span></a></li>';
//        $('#bs-select-2 ul.inner').append(options);

      

     	
  //   }
    
  
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