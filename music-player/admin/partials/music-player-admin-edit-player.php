<?php

/*
View za prikazivanje recimo svih plejera
Izlistamo sve plejere iz bazei prikazemo ih na strani.
Ako hoce da edituje plejer onda opalimo neki ajax ili neki modal gde prikazemo  sve za taj plejer. 
Tu mozemo da promenimo sve sto hocemo i sacuvamo i to je to. 
*/
function music_player_edit_player_page() {

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
   
    <ul class="nav nav-tabs nav-tabs-transparent indicator-royal nav-tabs-full nav-tabs-4" role="tablist">
        <li class="nav-item"><a class="nav-link withoutripple active" href="#home11" aria-controls="home7" role="tab" data-bs-toggle="tab"><i class="zmdi zmdi-play zmdi-hc-2x" style="position:relative; top:7px"></i> <span class="d-none d-sm-inline">Player</span></a></li>
    </ul>

    <div class="card-body no-pl no-pr">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade active show" id="home11">
                                       
<div class="container">
    <div class="row">
       <div id="adminForm" class="col-lg-9 ms-paper-content-container">
                <div class="ms-paper-content">
                    <h1>Manage your player</h1>
                    <section class="ms-component-section">
                        
                        <div class="alert alert-royal">
                            <p><i class="zmdi zmdi-info-outline"></i> If playlists are not created yet, you need to create at least one playlist first.  <strong><a href="admin.php?page=create-awesome-playlist">Create Playlist Here</a></strong>.</p>
                        </div>
                        <form class="form-horizontal" autocomplete="off">
                            <fieldset>
                                <legend>Player options</legend>

                             <div class="form-group row is-empty">
                                        <label for="playerName" autocomplete="false" class="col-lg-2 control-label">Player Name</label>

                                        <div class="col-lg-10">
                                            <input type="text" class="form-control" id="playerName">
                                        </div>
                                    </div>
                            

                                <div id="playerMuted" class="form-group row justify-content-end row" style="margin-top: 0;">
                                        <label id="labelMuted" class="col-lg-2 control-label">Muted</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input type="checkbox" name="muted" id="muted" value="muted">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want the audio output should be muted</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                  <div class="form-group row justify-content-end">
                                    <label id="repeat" class="col-lg-2 control-label">Repeat</label>

                                    <div class="col-lg-10">
                                        <div class="radio radio-primary">
                                            <label style="width:50%">
                                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="repeat" checked="">
                                                <span class="circle"></span><span class="check"></span>
                                                    <span style="font-size:13px;left: 50px;" class="color-royal">Repeat Once</span>
                                            </label>
                                        </div>
                                        <div class="radio radio-primary">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="loop">
                                                <span class="circle"></span>
                                                <span class="check"></span> 
                                                 <span style="font-size:13px;left: 50px;" class="color-royal">Loop</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                  <div id="playerMuted" class="form-group row justify-content-end row" style="margin-top: 0;">
                                        <label id="autoplay" class="col-lg-2 control-label">Autoplay</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="autoplayInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to play audio file when page load</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                              <div class="form-group row justify-content-end">
                                    <label for="playerWidth" class="col-lg-2 control-label">Player Width</label>

                                    <div class="col-lg-10">
                                        <select id="playerWidth" class="form-control selectpicker" data-dropup-auto="false">
                                         
                                        </select>
                                         <span style="font-size:13px;" class="color-royal">Select the width for audio player. Default is Responsive </span>
                                    </div>
                                </div>

                                <div class="form-group row justify-content-end srki">
                                    <label for="playerPlaylists" class="col-lg-2 control-label">Choose Playlist</label>

                                    <div class="col-lg-10">
                                        <select id="playerPlaylists" class="form-control selectpicker" data-dropup-auto="false">
                                          
                                        </select>
                                         <span style="font-size:13px;" class="color-royal">Select playlist for the audio player.You must create at least one playlist. If you don\'t have one, you can create it <a href="admin.php?page=create-awesome-playlist">Here</a></span>
                                    </div>
                                </div>


                                 <div id="fastForward" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Fast Forward</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="fastForwardInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to show fast forward button in the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                 <div id="rewind" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Rewind</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="rewindInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to show Rewind button in the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                  <div class="form-group row justify-content-end">
                                    <label for="datePicker" class="col-lg-2 control-label">Seek Time</label>
                                    <div class="col-lg-10">
                                        <div style="max-width: 160px">
                                            <input class="ms-slider" id="seekTime" data-slider-id="ex1Slider" type="text"  data-slider-focus="true" />
                                        </div>
                                        <span style="font-size:13px; left:8px; position: relative;" class="color-royal">The time, in seconds, to seek when a user hits fast forward or rewind. The default value is 5 sec.</span>
                                    </div>
                                </div>


                                 <div id="stickyPlayerButton" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Sticky Player</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="stickyPlayer" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to make player Sticky</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                 <div id="stopButton" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Stop Button</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="stopButtonInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to hide Stop button in the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                 <div id="progressbar" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Progressbar</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="progressbardInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to hide progressbar in the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div id="duration" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Duration</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="durationdInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to hide duration in the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                 <div id="currentTime" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Current Time</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="currentTimeInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to hide current time in the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                 <div id="volumeControl" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Volume Button</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="volumeControlInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to hide volume control the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div id="downloadButton" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Download Button</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="downloadButtonInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to hide download audio buttton the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                  <div id="settingsButton" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Settings Button</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="settingsButtonInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to show settings buttton the player</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            <div style="margin:20px 0;" class="alert alert-success">
                            <p style="margin: 0 auto; font-size:15px;"><i class="mr-1 zmdi zmdi-google zmdi-hc-fw"></i> Google Interactive Media Ads (IMA) SDK for HTML5</p>
                            </div>


                             <div class="form-group row justify-content-end">
                                    <label id="adTags" class="col-lg-2 control-label">Ad Types</label>

                                    <div class="col-lg-10">
                                        <div class="radio radio-primary">
                                            <label style="width:50%">
                                                <input type="radio" name="adTagType" id="audioAdTag" value="audio" checked="">
                                                <span class="circle"></span><span class="check"></span>
                                                    <span style="font-size:13px;left: 50px;" class="color-royal">Audio Ad </span>
                                            </label>
                                        </div>
                                        <div class="radio radio-primary">
                                            <label>
                                                <input type="radio" name="adTagType" id="videoAdTag" value="video">
                                                <span class="circle"></span>
                                                <span class="check"></span> 
                                                 <span style="font-size:13px;left: 0px; width:100px;" class="color-royal">Video Ad </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group row is-empty">
                                        <label for="adTagUrl" autocomplete="false" class="col-lg-2 control-label">Ad Tag Url</label>

                                        <div class="col-lg-10">
                                            <input type="text" class="form-control" id="adTagUrl">
                                        </div>
                                    </div>

                                    <div id="skipAdButton" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="autoplay" style="margin-top: 5px;" class="col-lg-2 control-label">Skip Ad Button</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="skipAdButtonInput" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to show skip Ad buttton</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                 <div class="form-group row is-empty">
                                        <label for="adTagUrl" autocomplete="false" class="col-lg-2 control-label">Skip Button Text</label>

                                        <div class="col-lg-10">
                                            <input type="text" class="form-control" id="skipButtonTxt">
                                        </div>
                                    </div>


                                     <div id="skipAdButton" class="form-group row justify-content-end row" style="margin-top: 20px;">
                                        <label id="repeatAds" style="margin-top: 5px;" class="col-lg-2 control-label">Repeat Ads</label>
                                    <div class="col-lg-10">
                                        <div class="checkbox">
                                            <label style="left: 10px;position: relative;">
                                                <input id="repeatAds" type="checkbox">
                                                <span style="font-size:13px; left:8px; position: relative;" class="color-royal">Check if you want to show Ad after each song in playlist</span>
                                            </label>
                                            <label>
                                               
                                            </label>
                                        </div>
                                    </div>
                                </div>



                                <div class="form-group row justify-content-end is-empty is-fileinput">
                                    <label for="inputFile" class="col-lg-2 control-label">File</label>

                                    <div class="col-lg-10">
                                        <input type="text" readonly="" class="form-control" placeholder="Browse...">
                                        <input type="file" id="inputFile" multiple="">
                                    </div>
                                </div>
                                <div class="form-group row justify-content-end is-empty">
                                    <label for="textArea" class="col-lg-2 control-label">Textarea</label>

                                    <div class="col-lg-10">
                                        <textarea class="form-control" rows="3" id="textArea"></textarea>
                                        <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                                    </div>
                                </div>



                                <div class="form-group row justify-content-end is-empty">
                                    <label for="datePicker" class="col-lg-2 control-label">Date Picker</label>
                                    <div class="col-lg-10">
                                        <input id="datePicker" type="text" class="form-control">
                                    </div>
                                </div>


                               

                                <div class="form-group row justify-content-end">
                                    <div class="col-lg-10">
                                    
                      
                                    <a href="#" onclick="updatePlayer(event)" id="updatePlayer" class="btn btn-raised btn-primary">Save Changes<div class="ripple-container"></div></a>
                                      
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                </div> <!-- ms-paper-content -->
            </div>
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

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/edit_awesome_player.js"></script>




</body>

</html>';



}
