<?php

 function aura_player_display($value='')
{
	$html = '<!doctype html>
			<html lang="en">

	<head>
	    <meta charset="utf-8" />
	    <title>Aura Player</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2">

	      <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/aura_player.css"/>
 <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/aura_custom.js"></script> 
	       
	    
	    <link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet" type="text/css">
	</head>
<body>
<div class="mwrap-wrapper">

    <section class="mcon-otherdemos" id="skin-wave" style="padding: 0;">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
        <div class="container">
            <div class="row row-inline" style="margin-top: 0; margin-bottom: 0;">
                <div class="col-md-12">


            <div id="ag1" class="audiogallery skin-aura" style="opacity:0; margin-top: 70px; font-size: 13px;">
                <div id="songItems" class="items">

                <input type="hidden" name="aura_player" id="player_type" value="aura_player">

                


                        </div>
                    </div>


                    <br>


                </div>
            </div>


        </div>
    </section>

</div>




    <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/aura_player.js"></script> 
    <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer.js"></script> 
   

<script>
    jQuery(document).ready(function ($) {


    });
</script>


</body>

</html>
';
return $html;
}