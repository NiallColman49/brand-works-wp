<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'A|nJXBd#)]X3@.+9m4{KMLle2#_ci%Ht|&@pV{+tEZ65NA27ur@b3LQ:j|l)%P$<' );
define( 'SECURE_AUTH_KEY',   '#;,@wCI5NID|=RYTWuTdpk747!2u{N]juViTkydTA{V,*l{/T#96V9Hv2]DpbR9D' );
define( 'LOGGED_IN_KEY',     ' H$*d?N+sqJN2^<]5]?CZ594i=ypJ3Jx]otB?ACP>r4M:=$[Teyrz|-~7*gCC=mg' );
define( 'NONCE_KEY',         'tRMli{`@GMyM-?KoiXRyU :y(5ubp|mgT]oL_n=n=E1Ao=MDuP>-mGq!x>Z6H$;#' );
define( 'AUTH_SALT',         '/1Ekfoazx:ga,g&Jb4 uI1$eF>r[8]l}RtN,~Q4#FD#g[dR`Zf}[~iJWo5f:bMud' );
define( 'SECURE_AUTH_SALT',  'sd-7oHb_YZD}M*$t% (diPW~9.0?k}R)%<222i^p.B$]zvNM9(hfjaao*0Mmd(gW' );
define( 'LOGGED_IN_SALT',    '*1slqg/45w|!atbeo){UQJmRk>,j1oDb$7aWN,Oq11N92G`6>Fi{!X2K`55O%$nR' );
define( 'NONCE_SALT',        'yyz,3#Y9pswxGbVIEl2fTES6,8r4p2DQl8;zw(q*C&z> ng(~kM+7:)WM*F+DKNv' );
define( 'WP_CACHE_KEY_SALT', '{e%J?|nHly6l.|_qUOv3Yp#yfc04,8?2g(}R9RTy)G<M_ RNdN1G)1?AlAAwsO{Y' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */

// Disable all core updates
define( 'WP_AUTO_UPDATE_CORE', false );


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
