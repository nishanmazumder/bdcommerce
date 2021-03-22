const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('./resources/js/admin/app.js', 'public/js/admin.js').vue()

.styles([
    './node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    './node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
    //'./resources/asset/admin/css/sb-admin-2.min.css',
    './resources/asset/admin/css/sb-admin-2.min.css'
], 'public/css/app.css')

.scripts([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    './node_modules/jquery.easing/jquery.easing.min.js',

    // './node_modules/chart.js/dist/Chart.min.js',
    // 'resources/asset/admin/js/demo/chart-area-demo.js',
    // 'resources/asset/admin/js/demo/chart-pie-demo.js',
    // 'resources/asset/admin/js/demo/chart-bar-demo.js',
    './resources/asset/admin/js/sb-admin-2.min.js',

    './node_modules/datatables.net/js/jquery.dataTables.min.js',
    './node_modules/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
    './resources/asset/admin/js/demo/datatables-demo.js',

], 'public/js/scripts-admin.js')

.copy([
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map',
    './node_modules/view-design/dist/iview.js.map'
], 'public/js')

// .copy([
//     './node_modules/view-design/dist/styles/fonts'
// ], 'public/fonts/vendor/view-design/dist/styles')

// .copy([
//     './node_modules/@fortawesome/fontawesome-free/webfonts',
// ], 'public/webfonts');

    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);
