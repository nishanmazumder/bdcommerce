<template>
    <div>
        <!-- quick view start -->
        <div class="product-details quick-view modal animated zoomInUp" id="quick-view">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="d-table">
                            <div class="d-tablecell">
                                <div class="modal-dialog">
                                    <div class="main-view modal-content">
                                        <div class="modal-footer" data-dismiss="modal">
                                            <span>x</span>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-5 col-md-4">
                                                <div class="quick-image">
                                                    <div class="single-quick-image text-center">
                                                        <div class="list-img">
                                                            <div class="product-img tab-content">
                                                                <div class="simpleLens-container tab-pane fade in"
                                                                    id="sin-1">
                                                                    <div class="pro-type">
                                                                        <span>new</span>
                                                                    </div>
                                                                    <a class="simpleLens-image"
                                                                        data-lens-image="img/products/z1.jpg"
                                                                        href="#"><img src="img/products/z1.jpg" alt=""
                                                                            class="simpleLens-big-image"></a>
                                                                </div>
                                                                <div class="simpleLens-container tab-pane active fade in"
                                                                    id="sin-2">
                                                                    <div class="pro-type sell">
                                                                        <span>sell</span>
                                                                    </div>
                                                                    <a class="simpleLens-image"
                                                                        data-lens-image="img/products/z2.jpg"
                                                                        href="#"><img src="img/products/z2.jpg" alt=""
                                                                            class="simpleLens-big-image"></a>
                                                                </div>
                                                                <div class="simpleLens-container tab-pane fade in"
                                                                    id="sin-3">
                                                                    <div class="pro-type">
                                                                        <span>-15%</span>
                                                                    </div>
                                                                    <a class="simpleLens-image"
                                                                        data-lens-image="img/products/z3.jpg"
                                                                        href="#"><img src="img/products/z3.jpg" alt=""
                                                                            class="simpleLens-big-image"></a>
                                                                </div>
                                                                <div class="simpleLens-container tab-pane fade in"
                                                                    id="sin-4">
                                                                    <div class="pro-type">
                                                                        <span>new</span>
                                                                    </div>
                                                                    <a class="simpleLens-image"
                                                                        data-lens-image="img/products/z4.jpg"
                                                                        href="#"><img src="img/products/z4.jpg" alt=""
                                                                            class="simpleLens-big-image"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="quick-thumb">
                                                        <ul class="product-slider">
                                                            <li><a data-toggle="tab" href="#sin-1"> <img
                                                                        src="img/products/s1.jpg" alt="quick view" />
                                                                </a></li>
                                                            <li class="active"><a data-toggle="tab" href="#sin-2"> <img
                                                                        src="img/products/s2.jpg" alt="small image" />
                                                                </a></li>
                                                            <li><a data-toggle="tab" href="#sin-3"> <img
                                                                        src="img/products/s3.jpg" alt="small image" />
                                                                </a></li>
                                                            <li><a data-toggle="tab" href="#sin-4"> <img
                                                                        src="img/products/s4.jpg" alt="small image" />
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-7 col-md-8">
                                                <div class="quick-right">
                                                    <div class="list-text">
                                                        <h3>men’s White t-shirt</h3>
                                                        <span>Summer men’s fashion</span>
                                                        <div class="ratting floatright">
                                                            <p>( 27 Rating )</p>
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star-half"></i>
                                                            <i class="mdi mdi-star-outline"></i>
                                                        </div>
                                                        <h5><del>$79.30</del> $69.30</h5>
                                                        <p>There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have be suffered alteration in
                                                            some form, by injected humour, or randomised words which
                                                            donot look even slightly believable. If you are going to use
                                                            a passage of Lorem Ipsum, you neede be sure there isn't
                                                            anything embarrassing hidden in the middle of text. Lorem
                                                            Ipsum is simply dummy text of the printing and typesetting
                                                            industry.</p>
                                                        <div class="all-choose">
                                                            <div class="s-shoose">
                                                                <h5>Color</h5>
                                                                <div class="color-select clearfix">
                                                                    <span></span>
                                                                    <span class="outline"></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div class="s-shoose">
                                                                <h5>size</h5>
                                                                <div class="size-drop">
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn">XL</button>
                                                                        <button type="button"
                                                                            class="btn dropdown-toggle"
                                                                            data-toggle="dropdown" aria-haspopup="true"
                                                                            aria-expanded="false">
                                                                            <span class=""><i
                                                                                    class="mdi mdi-chevron-down"></i></span>
                                                                        </button>
                                                                        <ul class="dropdown-menu">
                                                                            <li><a href="#">Xl</a></li>
                                                                            <li><a href="#">SL</a></li>
                                                                            <li><a href="#">S</a></li>
                                                                            <li><a href="#">L</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="s-shoose">
                                                                <h5>qty</h5>
                                                                <form action="#" method="POST">
                                                                    <div class="plus-minus">
                                                                        <a class="dec qtybutton">-</a>
                                                                        <input type="text" value="02" name="qtybutton"
                                                                            class="plus-minus-box">
                                                                        <a class="inc qtybutton">+</a>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div class="list-btn">
                                                            <a href="#">add to cart</a>
                                                            <a href="#">wishlist</a>
                                                            <a href="#">zoom</a>
                                                        </div>
                                                        <div class="share-tag clearfix">
                                                            <ul class="blog-share floatleft">
                                                                <li>
                                                                    <h5>share </h5>
                                                                </li>
                                                                <li><a href="#"><i class="mdi mdi-facebook"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="mdi mdi-twitter"></i></a></li>
                                                                <li><a href="#"><i class="mdi mdi-linkedin"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="mdi mdi-vimeo"></i></a></li>
                                                                <li><a href="#"><i class="mdi mdi-dribbble"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="mdi mdi-instagram"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- quick view end -->
        <!-- footer section start -->
        <footer>
            <!-- brand logo area start -->
            <div class="brand-logo">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="barnd-bg">
                                <a href="#"><img src="img/brand/1.png" alt="Brand Logo" /></a>
                                <a href="#"><img src="img/brand/2.png" alt="Brand Logo" /></a>
                                <a href="#"><img src="img/brand/3.png" alt="Brand Logo" /></a>
                                <a href="#"><img src="img/brand/4.png" alt="Brand Logo" /></a>
                                <a href="#"><img src="img/brand/5.png" alt="Brand Logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- brand logo section end -->
            <!-- social media section start -->
            <div class="social-media section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="social-icons">
                                <a href="#"><i class="mdi mdi-facebook"></i></a>
                                <a href="#"><i class="mdi mdi-twitter"></i></a>
                                <a href="#"><i class="mdi mdi-google-plus"></i></a>
                                <a href="#"><i class="mdi mdi-dribbble"></i></a>
                                <a href="#"><i class="mdi mdi-rss"></i></a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="newsletter">
                                <form action="mail.php" method="post">
                                    <input type="text" name="email" placeholder="Enter your email..." />
                                    <input type="submit" value="subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- social media section end -->
            <!-- footer-top area start -->
            <div class="footer-top section-padding">
                <div class="footer-dsc">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="single-text">
                                    <div class="footer-title">
                                        <h4>Contact us</h4>
                                    </div>
                                    <div class="footer-text">
                                        <ul>
                                            <li>
                                                <i class="mdi mdi-map-marker"></i>
                                                <p>Flat no 01, House no 02, Vincent,</p>
                                                <p>Dhaka-1207, Bangladesh</p>
                                            </li>
                                            <li>
                                                <i class="mdi mdi-phone"></i>
                                                <p>(+880) 19453 821758</p>
                                                <p>(+880) 19453 813758</p>
                                            </li>
                                            <li>
                                                <i class="mdi mdi-email"></i>
                                                <p>info@mydomain.com</p>
                                                <p>username@email.com</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-2 wide-mobile">
                                <div class="single-text">
                                    <div class="footer-title">
                                        <h4>my account</h4>
                                    </div>
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="login.html"><i class="mdi mdi-menu-right"></i>My Account</a>
                                            </li>
                                            <li><a href="wishlist.html"><i class="mdi mdi-menu-right"></i>My
                                                    Wishlist</a></li>
                                            <li><a href="cart.html"><i class="mdi mdi-menu-right"></i>My Cart</a></li>
                                            <li><a href="login.html"><i class="mdi mdi-menu-right"></i>Sign In</a></li>
                                            <li><a href="checkout.html"><i class="mdi mdi-menu-right"></i>Check out</a>
                                            </li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Track My Orde</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-2 wide-mobile">
                                <div class="single-text">
                                    <div class="footer-title">
                                        <h4>shipping</h4>
                                    </div>
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="contact.html"><i class="mdi mdi-menu-right"></i>New
                                                    Products</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Top Sellers</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Manufactirers</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Suppliers</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Specials</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Availability</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2 r-margin-top wide-mobile">
                                <div class="single-text">
                                    <div class="footer-title">
                                        <h4>Information</h4>
                                    </div>
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="contact.html"><i class="mdi mdi-menu-right"></i>Return
                                                    Exchange</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Fast Delivery</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Online Shopping</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Shipping Guide</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Turm Of Use</a></li>
                                            <li><a href="#"><i class="mdi mdi-menu-right"></i>Home Delivery</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 r-margin-top wide-mobile">
                                <div class="single-text">
                                    <div class="footer-title">
                                        <h4>instagram</h4>
                                    </div>
                                    <div class="clearfix instagram">
                                        <ul>
                                            <li><a href="#"><img src="img/footer/in1.png" alt="Instagram" /></a></li>
                                            <li><a href="#"><img src="img/footer/in2.png" alt="Instagram" /></a></li>
                                            <li><a href="#"><img src="img/footer/in3.png" alt="Instagram" /></a></li>
                                            <li><a href="#"><img src="img/footer/in4.png" alt="Instagram" /></a></li>
                                            <li><a href="#"><img src="img/footer/in5.png" alt="Instagram" /></a></li>
                                            <li><a href="#"><img src="img/footer/in6.png" alt="Instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer-top area end -->
            <!-- footer-bottom area start -->
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <p>&copy; Sellshop 2016. All Rights Reserved.</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 text-right">
                            <a href="#"><img src="img/footer/payment.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer-bottom area end -->
        </footer>
        <!-- footer section end -->
    </div>
</template>
