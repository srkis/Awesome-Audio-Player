<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://srdjan.icodes.rocks
 * @since      1.0.0
 *
 * @package    Music_Player
 * @subpackage Music_Player/public
 */
 
 
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/music-player-public-display.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/music-player-aura-public-display.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/wave_player_single_display_1.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/wave_player_playlist_display_1.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/wave_modern_black_display_1.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/brid_tv_music_player_1.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/vertical_playlist_player_1.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/in_slide_sticky_player_1.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/fixed_bottom_thumbnail_grid.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/poster_audio_player.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/modern_circular_audio_player.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/awesome_lyrics_audio_player.php';
/**
 * The public-facing functionality of the plugin. 
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Music_Player
 * @subpackage Music_Player/public
 * @author     Srdjan Stojanovic <stojanovicsrdjan27@gmail.com>
 */
class Music_Player_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	private $display;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->display = html_music_player();

		global $wpdb;
		$this->db =& $wpdb;



	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Music_Player_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Music_Player_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/music-player-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

        wp_enqueue_script('jquery');
		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Music_Player_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Music_Player_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

	//wp_enqueue_script( $this->plugin_name . '-data' , plugin_dir_url( __FILE__ ) . 'js/music-player-data-public.js', array( 'jquery' ), $this->version, true );
	//	wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/music-player-public.js', array( 'jquery' ), $this->version, true );


		//wp_localize_script('music-player-data', 'musicData', array('pluginsUrl' => plugins_url(), ));

	}


	public function display_music_player() {

		// echo html_music_player();
		add_shortcode('test', 'html_music_player');
		add_shortcode('aura', 'aura_player_display');
		add_shortcode('wave-single-1', 'wave_player_single_display_1');
		add_shortcode('wave-playlist-1', 'wave_player_playlist_display_1');
		add_shortcode('wave-modern-black-1', 'wave_modern_black_display_1');
		add_shortcode('brid-tv-music-player-1', 'brid_tv_music_player_1');
		add_shortcode('vertical-playlist-player-1', 'vertical_playlist_player_1');
		add_shortcode('in-slide-sticky-player-1', 'in_slide_sticky_player_1');
		add_shortcode('fixed-bottom-thumbnail-grid', 'fixed_bottom_thumbnail_grid');
		add_shortcode('poster-audio-player', 'poster_audio_player');
		add_shortcode('modern-circular-audio-player', 'modern_circular_audio_player');
		add_shortcode('awesome-lyrics-audio-player', 'awesome_lyrics_audio_player');

	}


public function wc_notifyme_ajax() {

  	$aw_playlist_created_at = date('Y-m-d H:i:s');
  	$aw_playlist_name = $_GET['playlistName'];
  	$aw_playlist_reverseOrder = $_GET['reverseOrder'];
  	$aw_playlist_download_button = $_GET['downloadPlaylist'];
  	$aw_playlist_status = $_GET['playlistStatus'];
  	$aw_playlist = json_encode($_GET['playlist']);



  	$aw_playlist_reverseOrder = $aw_playlist_reverseOrder == 'true' ? 1 : 0;
  	$aw_playlist_download_button = $aw_playlist_download_button == 'true' ? 1 : 0;
  	$aw_playlist_status = $aw_playlist_status == 'true' ? 0 : 1;


  	// $msg = ["success" => "Playlist created successfully1"];
	// 	$this->jsonResponse($msg, $dbPlaylist);	
	// 	die;


  	$createPlaylist = $this->db->insert(
		$this->db->prefix . 'awesome_player_playlists',
		array(
		'aw_playlist_created_at' => $aw_playlist_created_at,
		'aw_playlist_name' => $aw_playlist_name,
		'aw_playlist_reverseOrder' => $aw_playlist_reverseOrder,
		'aw_playlist_download_button' => $aw_playlist_download_button,
		'aw_playlist_status' => $aw_playlist_status,
		'aw_playlist' => $aw_playlist,
		)
	  );

  	if($createPlaylist) {
  		$msg = ["success" => "Playlist created successfully"];
		$this->jsonResponse($msg, []);	
		die;
  	}else{
  		$msg = ["error" => "Something went wrong! Please try again later."];
		$this->jsonResponse($msg, []);
		die;
  	}

}


public function awesome_player_get_playlist() {

	$results = $this->db->get_results( "SELECT * FROM wp_awesome_player_playlists WHERE awPlaylistID = 4 " );
    $msg = ["success" => true];
	$this->jsonResponse($msg, $results);	

	//return $dbPlaylist;

}


public function awesome_player_get_playlist_by_id_frontend()
{
	$playerType = $_GET['playerType'];

	$getPlayer = $this->db->get_results( "SELECT * FROM wp_awesome_audio_player WHERE aw_player_type = '{$playerType}'" );
	$playlisId = (int) $getPlayer[0]->awPlaylistID;

	$getPlaylist = $this->db->get_results( "SELECT * FROM wp_awesome_player_playlists WHERE awPlaylistID = '{$playlisId}'" );

	$result = array(
		'playlist' => $getPlaylist,
		'player' => $getPlayer
	);


	$msg = ["success" => true];
	$this->jsonResponse($msg, $result);	

}


private function jsonResponse($msg, $result)
  {
		echo json_encode(array($msg, 'result' => $result));
		die;
  }


}
