<?php
require_once plugin_dir_path( __FILE__ ) . 'partials/music-player-admin-display.php';
require_once plugin_dir_path( __FILE__ ) . 'partials/music-player-admin-edit-player.php';
require_once plugin_dir_path( __FILE__ ) . 'partials/music-player-create-playlist.php';
require_once plugin_dir_path( __FILE__ ) . 'partials/music-player-playlists.php';
require_once plugin_dir_path( __FILE__ ) . 'partials/music-player-edit-playlist.php';
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://srdjan.icodes.rocks
 * @since      1.0.0
 *
 * @package    Music_Player
 * @subpackage Music_Player/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Music_Player
 * @subpackage Music_Player/admin
 * @author     Srdjan Stojanovic <stojanovicsrdjan27@gmail.com>
 */
class Music_Player_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		global $wpdb;
		$this->db =& $wpdb;

		$this->url = home_url() . "/" . "wp-admin/admin-post.php";
		$this->init_music_player_admin_page();

	}

	/**
	 * Register the stylesheets for the admin area.
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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/music-player-admin.css', array(), $this->version, 'all' );
		
		
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

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

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/music-player-admin.js', array( 'jquery' ), $this->version, false );

		// UPLOAD ENGINE
    wp_enqueue_media();

}

	public function init_music_player_admin_page() {

		add_action('admin_menu', array($this, 'music_player_admin_page' ) );

  }


  public function music_player_admin_page() { 

	$icon_base64 = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNDRkYwOUU7IiBjeD0iMTA5LjE4MiIgY3k9IjQxNC4xMzgiIHI9IjgzLjg3OSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0NGRjA5RTsiIGN4PSI0MDIuODE0IiBjeT0iMzQ0LjE5NyIgcj0iODMuODc5Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNTA3QzVDOyIgZD0iTTE5My4wNjMsMjA5Ljg4M2MtNy43MjEsMC0xMy45OCw2LjI1OS0xMy45OCwxMy45OFYzNDUuNzUNCgkJYy0xNy43NzctMTguMTY0LTQyLjUzOC0yOS40NjUtNjkuODk5LTI5LjQ2NWMtNTMuOTU5LDAtOTcuODU5LDQzLjg5OS05Ny44NTksOTcuODU5czQzLjg5OSw5Ny44NTksOTcuODU5LDk3Ljg1OQ0KCQlzOTcuODU5LTQzLjg5OSw5Ny44NTktOTcuODU5di0xOTAuMjhDMjA3LjA0MiwyMTYuMTQyLDIwMC43ODQsMjA5Ljg4MywxOTMuMDYzLDIwOS44ODN6IE0xMDkuMTg0LDQ4NC4wNDENCgkJYy0zOC41NDIsMC02OS44OTktMzEuMzU3LTY5Ljg5OS02OS44OTlzMzEuMzU3LTY5Ljg5OSw2OS44OTktNjkuODk5czY5Ljg5OSwzMS4zNTcsNjkuODk5LDY5Ljg5OVMxNDcuNzI2LDQ4NC4wNDEsMTA5LjE4NCw0ODQuMDQxDQoJCXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNTA3QzVDOyIgZD0iTTQ5Ni4xMDEsMy42MzdjLTIuOTEzLTIuNjQ5LTYuODExLTMuOTQ4LTEwLjczMS0zLjU3M0wxOTEuNzM2LDI4LjA0MQ0KCQljLTcuMTc0LDAuNjg0LTEyLjY1NSw2LjcxLTEyLjY1NSwxMy45MTd2OTEuNzM1YzAsMC4wMSwwLjAwMSwwLjAyLDAuMDAxLDAuMDI5YzAuMDAxLDAuMjQzLDAuMDI0LDAuNDg5LDAuMDM4LDAuNzM1DQoJCWMwLjAxMywwLjIzOSwwLjAxNywwLjQ4MSwwLjA0MiwwLjcxN2MwLjAwMSwwLjAxLDAsMC4wMiwwLjAwMSwwLjAzMWMwLjAyNSwwLjIzNiwwLjA3MywwLjQ2NCwwLjEwOSwwLjY5Ng0KCQljMC4wNjIsMC4zODMsMC4xMzYsMC43NiwwLjIyOCwxLjEzMmMwLjA2NCwwLjI2MSwwLjEyMiwwLjUyNiwwLjIsMC43OGMwLjA1LDAuMTY0LDAuMTE2LDAuMzIyLDAuMTcyLDAuNDgyDQoJCWMwLjA5MSwwLjI2MywwLjE4LDAuNTI3LDAuMjg3LDAuNzgxYzAuMDYyLDAuMTQ1LDAuMTM0LDAuMjg0LDAuMiwwLjQyOGMwLjEyLDAuMjYxLDAuMjM5LDAuNTIzLDAuMzczLDAuNzc0DQoJCWMwLjA3MywwLjEzNywwLjE1NywwLjI2NywwLjIzMywwLjRjMC4xNDMsMC4yNDcsMC4yODcsMC40OTMsMC40NDMsMC43M2MwLjA4OCwwLjEzMywwLjE4NSwwLjI2LDAuMjc3LDAuMzkNCgkJYzAuMTYxLDAuMjI1LDAuMzIyLDAuNDQ3LDAuNDk1LDAuNjYzYzAuMTA4LDAuMTMzLDAuMjIxLDAuMjU5LDAuMzMzLDAuMzg3YzAuMTcyLDAuMTk3LDAuMzQ0LDAuMzkxLDAuNTI2LDAuNTc5DQoJCWMwLjEyOSwwLjEzMywwLjI2MSwwLjI1OSwwLjM5NiwwLjM4NmMwLjE3OCwwLjE2OSwwLjM1OCwwLjMzNiwwLjU0NCwwLjQ5NWMwLjE1LDAuMTI3LDAuMzAyLDAuMjUsMC40NTYsMC4zNzINCgkJYzAuMTgzLDAuMTQ0LDAuMzY5LDAuMjg0LDAuNTU5LDAuNDE4YzAuMTY4LDAuMTE5LDAuMzM4LDAuMjMzLDAuNTEyLDAuMzQ1YzAuMTksMC4xMjIsMC4zODMsMC4yMzksMC41NzksMC4zNTINCgkJYzAuMTgyLDAuMTA1LDAuMzYzLDAuMjA3LDAuNTUxLDAuMzA1YzAuMjAzLDAuMTA2LDAuNDExLDAuMjAzLDAuNjE5LDAuMjk4YzAuMTg2LDAuMDg1LDAuMzcyLDAuMTcxLDAuNTYzLDAuMjQ5DQoJCWMwLjIyOCwwLjA5MiwwLjQ2LDAuMTczLDAuNjkzLDAuMjUzYzAuMTc5LDAuMDYyLDAuMzU2LDAuMTI3LDAuNTM4LDAuMTgyYzAuMjcxLDAuMDgxLDAuNTQ4LDAuMTQ3LDAuODI1LDAuMjEyDQoJCWMwLjE1MiwwLjAzNSwwLjMwMSwwLjA3NywwLjQ1NCwwLjEwOGMwLjM1NSwwLjA3LDAuNzE2LDAuMTIyLDEuMDc4LDAuMTY1YzAuMDg0LDAuMDEsMC4xNjYsMC4wMjcsMC4yNTIsMC4wMzUNCgkJYzAuNDU3LDAuMDQ2LDAuOTE4LDAuMDczLDEuMzg0LDAuMDczYzAuMDQyLDAsMC4wODUtMC4wMDcsMC4xMjctMC4wMDdjMC40NjMtMC4wMDQsMC45MjEtMC4wMjcsMS4zNzMtMC4wNzQNCgkJYzAuMDEtMC4wMDEsMC4wMiwwLDAuMDI5LTAuMDAxbDIyMi4xOTItMjQuMTc5djc5LjQ3NmMwLDcuNzIxLDYuMjU5LDEzLjk4LDEzLjk4LDEzLjk4YzcuNzIxLDAsMTMuOTgtNi4yNTksMTMuOTgtMTMuOTh2LTk1LjA2DQoJCWMwLTAuMDEtMC4wMDEtMC4wMi0wLjAwMS0wLjAyOWMtMC4wMDEtMC4yNDMtMC4wMjQtMC40ODktMC4wMzgtMC43MzVjLTAuMDEzLTAuMjM5LTAuMDE3LTAuNDgxLTAuMDQyLTAuNzE3DQoJCWMtMC4wMDEtMC4wMSwwLTAuMDItMC4wMDEtMC4wMzFjLTAuMDE0LTAuMTI3LTAuMDQzLTAuMjQ5LTAuMDYtMC4zNzZjLTAuMDQ2LTAuMzM3LTAuMDkxLTAuNjc0LTAuMTYxLTEuMDA0DQoJCWMtMC4wMjgtMC4xMzYtMC4wNy0wLjI2Ni0wLjEwMy0wLjRjLTAuMDc3LTAuMzE3LTAuMTU0LTAuNjM2LTAuMjUyLTAuOTQ0Yy0wLjA1Mi0wLjE2NC0wLjExNy0wLjMxOS0wLjE3NS0wLjQ4DQoJCWMtMC4wOTYtMC4yNy0wLjE5LTAuNTQtMC4zMDItMC44MDJjLTAuMDgtMC4xODUtMC4xNzMtMC4zNTktMC4yNi0wLjU0Yy0wLjEwOS0wLjIyOC0wLjIxNC0wLjQ1OS0wLjMzNi0wLjY3OA0KCQljLTAuMTAyLTAuMTg2LTAuMjE5LTAuMzYyLTAuMzMtMC41NDRjLTAuMTI0LTAuMjA0LTAuMjQ1LTAuNDExLTAuMzc5LTAuNjA4Yy0wLjExNy0wLjE3Mi0wLjI0Ny0wLjMzMy0wLjM3Mi0wLjQ5OA0KCQljLTAuMTQ3LTAuMTk0LTAuMjg4LTAuMzkzLTAuNDQ1LTAuNTc5Yy0wLjEyMy0wLjE0NS0wLjI1Ni0wLjI4MS0wLjM4NC0wLjQyMmMtMC4xNzUtMC4xOTMtMC4zNDgtMC4zODktMC41MzQtMC41NzINCgkJYy0wLjEyLTAuMTE5LTAuMjQ5LTAuMjI1LTAuMzczLTAuMzRjLTAuMjA4LTAuMTktMC40MTQtMC4zODMtMC42MzMtMC41NjFjLTAuMTE3LTAuMDk1LTAuMjQyLTAuMTgtMC4zNjItMC4yNzENCgkJYy0wLjIzOC0wLjE4LTAuNDc0LTAuMzYxLTAuNzIzLTAuNTI3Yy0wLjEyLTAuMDgtMC4yNDctMC4xNDgtMC4zNy0wLjIyNWMtMC4yNTktMC4xNTktMC41MTYtMC4zMi0wLjc4NC0wLjQ2Mw0KCQljLTAuMTM4LTAuMDc0LTAuMjg0LTAuMTM2LTAuNDI2LTAuMjA2Yy0wLjI2LTAuMTI3LTAuNTE5LTAuMjU3LTAuNzg3LTAuMzY4Yy0wLjE4My0wLjA3NS0wLjM3My0wLjEzNy0wLjU1OS0wLjIwNA0KCQljLTAuMjM1LTAuMDg1LTAuNDY2LTAuMTc2LTAuNzA2LTAuMjVjLTAuMjU0LTAuMDc4LTAuNTE2LTAuMTM2LTAuNzc2LTAuMmMtMC4xOC0wLjA0My0wLjM1Ny0wLjA5Ni0wLjU0LTAuMTMzDQoJCWMtMC4zMzMtMC4wNjctMC42NzItMC4xMTItMS4wMTItMC4xNTRjLTAuMTE5LTAuMDE1LTAuMjM1LTAuMDM5LTAuMzU1LTAuMDUyYy0wLjM2Ni0wLjAzNi0wLjc0LTAuMDQ5LTEuMTExLTAuMDU2DQoJCWMtMC4wOTYtMC4wMDEtMC4xOS0wLjAxNC0wLjI4OC0wLjAxNGMtMC4wMDgsMC0wLjAxNSwwLjAwMS0wLjAyNCwwLjAwMWMtMC4yNiwwLjAwMS0wLjUyNCwwLjAyNC0wLjc4NywwLjAzOQ0KCQljLTAuMjI0LDAuMDEzLTAuNDUsMC4wMTUtMC42NzEsMC4wMzljLTAuMDEsMC4wMDEtMC4wMjEsMC0wLjAzMSwwLjAwMWwtMjIyLjE4NiwyNC4xNzd2LTYzLjQ0bDI2NS42NzUtMjUuMzEzdjI0Ni40NQ0KCQljLTE3Ljc3Ny0xOC4xNjQtNDIuNTM4LTI5LjQ2NS02OS44OTktMjkuNDY1Yy01My45NTksMC05Ny44NTksNDMuODk5LTk3Ljg1OSw5Ny44NTlzNDMuODk5LDk3Ljg1OSw5Ny44NTksOTcuODU5DQoJCXM5Ny44NTktNDMuODk5LDk3Ljg1OS05Ny44NTlWMTMuOThDNTAwLjY3NywxMC4wNDIsNDk5LjAxNCw2LjI4Nyw0OTYuMTAxLDMuNjM3eiBNNDAyLjgxOCw0MTQuMDk5DQoJCWMtMzguNTQyLDAtNjkuODk5LTMxLjM1Ny02OS44OTktNjkuODk5czMxLjM1Ny02OS44OTksNjkuODk5LTY5Ljg5OXM2OS44OTksMzEuMzU3LDY5Ljg5OSw2OS44OTlTNDQxLjM2LDQxNC4wOTksNDAyLjgxOCw0MTQuMDk5eg0KCQkiLz4NCjwvZz4NCjwvc3ZnPg==';
	$icon_data_uri = 'data:image/svg+xml;base64,' . $icon_base64;



  //add_menu_page('Test', 'test', 'manage_options', 'test', 'bananaMonday', null, 6);


		add_menu_page(
		'Music Player', 
		'Music Player ', 
		'manage_options',
		'choose-awesome-player',
		 function() { choose_awesome_player_page(1, 'test-player'); },
		 //'music_player_option_page', 
		 $icon_data_uri
	);
    

	// add_menu_page(
	// 	'Music Player', 
	// 	'Music Player ', 
	// 	'manage_options',
	// 	'music-player-options',
	// 	 function() { music_player_option_page(1, 'test-player'); },
	// 	 //'music_player_option_page', 
	// 	 $icon_data_uri
	// );
    


	// add_submenu_page( 
	//     'edit.php?post_type=woo-wholesale', 
	//     'Registrations', 
	//     'Registrations', 
	//     'manage_options', 
	//     'woo-wholesale-registrations', 
	//     'wwpr_page_call' 
	// );
    


	// add_menu_page(
	// 	'Woo Notify Me', 
	// 	'Woo Notify Me ', 
	// 	'manage_options',
	// 	'woo-notifyme-options',
	// 	 array($this, 'wc_notifyme_subscribers_page'), 
	// 	// plugins_url('/images/woo_price_notifier_icon_small.png', __DIR__) 
	// 	$icon_data_uri
	// );


	$edit_post = add_query_arg('c', '123', 'admin.php/news' );

    
	add_submenu_page(
		'choose-awesome-player', 
		'Awesome Player', 
		'Choose Player', 
		'manage_options', 
		'choose-awesome-player' 
	);


add_submenu_page(
		'choose-awesome-player', 
		'Add New Playlist', 
		'Add New Playlist', 
		'manage_options', 
		'create-awesome-playlist',
		 function() { create_awesome_playlist_page(1, 'test-player'); },
	);
    

		add_submenu_page(
		'choose-awesome-player', 
		'Playlists', 
		'Playlists', 
		'manage_options', 
		'awesome-player-playlists',
		 function() {playlists_page(); },
	);

		    
    
	add_submenu_page(
      null, // hide edit player sa sidebar-a
      'Edit Player', //page title
      'Settings', //menu title
      'edit_themes', //capability,
      'edit-awesome-player', 
      function() { music_player_edit_player_page(1, 'test-player'); },
  );

	add_submenu_page(
      null, // hide edit player sa sidebar-a
      'Edit Playlist', //page title
      'Settings', //menu title
      'edit_themes', //capability,
      'edit-awesome-playlist', 
      function() { music_player_edit_playlist_page(); },
  );


 }



 public function awesome_player_get_all_playlists(){

 	$results = $this->db->get_results( "SELECT * FROM wp_awesome_player_playlists" );
    $msg = ["success" => true];
//	$dbPlaylist = json_decode($results, true);
//	var_dump("<pre>", $results[0]->aw_playlist);die;
	$this->jsonResponse($msg, $results);	

	//return $dbPlaylist;

}

public function awesome_player_get_all_players() {
	$results = $this->db->get_results( "SELECT * FROM wp_awesome_audio_player WHERE aw_player_status = 'active' " );
    $msg = ["success" => true];

	$this->jsonResponse($msg, $results);	
}


public function awesome_player_get_player_by_id() 
{
	if(!isset($_GET['playerId'])) {
		$msg = ["success" => false];
		$this->jsonResponse($msg, ['Missing parameters!']);	
		die;
	}

	$playerId = $_GET['playerId'];

	$results = $this->db->get_results( "SELECT * FROM wp_awesome_audio_player WHERE awID = '{$playerId}' " );

	$playlist = $this->db->get_results( "SELECT * FROM wp_awesome_player_playlists" );

	$msg = ["success" => true];
	//$this->jsonResponse($msg, $results);	

	echo json_encode(array($msg, 'result' => $results, 'playlist' => $playlist));
		wp_die();

}


public function awesome_player_get_playlist_by_id() 
{
	if(!isset($_GET['playlistId'])) {
		$msg = ["success" => false];
		$this->jsonResponse($msg, ['Missing parameters!']);	
		die;
	}


	$playlistId = $_GET['playlistId'];

	$results = $this->db->get_results( "SELECT * FROM wp_awesome_player_playlists WHERE awPlaylistID = {$playlistId}" );
	$msg = ["success" => true];
	$this->jsonResponse($msg, $results);	

}



public function awesome_player_update_player() 
{
	
		$playerId = (int) $_GET['playerId'];
		$playerName = $_GET['playerName'];
		$aw_player_muted = $_GET['muted'];
		$loopRepeat = $_GET['loopRepeat'];
		$autoplay = $_GET['autoplay'];
		$playerWidth = $_GET['playerWidth'];
		$playerPlaylistId = $_GET['playerPlaylistId'];
		$fastForwardInput = $_GET['fastForwardInput'];
		$rewindInput = $_GET['rewindInput'];
		$seekTime = $_GET['seekTime'];
		$stopButtonInput = $_GET['stopButtonInput'];
		$progressbardInput = $_GET['progressbardInput'];
		$durationdInput = $_GET['durationdInput'];
		$currentTimeInput = $_GET['currentTimeInput'];
		$volumeControlInput = $_GET['volumeControlInput'];
		$settingsButtonInput = $_GET['settingsButtonInput'];
		$downloadButtonInput = $_GET['downloadButtonInput'];
		$stickyPlayer = $_GET['stickyPlayer'];
		$adTagType = $_GET['adTagType'];
		$adTagUrl = $_GET['adTagUrl'];


		//var_dump("<pre>", $_GET);die;


		$update = $this->db->update(
		$this->db->prefix . 'awesome_audio_player',
		 array(
		 		   'aw_player_name' => $playerName, 
		 	   	'aw_player_width' => $playerWidth,
		 		   'aw_player_muted' => $aw_player_muted == "false" ? 0 : 1,
		 		   'aw_player_repeat' => $loopRepeat,
		 		   'aw_player_autoplay' => $autoplay == "false" ? 0 : 1,
		 		   'awPlaylistID' => $playerPlaylistId,
		 		   'aw_player_fast_forward' => $fastForwardInput == "false" ? 0 : 1,
		 		   'aw_player_rewind' => $rewindInput == "false" ? 0 : 1,
		 		   'aw_player_rewind' => $rewindInput == "false" ? 0 : 1,
		 		   'aw_player_seek_time' => $seekTime,
		 		   'aw_player_stop' => $stopButtonInput == "false" ? 0 : 1,
		 		   'aw_player_progressbar' => $progressbardInput == "false" ? 0 : 1, 
		 		   'aw_player_duration' => $durationdInput == "false" ? 0 : 1,
		 		   'aw_player_current_time' => $currentTimeInput == "false" ? 0 : 1,
		 		   'aw_player_volume_button' => $volumeControlInput == "false" ? 0 : 1,
		 		   'aw_player_settings_button' => $settingsButtonInput == "false" ? 0 : 1,
		 		   'aw_player_download_button' => $downloadButtonInput == "false" ? 0 : 1,
		 		   'aw_player_sticky' => $stickyPlayer == "false" ? 0 : 1,
		 		   'aw_ad_tag_url_type' => $adTagType,
		 		   'aw_ad_tag_url' => $adTagUrl
		 	), 

		 array('awID'=> $playerId )

		);

		//var_dump($this->db->show_errors();

	if( $update ) {
		$msg = ["success" => 'Player Updated Successfully'];
	   $this->jsonResponse($msg, []);	
	}


}


public function awesome_player_update_playlist()
{

	//var_dump("<pre>",$_GET['playlist']);die("opa");

	$playlistId = (int) $_GET['playlistId'];
	$playlistName = $_GET['playlistName'];
	$reverseOrder = $_GET['reverseOrder'];
	$downloadPlaylist = $_GET['downloadPlaylist'];
	$playlistStatus = $_GET['playlistStatus'];
	$aw_playlist = json_encode($_GET['playlist']);

	$update = $this->db->update(
		$this->db->prefix . 'awesome_player_playlists',
		 array(
		 		   'aw_playlist_name' => $playlistName, 
		 	   	   'aw_playlist_status' => $playlistStatus,
		 		   'aw_playlist' => $aw_playlist,
		 		   'aw_playlist_download_button' => $downloadPlaylist,
		 		   'aw_playlist_reverseOrder' => $reverseOrder,
		 	), 

		 array('awPlaylistID'=> $playlistId )

		);

	if( $update ) {
		$msg = ["success" => 'Playlist Updated Successfully'];
	   $this->jsonResponse($msg, []);	
	}


}

 

 private function jsonResponse($msg, $result)
  {
		echo json_encode(array($msg, 'result' => $result));
		die;
  }

//material design mobile app website template free
//https://superdevresources.com/material-design-html5-templates-free-download/
}
