<?php

/*
View za prikazivanje recimo svih plejera
Izlistamo sve plejere iz bazei prikazemo ih na strani.
Ako hoce da edituje plejer onda opalimo neki ajax ili neki modal gde prikazemo  sve za taj plejer. 
Tu mozemo da promenimo sve sto hocemo i sacuvamo i to je to. 
*/
function create_awesome_playlist_page() {

	//   var_dump($_GET['player']);

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

    </div>

                                  

        <div role="tabpanel" class="tab-pane fade active show" id="profile11">

            <section class="ms-component-section" id="mainPlaylist">

               <h2 style="color: #FF9800;" class="section-title no-margin-top">Create Playlist</h2>

                  <div class="card card-warning" style="max-width:100%;">
                   
                        <h4 style="color: #FF9800;" class="panel-title">Playlist Info</h4>
                    

                        <div class="card-body">
                          <div class="form-group row is-empty">
                          <label for="playlistName" autocomplete="false" class="col-lg-2 control-label">Enter Playlist Name</label>

                          <div class="col-lg-5">
                          <input type="text" class="form-control" id="playlistName">
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

            <div id="playlistTracks">

             

                <div id="trackCount" class="card card-warning song-panel" style="max-width:100%;">
                    <div class="card-header card-code-header" role="tab" id="trackHead">
                        <h4 class="panel-title card-code-title">
                            <a class="collapsed withripple" role="button" data-bs-toggle="collapse" href="#track1" aria-expanded="false" aria-controls="track1">
                                <i class="zmdi zmdi-collection-music"></i> Track - 1
                            </a>
                        </h4>
                    </div>


                <div id="track1" class="card-collapse collapse" role="tabpanel" aria-labelledby="trackHead">
                    <div class="card-code-block">    


                    <div id="songDiv" class="form-group row is-empty">
                            <label for="artistName" autocomplete="false" class="col-lg-2 control-label">Enter Artist Name</label>
                            <div class="col-lg-5">
                              <input type="text" name="artistName" class="form-control" id="artistName">
                            </div>
                          </div>   

                          <div id="songDiv" class="form-group row is-empty">
                            <label for="songName" autocomplete="false" class="col-lg-2 control-label">Enter Song Name</label>
                            <div class="col-lg-5">
                              <input type="text" name="songName" class="form-control" id="songName">
                            </div>
                          </div>

                        <div class="col-lg-8">
                          <div class="form-group row justify-content-end">
                                <label id="sourceFileLabel" class="col-lg-2 control-label">Source File</label>

                                    <div class="col-lg-10">
                                        <div class="radio radio-primary">
                                            <label style="width:50%">
                                                <input type="radio" name="sourceFile" id="localMp3" value="localMp3" checked="">
                                                <span class="circle"></span><span class="check"></span>
                                                    <span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Local MP3</span>
                                            </label>
                                        </div>
                                        <div class="radio radio-primary">
                                            <label>
                                                <input type="radio" name="sourceFile" id="externalAudioFile" value="externalFile">
                                                <span class="circle"></span>
                                                <span class="check"></span> 
                                                 <span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">External Audio FIle</span>
                                            </label>
                                        </div>
                                        <div class="radio radio-primary">
                                            <label>
                                                <input type="radio" name="sourceFile" id="iceCast" value="iceCast">
                                                <span class="circle"></span>
                                                <span class="check"></span> 
                                                 <span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Icecast</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br>

                          <div class="col-lg-8">
                          <div class="form-group row justify-content-end">
                                <label id="sourceFileLabel" class="col-lg-2 control-label">Purchase / Download</label>
                                    <div class="col-lg-10">
                                        <div class="radio radio-primary">
                                            <label style="width:50%">
                                                <input type="radio" name="purchase" id="purchase-1" value="purchase_button" checked="">
                                                <span class="circle"></span><span class="check"></span>
                                                    <span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Show Purchase Button</span>
                                            </label>
                                        </div>
                                        <div class="radio radio-primary">
                                            <label>
                                                <input type="radio" name="purchase" id="purchase-1" value="download_button">
                                                <span class="circle"></span>
                                                <span class="check"></span> 
                                                 <span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">Show Download Button</span>
                                            </label>
                                        </div>
                                        <div class="radio radio-primary">
                                            <label>
                                                <input type="radio" name="purchase" id="purchase-1" value="none">
                                                <span class="circle"></span>
                                                <span class="check"></span> 
                                                 <span style="font-size:13px;left: 50px; width:150px;color: #9E9E9E">None</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <br>
                         <div id="songUrl" class="form-group row justify-content-end is-empty">
                         <label id="sourceFileLabel" class="col-lg-2 control-label">MP3 File</label>

                         <label id="sourceFileLabel" class="col-lg-6 control-label">MP3 File Recommended Format: MP3 file encoded at 320kbps with sample rate of 44.1kHz
                            <input type="text" readonly name="song_url" id="song_url" class="form-control" placeholder="https://example.com/wp-content/uploads/2023/03/Song-2.mp3">
                         </label>

                          <label id="sourceFileLabel" style="position: relative;left: 110px;" class="col-lg-3 control-label">
                         <input type="button" name="upload-song" id="upload-song" class="btn btn-raised btn-warning" value="Add / Upload Song">
                          </label>
                        </div>
                        <br>

                         <br>
                         <div id="lyrics_url" class="form-group row justify-content-end is-empty">
                         <label id="sourceFileLabel" class="col-lg-2 control-label">Lyrics File</label>

                         <label id="sourceFileLabel" class="col-lg-6 control-label">Lyrics File Recommended Format: song.lrc file with timestamp
                            <input type="text" readonly name="lyrics_url" id="lyrics_url" class="form-control" placeholder="https://example.com/wp-content/uploads/2023/03/Song-2.lrc">
                         </label>

                          <label id="sourceFileLabel" style="position: relative;left: 110px;" class="col-lg-3 control-label">
                         <input type="button" name="upload-lyrics" id="upload-lyrics" class="btn btn-raised btn-warning" value="Add / Upload Lyrics">
                          </label>
                        </div>
                        
                        

                         <div class="form-group row justify-content-end is-empty">
                                    <label for="textArea" class="col-lg-2 control-label">Optional Track Information</label>
                                    <div class="col-lg-10">
                                        <textarea class="form-control" name="trackInfo" rows="3" id="textArea"></textarea>
                                        <span class="help-block">BPM, Hashtag, Description, etc. Will appear below track title in the playlist.</span>
                                    </div>
                                </div>
                             <br><br>


                            <div class="form-group row justify-content-end is-empty is-fileinput">
                                <label for="inputFile" class="col-lg-2 control-label">Optional Track Image</label>

                              <div class="col-lg-4">
                                 <input type="button" name="upload_song_img" id="upload_song_img" class="btn btn-raised btn-warning" value="Add / Upload Song Image">
                              </div>
                              <div class="col-lg-6">
                                 <img style="width:300px; max-height:300px;" id="song-img" name="song_img">
                              </div>
                        </div>
                    </div>
                </div> <!-- card-code -->


                <div class="append_data"></div>

                </div> <!-- Playlist Tracks -->

                <div class="form-group row ">
                    <div style="display:flex;" class="col-lg-12 justify-content-end" >
                    <a href="#" onclick="appendPlaylistTracks(event)"; class="btn btn-raised btn-warning ">Add Another Track</a>
                    </div>
                    </div>
            </section>



                <div class="form-group row justify-content-start">
                    <div class="col-lg-10">
                        <a href="#" onclick="createPlaylist(event)" id="createPlaylist" class="btn btn-raised btn-primary">Create Playlist</a>
                       <input type="hidden" name="playlistAction" id="playlistAction" value="create">
                    </div>
                </div>

        </div>


      
        </div>
         </div>
         </div>
        </div>

        <div id="snackbar"></div>

   
    </section>
   </div>
</div>



 <script src="'.MUSIC_PLAYER_DIR.'/admin/js/plugins.min.js"></script> 

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/app.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/configurator.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/jquery.toast.min.js"></script>



</body>

</html>';



}
