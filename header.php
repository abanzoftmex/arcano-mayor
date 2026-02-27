<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php if (!(is_front_page() && function_exists('arcano_has_react_home_assets') && arcano_has_react_home_assets())) : ?>
<header class="site-header">
    <div class="arcano-container site-header__inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-mark">
            Arcano <span>Astral</span>
        </a>
        <nav class="site-nav">
            <a href="#features">Servicios</a>
            <a href="#catalogo">Catalogo</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
        </nav>
        <a href="#catalogo" class="shop-pill">Ver bloques</a>
    </div>
</header>
<?php endif; ?>
