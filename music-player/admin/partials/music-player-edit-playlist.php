<?php

function music_player_edit_playlist_page() {

	    echo '<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <meta name="theme-color" content="#333">

    <title>Material Style</title>
    <meta name="description" content="Material Style Theme">

    <link rel="shortcut icon" href="assets/img/favicon30f4.png?v=3">

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/material-icons.css">

     <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/preload.min.css">

     <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/style.light-blue-500.min.css">

    <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/width-boxed.min.css" id="ms-boxed" disabled="">
    <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/jquery.toast.min.css">


<style>




</style>

</head>

<body>


<div class="col-lg-9 ms-paper-content-container">
    <div class="ms-paper-content">
   <section class="ms-component-section">

    <div id="panelCard">
<div class="card card-flat" style="max-width:100%">
                            
 
 <div class="card card-flat" style="max-width:100%">
   
    <ul class="nav nav-tabs nav-tabs-transparent indicator-warning nav-tabs-full nav-tabs-4" role="tablist">

        <li class="nav-item"><a class="nav-link withoutripple active" href="#profile11" aria-controls="profile11" role="tab" data-bs-toggle="tab"><i class="zmdi zmdi-playlist-audio"></i> <span class="d-none d-sm-inline">Playlist</span></a></li>
           
    </ul>

    <div class="card-body no-pl no-pr">
        <div class="tab-content">
  
                                       
<div class="container">
    <div class="row">
       <div id="adminForm" class="col-lg-9 ms-paper-content-container">
                <div class="ms-paper-content">
                  
                    <section class="ms-component-section">
                       
                </div> <!-- ms-paper-content -->
            </div>

        </div>
    </div>
                                  

        <div role="tabpanel" class="tab-pane fade active show" id="profile11">

            <section class="ms-component-section" id="mainPlaylist">

               <h2 style="color: #FF9800;" class="section-title no-margin-top">Edit Playlist</h2>

                  <div class="card card-warning" style="max-width:100%;">
                   
                        <h4 style="color: #FF9800;" class="panel-title">Playlist Data</h4>
                    

                        <div class="card-body">
                          <div class="form-group row is-empty">
                          <label for="playlistName" autocomplete="false" class="col-lg-2 control-label">Playlist Name</label>

                          <div class="col-lg-5">
                          <input type="text" class="form-control" id="playlistName">
                          <input type="hidden" class="form-control" id="playlistId">
                         </div>
                         </div>


                         <div id="" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Reverse Order</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="reverseOrder" type="checkbox" name="reverseOrder">
                                                <span style="font-size:13px; left:8px; position: relative; color: #9E9E9E;">Check if you want to display tracklist in reverse order.</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div id="" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Download Playlist</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="downloadPlaylist" type="checkbox" name="playlistCheck">
                                                <span style="font-size:13px; left:8px; position: relative; color: #9E9E9E;">Check if you want to display download button for playlist.</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                 <div id="" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Playlist Status</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="playlistStatus" type="checkbox" name="playlistStatus">
                                                <span style="font-size:13px; left:8px; position: relative; color: #9E9E9E;">If checked you wont be able to choose this playlist from the list in player.</span><br>
                                                
                                            </label>
                                            <br>
                                           <small class="playlist-status-note" >NOTE: This is useful if you don\'t want to delete playlist, just hide it from playey options. </small>
                                        </div>
                                    </div>
                                </div>



                         </div> <!--  card body-->
                    </div>

                    <div class="append_data"></div>

            <div id="playlistTracks"></div>
            <div class="form-group row ">
                    <div style="display:flex;" class="col-lg-12 justify-content-end" >
                    <a href="#" onclick="appendPlaylistTracks(event)"; class="btn btn-raised btn-warning ">Add Another Track</a>
                    </div>
                   </div>

             
            </section>



                <div class="form-group row justify-content-start">
                    <div class="col-lg-10">
                        <a href="#" onclick="createPlaylist(event)" id="createPlaylist" class="btn btn-raised btn-primary">Save Changes</a>
                       <input type="hidden" name="playlistAction" id="playlistAction" value="update">
                    </div>
                </div>

        </div>


      



   
        </div>
         </div>
         </div>
        </div>

   
    </section>
   </div>
</div>



 <script src="'.MUSIC_PLAYER_DIR.'/admin/js/plugins.min.js"></script> 

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/app.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/configurator.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/jquery.toast.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/edit-playlist-admin.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/music-player-admin.js"></script>



</body>

</html>';

}