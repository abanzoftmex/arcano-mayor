<?php
get_header();

if (function_exists('arcano_has_react_home_assets') && arcano_has_react_home_assets()) {
    echo '<main><div id="arcano-frontend-app"></div></main>';
} else {
    get_template_part('template-parts/home-content');
}

get_footer();
