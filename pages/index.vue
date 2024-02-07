<template>
    <MainLayout>
        <div>
            <!-- Cursor Animation -->

            <!-- <CursorAnim/> -->
            <!-- Preloader -->


            <Preloader />

            <!-- Scroll Smoother -->
            <div class="has-smooth" id="has_smooth"></div>


            <!-- Go Top Button -->
            <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


            <!-- Header area start -->
            <!-- <Header  /> -->
            <!-- Header area end -->


            <!-- Offcanvas area start -->

            <!-- Offcanvas area end -->

            <!-- Switcher Area Start -->
            <div class="switcher__area">
                <div class="switcher__icon">
                    <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
                    <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
                </div>

                <div class="switcher__items">
                    <div class="switcher__item">
                        <div class="switch__title-wrap">
                            <h2 class="switcher__title">Cursor</h2>
                        </div>
                        <div class="switcher__btn">
                            <select name="cursor-style" id="cursor_style">
                                <option value="1">default</option>
                                <option selected value="2">animated</option>
                            </select>
                        </div>
                    </div>

                    <div class="switcher__item">
                        <div class="switch__title-wrap">
                            <h2 class="switcher__title">mode</h2>
                        </div>
                        <div class="switcher__btn mode-type wc-col-2">
                            <button class="active" data-mode="light">light</button>
                            <button data-mode="dark">dark</button>
                        </div>
                    </div>

                    <div class="switcher__item">
                        <div class="switch__title-wrap">
                            <h2 class="switcher__title">Direction</h2>
                        </div>
                        <div class="switcher__btn lang_dir wc-col-2">
                            <button class="active" data-mode="ltr">LTR</button>
                            <button data-mode="rtl">RTL</button>
                        </div>
                    </div>

                    <div class="switcher__item">
                        <div class="switch__title-wrap">
                            <h2 class="switcher__title">Language Support</h2>
                        </div>
                        <div class="switcher__btn lang_dir wc-col-2">
                            <button class="active" data-mode="ltr">LTR</button>
                            <button data-mode="rtl">RTL</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Switcher Area End -->



            <!-- Scroll Smoother -->
            <div class="has-smooth" id="has_smooth"></div>


            <!-- Go Top Button -->
            <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


            <!-- Header area start -->
            
            <!-- Header area end -->


            <!-- Offcanvas area start -->
            <div class="offcanvas__area">
                <div class="offcanvas__body">
                    <div class="offcanvas__left">
                        <div class="offcanvas__logo">
                            <a href="index.html"><img src="../assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo"></a>
                        </div>
                        <div class="offcanvas__social">
                            <h3 class="social-title">Follow Us</h3>
                            <ul>
                                <li><a href="#">Dribbble</a></li>
                                <li><a href="#">Behance</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">YouTube</a></li>
                            </ul>
                        </div>
                        <div class="offcanvas__links">
                            <ul>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">contact</a></li>
                                <li><a href="career.html">Career</a></li>
                                <li><a href="blog.html">blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="offcanvas__mid">
                        <div class="offcanvas__menu-wrapper">
                            <nav class="offcanvas__menu">
                                <ul class="menu-anim">
                                    <li><a>home</a>
                                        <ul>
                                            <li><a href="index.html">Digital Maketing</a></li>
                                            <li><a href="index-dark.html">Digital Maketing dark</a></li>
                                            <li><a href="index-2.html">Design Studio </a></li>
                                            <li><a href="index-2-dark.html">Design Studio dark</a></li>
                                            <li><a href="index-3.html">Digital Agency</a></li>
                                            <li><a href="index-3-dark.html">Digital Agency dark</a></li>
                                            <li><a href="index-7.html">creative Agency</a></li>
                                            <li><a href="index-7-dark.html">creative Agency dark</a></li>
                                            <li><a href="index-6.html">Startup Agency</a></li>
                                            <li><a href="index-6-dark.html">Startup Agency dark</a></li>
                                            <li><a href="index-8.html">modern agency</a></li>
                                            <li><a href="index-8-dark.html">modern agency dark</a></li>
                                            <li><a href="index-4.html">personal Portfolio</a></li>
                                            <li><a href="index-4-dark.html">personal Portfolio dark</a></li>
                                            <li><a href="index-5.html">portfolio showcase</a></li>
                                            <li><a href="index-5-dark.html">portfolio showcase dark</a></li>
                                            <li><a href="index-10.html">showcase carousel</a></li>
                                            <li><a href="index-10-dark.html">showcase carousel dark</a></li>
                                            <li><a href="index-12.html">Interactive link </a></li>
                                            <li><a href="index-12-dark.html">Interactive link dark</a></li>
                                            <li><a href="index-13.html">portfolio masonry</a></li>
                                            <li><a href="index-13-dark.html">portfolio masonry dark</a></li>
                                            <li><a href="index-14.html">vertical grid</a></li>
                                            <li><a href="index-14-dark.html">vertical grid dark</a></li>
                                            <li><a href="index-15.html">Interactive image slider</a></li>
                                            <li><a href="index-15-dark.html">Interactive image slider dark</a></li>
                                            <li><a href="index-16.html">showcase parallax</a></li>
                                            <li><a href="index-16-dark.html">showcase parallax dark</a></li>
                                            <li><a href="index-17.html">logo showcase</a></li>
                                            <li><a href="index-17-dark.html">logo showcase dark</a></li>
                                            <li><a href="index-9.html">showcase slider</a></li>
                                            <li><a href="index-11.html">Interactive hover showcase</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">about</a></li>
                                    <li>
                                        <a>Service</a>
                                        <ul>
                                            <li><a href="service.html">service</a></li>
                                            <li><a href="service-dark.html">service dark</a></li>
                                            <li><a href="service-2.html">service V.2</a></li>
                                            <li><a href="service-2-dark.html">service V.2 dark</a></li>
                                            <li><a href="service-3.html">service V.3</a></li>
                                            <li><a href="service-3-dark.html">service V.3 dark</a></li>
                                            <li><a href="service-4.html">service V.4</a></li>
                                            <li><a href="service-4-dark.html">service V.4 dark</a></li>
                                            <li><a href="service-5.html">service V.5</a></li>
                                            <li><a href="service-5-dark.html">service V.5 dark</a></li>
                                            <li><a href="service-6.html">service V.6</a></li>
                                            <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                            <li><a href="service-details.html">service details</a></li>
                                            <li><a href="service-details-dark.html">service details dark</a></li>
                                        </ul>
                                    </li>
                                    <li><a>pages</a>
                                        <ul>

                                            <li>
                                                <a>Service</a>
                                                <ul>
                                                    <li><a href="service.html">service</a></li>
                                                    <li><a href="service-dark.html">service dark</a></li>
                                                    <li><a href="service-2.html">service V.2</a></li>
                                                    <li><a href="service-2-dark.html">service V.2 dark</a></li>
                                                    <li><a href="service-3.html">service V.3</a></li>
                                                    <li><a href="service-3-dark.html">service V.3 dark</a></li>
                                                    <li><a href="service-4.html">service V.4</a></li>
                                                    <li><a href="service-4-dark.html">service V.4 dark</a></li>
                                                    <li><a href="service-5.html">service V.5</a></li>
                                                    <li><a href="service-5-dark.html">service V.5 dark</a></li>
                                                    <li><a href="service-6.html">service V.6</a></li>
                                                    <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                                    <li><a href="service-details.html">service details</a></li>
                                                    <li><a href="service-details-dark.html">service details dark</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>portfolio</a>
                                                <ul>
                                                    <li><a href="portfolio.html">portfolio</a></li>
                                                    <li><a href="portfolio-dark.html">portfolio dark</a></li>
                                                    <li><a href="portfolio-2.html">portfolio v.2</a></li>
                                                    <li><a href="portfolio-2-dark.html">portfolio v.2 dark</a></li>
                                                    <li><a href="portfolio-3.html">portfolio v.3</a></li>
                                                    <li><a href="portfolio-3-dark.html">portfolio v.3 dark</a></li>
                                                    <li><a href="portfolio-4.html">portfolio v.4</a></li>
                                                    <li><a href="portfolio-4-dark.html">portfolio v.4 dark</a></li>
                                                    <li><a href="portfolio-5.html">portfolio v.5</a></li>
                                                    <li><a href="portfolio-5-dark.html">portfolio v.5 dark</a></li>
                                                    <li><a href="portfolio-details.html">portfolio details</a></li>
                                                    <li><a href="portfolio-details-dark.html">portfolio details dark</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>team</a>
                                                <ul>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-dark.html">Team dark</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="team-details-dark.html">Team Details dark</a></li>
                                                    <li><a href="career.html">career</a></li>
                                                    <li><a href="career-dark.html">career dark</a></li>
                                                    <li><a href="job-details.html">job details</a></li>
                                                    <li><a href="job-details-dark.html">job details dark</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>blog</a>
                                                <ul>
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog-dark.html">blog dark</a></li>
                                                    <li><a href="blog-2.html">blog v.2</a></li>
                                                    <li><a href="blog-2-dark.html">blog v.2 dark</a></li>
                                                    <li><a href="category.html">category</a></li>
                                                    <li><a href="category-dark.html">category dark</a></li>
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                    <li><a href="blog-details-dark.html">blog details dark</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>Others</a>
                                                <ul>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="about-dark.html">about dark</a></li>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                    <li><a href="faq-dark.html">FAQs dark</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="contact-dark.html">contact dark</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                    <li><a href="404-dark.html">404 dark</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a>blog</a>
                                        <ul>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-dark.html">blog dark</a></li>
                                            <li><a href="blog-2.html">blog v.2</a></li>
                                            <li><a href="blog-2-dark.html">blog v.2 dark</a></li>
                                            <li><a href="category.html">category</a></li>
                                            <li><a href="category-dark.html">category dark</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                            <li><a href="blog-details-dark.html">blog details dark</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="offcanvas__right">
                        <div class="offcanvas__search">
                            <form action="#">
                                <input type="text" name="search" placeholder="Search keyword">
                                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div class="offcanvas__contact">
                            <h3>Get in touch</h3>
                            <ul>
                                <li><a href="tel:02094980547">+(02) - 094 980 547</a></li>
                                <li><a href="mailto:info@extradesign.com">info@extradesign.com</a></li>
                                <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                            </ul>
                        </div>
                        <img src="../assets/imgs/shape/11.png" alt="shape" class="shape-1">
                        <img src="../assets/imgs/shape/12.png" alt="shape" class="shape-2">
                    </div>
                    <div class="offcanvas__close">
                        <button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            </div>
            <!-- Offcanvas area end -->


            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>

                        <!-- Hero area start -->
                        <section class="service__hero-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="service__hero-inner-2">
                                            <div class="service__hero-left-2 hero-imageWrapper">
                                                <img src="../assets/imgs/home-7/index-hero-sub1.jpg" alt="Image" class="image-1">
                                                <img src="../assets/imgs/home-7/index-hero-sub2.jpg" alt="Image" class="image-2">
                                                <img src="../assets/imgs/home-7/index-hero-sub3.jpg" alt="Image" class="image-3">
                                                <img src="../assets/imgs/home-7/index-hero-sub4.jpg" alt="Image" class="image-4">
                                            </div>
                                            <div class="service__hero-right-2 hero7__thum-anim">
                                                <h1 class="title creative">Reward Your Innovation by <span class="solution">Professional Team</span>
                                                </h1>
                                                <p class="animate_content"> We take a similar approach to design commercial
                                                    we do impactfully
                                                    approches over the flowchart
                                                    of
                                                    user friendly wireframe.</p>
                                                <img src="../assets/imgs/home-7/scroll.png" alt="scroll Image" class="scroll">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img src="../assets/imgs/home-7/shape-6.png" alt="Shape Image" class="shape-1">
                        </section>
                        <!-- Hero area end -->


                        <div class="video__area about__img-2">
                            <img src="../assets/imgs/home-7/client-meet.jpg" class="object-cover" alt="Video Image" data-speed="0.2">
                        </div>


                        <!-- About area start -->
                        <section class="about__area-7">
                            <div class="container pt-130 pb-110">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="sec-title-wrapper">
                                            <h2 class="sec-title title-anim">We want to bring <br> business and the digital
                                                <br> world together
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div class="about__left-7">
                                            <img src="../assets/imgs/home-7/index-hero-sub2.jpg" alt="Image" data-speed="auto">
                                        </div>
                                    </div>
                                    <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                        <div class="about__mid-7 text-anim">
                                            <p>We believe that we’ve managed to achieve what we set out to do. Today, we’re
                                                proud to bring
                                                together people who share our passion for change. This is how Outcrowd
                                                began. We were just a bunch
                                                of talented Ukrainians united by a common vision: creating a synergy of
                                                business and the digital
                                                world.
                                            </p>
                                            <p>We were tired of stale design solutions. We felt strongly that design was
                                                more than pretty
                                                pictures: it was a powerful tool that could really transform business.</p>
                                            <img src="../assets/imgs/home-7/shape-5.png" alt="Shape" class="signature">
                                            <img src="../assets/imgs/home-7/index-hero-sub3.jpg" alt="Image" class="image-1">
                                        </div>
                                    </div>
                                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                        <div class="about__right-7">
                                            <img src="../assets/imgs/home-7/index-hero-sub4.jpg" alt="Image" data-speed="0.7">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img src="../assets/imgs/home-7/shape-4.png" alt="Shape" class="shape-1">
                        </section>
                        <!-- About area end -->


                        <!-- Service area start -->
                        <section class="service__area-7 pt-130">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="service__items-7 animation_service_7">
                                            <div class="service__item-7">
                                                <a href="service-details.html">
                                                    <h3 class="service__title-7">Graphic <span>Design</span> </h3>
                                                </a>
                                                <p>We help brands stand out through aweful, elegant visual design. Our
                                                    design mainly philosophy.
                                                </p>
                                                <ul>
                                                    <li>+ Logo Design</li>
                                                    <li>+ Advertisement</li>
                                                    <li>+ Promotion</li>
                                                </ul>
                                            </div>
                                            <div class="service__item-7">
                                                <a href="service-details.html">
                                                    <h3 class="service__title-7">UI/UX <span>Design</span> </h3>
                                                </a>
                                                <p>We help brands stand out through aweful, elegant visual design. Our
                                                    design mainly philosophy.
                                                </p>
                                                <ul>
                                                    <li>+ Logo Design</li>
                                                    <li>+ Advertisement</li>
                                                    <li>+ Promotion</li>
                                                </ul>
                                            </div>
                                            <div class="service__item-7">
                                                <a href="service-details.html">
                                                    <h3 class="service__title-7">Web <span> Application </span> </h3>
                                                </a>
                                                <p>We help brands stand out through aweful, elegant visual design. Our
                                                    design mainly philosophy.
                                                </p>
                                                <ul>
                                                    <li>+ Logo Design</li>
                                                    <li>+ Advertisement</li>
                                                    <li>+ Promotion</li>
                                                </ul>
                                            </div>
                                            <div class="service__item-7">
                                                <a href="service-details.html">
                                                    <h3 class="service__title-7">Web Development <span> & Design</span> </h3>
                                                </a>
                                                <p>We help brands stand out through aweful, elegant visual design. Our
                                                    design mainly philosophy.
                                                </p>
                                                <ul>
                                                    <li>+ Logo Design</li>
                                                    <li>+ Advertisement</li>
                                                    <li>+ Promotion</li>
                                                </ul>
                                            </div>
                                            <div class="service__item-7">
                                                <a href="service-details.html">
                                                    <h3 class="service__title-7">CMS </h3>
                                                </a>
                                                <p>We help brands stand out through aweful, elegant visual design. Our
                                                    design mainly philosophy.
                                                </p>
                                                <ul>
                                                    <li>+ Logo Design</li>
                                                    <li>+ Advertisement</li>
                                                    <li>+ Promotion</li>
                                                </ul>
                                            </div>
                                            <div class="service__item-7">
                                                <a href="service-details.html">
                                                    <h3 class="service__title-7">Digital <span>Marketing</span> </h3>
                                                </a>
                                                <p>We help brands stand out through aweful, elegant visual design. Our
                                                    design mainly philosophy.
                                                </p>
                                                <ul>
                                                    <li>+ Logo Design</li>
                                                    <li>+ Advertisement</li>
                                                    <li>+ Promotion</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Service area end -->


                       


                        <!-- Portfolio area start -->
                        <section class="portfolio__area-7">
                            <div class="container pt-140 pb-100">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="sec-title-wrapper text-anim">
                                            <h2 class="sec-title title-anim">work</h2>
                                            <p class="sec-text">Worked with global brands & agency at the
                                                intersection of flat design and digital
                                                technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper portfolio__slider-7">
                                <div class="swiper-wrapper">
                                    <workSliderVue/>
                                </div>
                            </div>
                        </section>
                        <!-- Portfolio area end -->


                        <!-- Team area start -->
                        <section class="team__area-7">
                            <h2 class="team__title-7 title-anim">Team</h2>
                            <div class="container">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="sec-text pb-100 text-anim">
                                            <p>We are here to help you achieve your business goals and the team create an
                                                amazing outstanding
                                                product for your business.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- team component start here  -->

                                <Team/> 

                            </div>
                        </section>
                        <!-- Team area end -->


                        <!-- Brand area start -->
                        <!-- <section class="brand__area">
                            <div class="container pt-140 pb-140">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <h2 class="brand__title-3 title-anim">We worked with global largest brands
                                        </h2>
                                        <div class="brand__list-3">
                                            <div class="brand__item-2 fade_bottom">
                                                <img src="../assets/imgs/brand/1.png" alt="Brand Logo">
                                            </div>
                                            <div class="brand__item-2 fade_bottom">
                                                <img src="../assets/imgs/brand/2.png" alt="Brand Logo">
                                            </div>
                                            <div class="brand__item-2 fade_bottom">
                                                <img src="../assets/imgs/brand/3.png" alt="Brand Logo">
                                            </div>
                                            <div class="brand__item-2 fade_bottom">
                                                <img src="../assets/imgs/brand/4.png" alt="Brand Logo">
                                            </div>
                                            <div class="brand__item-2 fade_bottom">
                                                <img src="../assets/imgs/brand/5.png" alt="Brand Logo">
                                            </div>
                                            <div class="brand__item-2 fade_bottom">
                                                <img src="../assets/imgs/brand/6.png" alt="Brand Logo">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> -->
                        <!-- Brand area end -->




                        <!-- CTA area start -->
                        <section class="cta__area cta__area-7 pt-130">
                            <div class="container pb-110">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="cta__content">
                                            <p class="cta__sub-title">Work with us</p>
                                            <h2 class="cta__title title-anim">We would love to hear more about your project
                                            </h2>
                                            <div class="btn_wrapper">
                                                <a href="contact.html"
                                                    class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us <i
                                                        class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- CTA area end -->


                    </main>



                   


                </div>
            </div>

        </div>
    </MainLayout>
</template>


<script>


// import Header from '../components/Header.vue'
import Preloader from '../components/Pre-loader.vue'
import HorizontalVue from '../components/Horizontal.vue';
// import Offcanvas from '../components/Offcanvas.vue'
import MainLayout from '~/layout/MainLayout.vue';
import workSliderVue from '~/components/work-slider.vue';
import Team from "~/pages/Team/team.vue";

export default {
    components: {
        // Header,
        Preloader,
        HorizontalVue,
        MainLayout,
        workSliderVue,
        Team
        // Offcanvas

    },





}
</script>
