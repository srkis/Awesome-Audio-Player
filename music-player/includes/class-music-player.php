<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://srdjan.icodes.rocks
 * @since      1.0.0
 *
 * @package    Music_Player
 * @subpackage Music_Player/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Music_Player
 * @subpackage Music_Player/includes
 * @author     Srdjan Stojanovic <stojanovicsrdjan27@gmail.com>
 */
class Music_Player {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Music_Player_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'MUSIC_PLAYER_VERSION' ) ) {
			$this->version = MUSIC_PLAYER_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'music-player';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Music_Player_Loader. Orchestrates the hooks of the plugin.
	 * - Music_Player_i18n. Defines internationalization functionality.
	 * - Music_Player_Admin. Defines all hooks for the admin area.
	 * - Music_Player_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-music-player-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-music-player-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-music-player-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-music-player-public.php';

		$this->loader = new Music_Player_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Music_Player_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Music_Player_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Music_Player_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

			//Za dobavljanje svih playlista za admin
		$this->loader->add_action( 'wp_ajax_awesome_player_get_all_playlists', $plugin_admin, 'awesome_player_get_all_playlists', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_get_all_playlists', $plugin_admin, 'awesome_player_get_all_playlists', 1);

			//Za editovanje playliste na adminu
		$this->loader->add_action( 'wp_ajax_awesome_player_get_playlist_by_id', $plugin_admin, 'awesome_player_get_playlist_by_id', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_get_playlist_by_id', $plugin_admin, 'awesome_player_get_playlist_by_id', 1);

			// Za update playliste
		$this->loader->add_action( 'wp_ajax_awesome_player_update_playlist', $plugin_admin, 'awesome_player_update_playlist', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_update_playlist', $plugin_admin, 'awesome_player_update_playlist', 1);


	// Za update playliste
		$this->loader->add_action( 'wp_ajax_awesome_player_get_all_players', $plugin_admin, 'awesome_player_get_all_players', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_get_all_players', $plugin_admin, 'awesome_player_get_all_players', 1);


					//Za dobavljanje plejera na adminu edit plejer
		$this->loader->add_action( 'wp_ajax_awesome_player_get_player_by_id', $plugin_admin, 'awesome_player_get_player_by_id', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_get_player_by_id', $plugin_admin, 'awesome_player_get_player_by_id', 1);

		$this->loader->add_action( 'wp_ajax_awesome_player_update_player', $plugin_admin, 'awesome_player_update_player', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_update_player', $plugin_admin, 'awesome_player_update_player', 1);
		
		

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Music_Player_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
		
	//	$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'display_music_player' );		
	//	$this->loader->add_action( 'wp_register_script', $plugin_public, 'display_music_player' );

		$this->loader->add_action( 'wp_ajax_awesome_player_create_playlist', $plugin_public, 'wc_notifyme_ajax', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_create_playlist', $plugin_public, 'wc_notifyme_ajax', 1);

				//Za dobavljanje playliste za player na public
		$this->loader->add_action( 'wp_ajax_awesome_player_get_playlist', $plugin_public, 'awesome_player_get_playlist', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_get_playlist', $plugin_public, 'awesome_player_get_playlist', 1);

		
			//Za dobavljanje playliste za player na front-u.
		$this->loader->add_action( 'wp_ajax_awesome_player_get_playlist_by_id_frontend', $plugin_public, 'awesome_player_get_playlist_by_id_frontend', 1);
		$this->loader->add_action( 'wp_ajax_nopriv_awesome_player_get_playlist_by_id_frontend', $plugin_public, 'awesome_player_get_playlist_by_id_frontend', 1);
		
		$this->loader->add_action( 'init', $plugin_public, 'display_music_player' );




	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Music_Player_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
