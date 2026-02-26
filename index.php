<?php
if (is_front_page()) {
    get_template_part('front-page');
    return;
}
get_header();
?>
<main class="section">
    <div class="arcano-container">
        <?php
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                the_title('<h1 class="section-title">', '</h1>');
                the_content();
            }
        } else {
            echo '<h1 class="section-title">Arcano Astral</h1>';
            echo '<p class="section-copy">Assign a static homepage to use the custom storefront design.</p>';
        }
        ?> 
    </div>
</main>
<?php get_footer(); ?>
