<?php

/**
 * Fired during plugin activation
 *
 * @link       https://srdjan.icodes.rocks
 * @since      1.0.0
 *
 * @package    Music_Player
 * @subpackage Music_Player/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Music_Player
 * @subpackage Music_Player/includes
 * @author     Srdjan Stojanovic <stojanovicsrdjan27@gmail.com>
 * @source https://codex.wordpress.org/Creating_Tables_with_Plugins
 */
class Music_Player_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
     * 
	 */

      private $db, $plugin_name;
      private static $version = AWESOME_MUSIC_PLAYER_VERSION;

    public function __construct() {

            global $wpdb;

            $this->plugin_name = 'music-player';
            
            $this->db =& $wpdb;
        }


	public static function activate() {

        global $wpdb;

        $awesome_audio_player = $wpdb->prefix . 'awesome_audio_player';
        $awesome_player_playlists = $wpdb->prefix . 'awesome_player_playlists';
        $version = self::$version;
        $charset_collate = $wpdb->get_charset_collate();
        $img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';
        $date = date('Y-m-d H:i:s');


        $sql = [];

            //Create player table
         if( $wpdb->get_var("show tables like '". $awesome_audio_player . "'") !== $awesome_audio_player ) { 

            $sql[] = "CREATE TABLE ". $awesome_audio_player . "     (
                awID int(11) NOT NULL AUTO_INCREMENT,
                awPlaylistID int(11),
                aw_player_created $date,
                aw_player_name  VARCHAR(255) NOT NULL,
                aw_player_type  VARCHAR(255) NOT NULL,
                aw_player_desc TEXT,
                aw_player_status VARCHAR(20) NOT NULL,
                aw_player_width VARCHAR(100) NOT NULL DEFAULT 'responsive',
                aw_player_muted TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_repeat TINYINT(1) NOT NULL DEFAULT 0,
                aw_player_autoplay TINYINT(1) NOT NULL DEFAULT 0,
                aw_player_fast_forward TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_rewind TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_stop TINYINT(1) NOT NULL DEFAULT 0,
                aw_player_progressbar TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_duration TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_current_time TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_volume_button TINYINT(1) NOT NULL DEFAULT 1,
                aw_player_settings_button TINYINT(1) NOT NULL DEFAULT 0,
                aw_player_download_button TINYINT(1) NOT NULL DEFAULT 0,
                aw_player_sticky TINYINT(1) NOT NULL DEFAULT 0,
                aw_player_seek_time INT(11) NOT NULL DEFAULT 5,
                aw_player_screenshot VARCHAR(255),
                aw_ad_tag_url TEXT,
                aw_ad_tag_url_type varchar(100),
                aw_player_start_date datetime DEFAULT  NULL,
                aw_player_end_date datetime DEFAULT NULL,
                aw_player_version VARCHAR(100) DEFAULT '$version',
                PRIMARY KEY  (awID)
                )$charset_collate; ";
     }





        //Create playlists table

     if( $wpdb->get_var("show tables like '". $awesome_player_playlists . "'") !== $awesome_player_playlists ) { 

        $sql[] = "CREATE TABLE ". $awesome_player_playlists . "     (
                awPlaylistID int(11) NOT NULL AUTO_INCREMENT,
                aw_plalist_created_at datetime,
                aw_playlist_name  VARCHAR(255) NOT NULL,
                aw_playlist_status VARCHAR(20) NOT NULL,
                aw_playlist JSON DEFAULT NULL,
                aw_playlist_download_button TINYINT(1) NOT NULL DEFAULT 0,
                PRIMARY KEY  (awPlaylistID)
                )$charset_collate; ";
     }


     if ( !empty($sql) ) {
 
         require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
 
         dbDelta($sql);
         
     }


     $results = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}awesome_audio_player");


       $audio_players = array(
    array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Player 1',
        'aw_player_type' => 'player_1',
        'aw_player_desc' => 'Player 1 description for admin',
        'aw_player_status' => 'active',
        'aw_player_width' => 'responsive',
        'aw_player_muted' => 1,
        'aw_player_repeat' => 0,
        'aw_player_autoplay' => 0,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 0,
        'aw_player_download_button' => 0,
        'aw_player_seek_time' => 5,
        'aw_player_start_date' => '0000-00-00 00:00:00',
        'aw_player_end_date' => '0000-00-00 00:00:00',
        'aw_player_version' =>  $version
    ),
    array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Wave Black Modern 1',
        'aw_player_type' => 'wave_black_modern_1',
         'aw_player_desc' => 'Wave Black Modern 1 description for admin',
        'aw_player_status' => 'active',
        'aw_player_width' => 'responsive',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

         array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Aura Player',
        'aw_player_type' => 'aura_player',
         'aw_player_desc' => 'Aura Player description for admin',
        'aw_player_status' => 'inactive',
        'aw_player_width' => '800px',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

     array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Wave Player single 1',
        'aw_player_type' => 'wave_player_single_1',
         'aw_player_desc' => 'Wave Player single 1 description for admin',
        'aw_player_status' => 'inactive',
        'aw_player_width' => '800px',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-single1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

      array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Wave Player playlist 1',
        'aw_player_type' => 'wave_player_playlist_1',
        'aw_player_desc' => 'Wave Player playlist 1 description for admin',
        'aw_player_status' => 'inactive',
        'aw_player_width' => '800px',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

      array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Brid.TV Music Player',
        'aw_player_type' => 'brid_tv_music_player_1',
        'aw_player_desc' => 'Brid.TV Music player skin',
        'aw_player_status' => 'active',
        'aw_player_width' => '800px',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

      array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Vertical Playlist Player 1',
        'aw_player_type' => 'vertical_playlist_player_1',
        'aw_player_desc' => 'Vertical Playlist Player Purple skin',
        'aw_player_status' => 'active',
        'aw_player_width' => '800px',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

        array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'In slide sticky player 1',
        'aw_player_type' => 'in-slide-sticky-player-1',
        'aw_player_desc' => 'In slide sticky player 1',
        'aw_player_status' => 'active',
        'aw_player_width' => '800px',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),
         array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Fixed Bottom thumbnail grid ',
        'aw_player_type' => 'fixed-bottom-thumbnail-grid',
        'aw_player_desc' => 'Full width player fixed to page bottom. Playlist opens on demand and uses a thumbnail grid.',
        'aw_player_status' => 'active',
        'aw_player_width' => 'responsive',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),
         array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Poster Audio Player ',
        'aw_player_type' => 'poster-audio-player',
        'aw_player_desc' => 'Player without visible playlist. All player controls are located above player artwork.',
        'aw_player_status' => 'active',
        'aw_player_width' => 'responsive',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),

        array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Modern Circular Audio Player ',
        'aw_player_type' => 'modern-circular-audio-player',
        'aw_player_desc' => 'Player with playlist on the right. On narrow screen playlist goes below player. Player has circular seekbar over poster area.',
        'aw_player_status' => 'active',
        'aw_player_width' => 'responsive',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    ),
    array(
        'awPlaylistID' => null,
        'aw_player_created_at' => date('Y-m-d H:i:s'),
        'aw_player_name' => 'Awesome Lyrics Audio Player ',
        'aw_player_type' => 'awesome-lyrics-audio-player',
        'aw_player_desc' => 'Support for audio Lyrics. Player will automatically synchronize lyrics with playing audio to make a perfect Karaoke player. Supports standard lyrics formats like lrc, vtt, src. ',
        'aw_player_status' => 'active',
        'aw_player_width' => 'responsive',
        'aw_player_muted' => 0,
        'aw_player_repeat' => 1,
        'aw_player_autoplay' => 1,
        'aw_player_fast_forward' => 1,
        'aw_player_rewind' => 1,
        'aw_player_stop' => 0,
        'aw_player_progressbar' => 1,
        'aw_player_duration' => 1,
        'aw_player_current_time' => 1,
        'aw_player_volume_button' => 1,
        'aw_player_settings_button' => 1,
        'aw_player_download_button' => 1,
        'aw_player_seek_time' => 5,
        'aw_player_screenshot' => $img_url . 'wave-playlist1-screenshot.png',
        'aw_player_start_date' => '2022-01-01 00:00:00',
        'aw_player_end_date' => '2022-12-31 23:59:59',
        'aw_player_version' =>  $version
    )

 );


    if(is_array($results) && !empty($results)) {

         foreach( $audio_players as $index => $player ){

           if($results[$index]->aw_player_type !== $audio_players[$index]['aw_player_type']) {
             $wpdb->insert( $awesome_audio_player, $player);
           }
      }

    }


      // foreach( $audio_players as $index => $player ){
        
      //       $wpdb->insert( $awesome_audio_player, $player);
      // }


  
/*
     if(count($results) == 0) {

        for($i = 1; $i <= 3; $i++) {

     $wpdb->insert(

        $awesome_audio_player,
        array(
            'awPlaylistID' => null,
            'aw_player_created_at' => date('Y-m-d H:i:s'),
            'aw_player_name' => 'Player ' . $i ,
            'aw_player_status' => $i == 1 ? 'active' : 'inactive',
            'aw_player_width' => 'responsive',
            'aw_player_muted' => 1,
            'aw_player_repeat' => 0,
            'aw_player_autoplay' => 0,
            'aw_player_fast_forward' => 1,
            'aw_player_rewind' => 1,
            'aw_player_restart' => 0,
            'aw_player_progressbar' => 1,
            'aw_player_duration' => 1,
            'aw_player_current_time' => 1,
            'aw_player_mute_button' => 1,
            'aw_player_volume_control' => 1,
            'aw_player_settings_button' => 0,
            'aw_player_download_button' => 0,
            'aw_player_start_date' => '0000-00-00 00:00:00',
            'aw_player_end_date' => '0000-00-00 00:00:00',
            'aw_player_version' => $version
          )
        );

   // var_dump($wpdb->print_error());die;

        }
    }

*/

	}

}