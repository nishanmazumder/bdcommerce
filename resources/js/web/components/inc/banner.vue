<template>
    <!-- slider-section-start -->
    <!-- <div class="main-slider-one slider-area">
        <div id="wrapper">
            <div class="slider-wrapper">
                <div id="mainSlider" class="nivoSlider">
                    <img v-bind:src="'../storage/img/slider/home1/1.jpg'" alt="main slider" title="#htmlcaption" />
                    <img v-bind:src="'../storage/img/slider/home1/2.jpg'" alt="main slider" title="#htmlcaption2" />
                </div>
                <div id="htmlcaption" class="nivo-html-caption slider-caption">
                    <div class="container">
                        <div class="slider-left slider-right">
                            <div class="slide-text animated bounceInRight">
                                <h3 class="bounceInDown">new collection</h3>
                                <h1>Men’s Fashion 2016</h1>
                                <span>Starting at $65.00. Don’t miss out!</span>
                            </div>
                            <div class="one-p animated bounceInLeft">
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".</p>
                            </div>
                            <div class="animated slider-btn fadeInUpBig">
                                <a class="shop-btn" href="shop.html">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="htmlcaption2" class="nivo-html-caption slider-caption">
                    <div class="container">
                        <div class="slider-left slider-right">
                            <div class="slide-text animated bounceInRight">
                                <h3>new collection</h3>
                                <h1>Men’s Fashion 2016</h1>
                                <span>Starting at $65.00. Don’t miss out!</span>
                            </div>
                            <div class="one-p animated bounceInLeft">
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".</p>
                            </div>
                            <div class="animated slider-btn fadeInUpBig">
                                <a class="shop-btn" href="shop.html">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- slider section end -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img v-bind:src="'../storage/img/slider/home1/1.jpg'" alt="main slider" />
                <div class="carousel-caption">
                    Test
                </div>
            </div>
            <div class="item">
                <img v-bind:src="'../storage/img/slider/home1/2.jpg'" alt="main slider" />
                <div class="carousel-caption">
                   Test2
                </div>
            </div>
            ...
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
