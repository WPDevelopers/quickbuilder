<?php
/**
 * Plugin Name:     WP React Form
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     wp-react-form
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wp_React_Form
 */

// Your code starts here.

add_action('admin_menu', function(){
    add_menu_page('WPRF', 'WP React Form', 'manage_options', 'wp-react-form', 'wp_react_form_display');
});

function wp_react_form_display(){
    echo '<div id="root"></div>';
}

add_action('admin_enqueue_scripts', function( $hook ){
    if( $hook !== 'toplevel_page_wp-react-form' ) {
        return;
    }
    $dependencies = require_once __DIR__ . '/build/index.asset.php';
    wp_enqueue_script('wp-react-form', plugin_dir_url( __FILE__ ) . '/build/index.js', $dependencies['dependencies'], $dependencies['version'], true);
    // wp_enqueue_style('wp-react-form-wp-default', plugin_dir_url( __FILE__ ) . '/build/style-index.css', [], $dependencies['version'], 'all');
    wp_enqueue_style('wp-react-form', plugin_dir_url( __FILE__ ) . 'build/index.css', [], $dependencies['version'], 'all');
});