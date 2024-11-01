<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://srdjan.icodes.rocks
 * @since             1.0.0
 * @package           Music_Player
 *
 * @wordpress-plugin
 * Plugin Name:       Srki's Music Player
 * Plugin URI:        https://https://github.com/srkis
 * Description:       Music player Plugin. Create your own playlists  and add a player to your WP Websites.
 * Version:           1.0.0
 * Author:            Srdjan Stojanovic
 * Author URI:        https://srdjan.icodes.rocks
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       music-player
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}



/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'AWESOME_MUSIC_PLAYER_VERSION', '1.0.0' );
define('MUSIC_PLAYER_DIR',  WP_PLUGIN_URL . '/music-player');


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-music-player-activator.php
 */
function activate_awesome_music_player() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-music-player-activator.php';
	Music_Player_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-music-player-deactivator.php
 */
function deactivate_awesome_music_player() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-music-player-deactivator.php';
	Music_Player_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_awesome_music_player' );
register_deactivation_hook( __FILE__, 'deactivate_awesome_music_player' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-music-player.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_awesome_music_player() {
    

	$plugin = new Music_Player();
	$plugin->run();

}
run_awesome_music_player();

