<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Styles -->


            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>{{ config('app.name', 'Laravel') }}</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <!-- favicon -->
            <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">

            <link rel="apple-touch-icon" href="apple-touch-icon.png">
            <!-- Place favicon.ico in the root directory -->
            <!-- google fonts -->
            <link href='https://fonts.googleapis.com/css?family=Lato:400,900,700,300' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Bree+Serif' rel='stylesheet' type='text/css'>
            <!-- all css here -->

            <link rel="stylesheet" href="{{ mix('css/web.css') }}">
            <!-- modernizr js -->
            <script src="{{ mix('js/modernizr.js') }}"></script>
        </head>
        <body>

        <div id="web"></div>

        <script src="{{ mix('js/web.js') }}"></script>
        <script src="{{ mix('js/scripts-web.js') }}"></script>
    </body>
</html>
