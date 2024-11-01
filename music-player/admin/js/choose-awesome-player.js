jQuery(document).ready(function($){


  var params = {};
  params.action = 'awesome_player_get_all_players';



  jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var players = response.result;
      var html;
      var j = 1;
      var css_class;
      var read_more;

      console.log(players);

     $( players ).each(function( index, value ) {
          // css_class = j % 2 == 0 ? '' : 'alt';

         css_class =  index % 2?"alt":"";
         read_more =  index % 2?"button_left":"";

      html += '<div class="blog-card '+css_class+' ">'+
                '<div class="meta">'+
                  '<div class="photo" style="background-image: url('+value.aw_player_screenshot+')"></div>'+
                '</div>'+

                '<div class="description">'+
                  '<h1>'+value.aw_player_name+'</h1>'+
                  '<h2>Awesome html5 audio player</h2>'+
                  '<p>'+value.aw_player_desc+'</p>'+
                  '<p class="read-more '+read_more+'">'+

                    '<a href="admin.php?page=edit-awesome-player&player='+value.awID+'"">Customize Player</a>'+
                  '</p>'+
                '</div>'+
              '</div>';



      // html += '<article class="card-player wow fadeInLeft animation-delay-5 mb-4" style="width:650px; padding: 20px; visibility: visible; animation-name: fadeInLeft;">'+
      //                 '<div class="card-body overflow-hidden overflow-hidden">'+
      //                     '<div class="row">'+
      //                         '<div class="col-xl-6">'+
      //                             '<img style="width:500px" src="'+value.aw_player_screenshot+'" alt="" class="img-fluid mb-4">'+
      //                         '</div>'+
      //                         '<div class="col-xl-6">'+
      //                             '<h3 class="no-mt"><a href="javascript:void(0)">'+value.aw_player_name+'</a></h3>'+
      //                             '<p class="mb-4">'+value.aw_player_desc+'</p>'+
      //                         '</div>'+
      //                     '</div>'+
      //                     '<div class="row">'+
      //                         '<div class="col-lg-8">'+
      //                             '<img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>'+
      //                             '<span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">April 15, 2015</span></span>'+
      //                         '</div>'+
      //                         '<div class="col-lg-4 text-right">'+
      //                             '<a href="admin.php?page=edit-awesome-player&player='+value.awID+'"" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>'+
      //                         '</div>'+
      //                     '</div>'+
      //                 '</div>'+
      //             '</article>';

	
	 	});
                             
         
         html = html.replace("undefined", "");                       	  			
		    $('#allPlayers').append(html);
	

	}

 });







});