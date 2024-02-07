<template>
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/psd-one.jpg"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Servicetech North  <span>America</span> </h2>
                    </a>
                    <h4 class="date">LANDING PAGE MOCKUP</h4>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/framest.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Framestr  </h2>
                    </a>
                    <h4 class="date">WORDPRESS,HTML,CSS3</h4>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/ekam-yoga.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Ekam YogaShala  </h2>
                    </a>
                    <h4 class="date">HTML,JQUERY,CSS3</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/psd-two.jpg"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Aurius  </h2>
                    </a>
                    <h4 class="date">02 May 2021</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/bjfcontracting.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> BJF Contracting </h2>
                    </a>
                    <h4 class="date">WORDPRESS,HTML,CSS3</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/psd-three.jpg"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Dental </h2>
                    </a>
                    <h4 class="date">LANDING PAGE MOCKUP</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/psd-four.jpg"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Grey Smoke <br/> Media </h2>
                    </a>
                    <h4 class="date">WORDPRESS,PHP,HTML</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/greysmokemedia.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Grey Smoke <br/> Media </h2>
                    </a>
                    <h4 class="date">WORDPRESS,PHP,HTML</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/kingscrown.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> King's Crown </h2>
                    </a>
                    <h4 class="date">SHOPIFY,SASS</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/knowpal-2.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Knowpal</h2>
                    </a>
                    <h4 class="date">MATERIALIZECSS</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/storyathome.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Story Home</h2>
                    </a>
                    <h4 class="date">PHP,WORDPRESS,HTML,CSS3</h4>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="portfolio__slide-7">
                <div class="slide-img">
                    <a href="portfolio-details.html"><img src="../assets/imgs/work/surplusnation.png"
                            alt="Portfolio Image"></a>
                </div>
                <div class="slide-content">
                    <a href="portfolio-details.html">
                        <h2 class="title"> Surplus Nation</h2>
                    </a>
                    <h4 class="date">PHP,WORDPRESS,HTML,CSS3</h4>
                </div>
            </div>
        </swiper-slide>

    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>