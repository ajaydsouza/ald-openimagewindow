<?php

/*

Plugin Name: Open Picture Window
Version: 1.0
Plugin URI: http://www.ajaydsouza.com/wordpress/plugins/open-picture-window-plugin/
Description: Opens a new browser window with the image using JavaScript. All window options settable. Use <code>ald_OpenPictureWindow(theURL, winName, features, myWidth, myHeight, isCenter, myTitle) </code>
Author: Ajay D'Souza 
Author URI: http://www.ajaydsouza.com/

*/

if (!function_exists('get_settings')) {
	$ald_blog_url = $_SERVER['SCRIPT_URI'];
	$ald_blog_url = preg_replace("/wp-content\\/plugins\\/ald-openpicturewindow\\/ald-openpicturewindow\\.php$/", "", $ald_blog_url);
} else {
	$ald_blog_url = get_settings('siteurl');
}

function ald_openpicturewindow()
{
	global $ald_blog_url;
?>

<script type="text/javascript" src="<?php echo $ald_blog_url?>/wp-content/plugins/ald-openpicturewindow/ald-openpicturewindow.js"></script>

<?php
}


//add action when the head is written
add_action('wp_head', 'ald_openpicturewindow');
add_action('admin_head', 'ald_openpicturewindow');

?>