// if you are using wordpress , open your functions php file

// add_action('wp_enqueue_scripts', function(){
//  wp_enqueue_style( 'select2_css', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css' );
//  wp_register_script( 'select2_js', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js', array('jquery'), '4.0.3', true );
//  wp_enqueue_script('select2_js');
// });

// and to activate select2 you need to write this js code
jQuery(document).ready(function(){
 jQuery('select').select2();
});
