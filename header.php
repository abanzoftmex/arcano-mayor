<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
    <div class="arcano-container site-header__inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-mark">
            Arcano <span>Astral</span>
        </a>
        <nav class="site-nav">
            <a href="#services">Services</a>
            <a href="#shop">Shop</a>
            <a href="#ritual">Ritual Box</a>
            <a href="#insights">Insights</a>
        </nav>
        <a href="#shop" class="shop-pill">Enter Shop</a>
    </div>
</header>
