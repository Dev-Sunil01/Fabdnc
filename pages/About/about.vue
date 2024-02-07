<template>
    <MainLayout>
        <div id="smooth-wrapper" v-if="!isLoading">
            <div id="smooth-content">
                <main class="dark">
                    <!-- Story area start -->
                    <section class="story__area">
                        <div class="container g-0 line pt-140">
                            <span class="line-3"></span>
                            <div class="sec-title-wrapper">
                                <div class="from-text">from <span>1990</span></div>

                                <div class="row">
                                    <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                        <h2 class="sec-sub-title title-anim">ABOUT US</h2>
                                        <h3 class="sec-title title-anim">We Are Increasing Business Success With Technology
                                        </h3>
                                    </div>
                                    <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                        <div class="story__text">
                                            <p>Over two years working in IT services developing software applications and
                                                marketing for
                                                clients
                                                all over the world.
                                            </p>
                                            <p>We denounce with righteous indignation and dislike men who are so beguiled
                                                and
                                                demoralized by
                                                the
                                                charms of pleasure of the moment, so blinded by desire, that they cannot
                                                foresee
                                                the pain
                                                and
                                                trouble that are bound to ensue; and equal blame belongs to those who fail
                                                in
                                                their duty
                                                through
                                                weakness of will, which is the same as saying.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                    <div class="story__img-wrapper">
                                        <img src="../../../assets/imgs/about/leader.jpg" alt="Story Thumbnail" class="w-100">
                                    </div>
                                </div>
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                    <div class="story__img-wrapper img-anim">
                                        <img src="../../../assets/imgs/about/about-home (1).jpg" alt="Story Thumbnail"
                                            data-speed="auto">
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                    <div class="story__img-wrapper">
                                        <img src="../../../assets/imgs/about/close-up.jpeg" alt="Story Thumbnail">

                                        <img src="../../../assets/imgs/about/professional-broker.jpg" alt="Story Thumbnail">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Story area end -->


                    <!-- Counter area start -->

                    <!-- Counter area end -->


                    <!-- Team area start -->
                    <section class="team__area about-team-slider pt-140 pb-140">
                        <div class="sec-title-wrapper">
                            <h2 class="sec-sub-title title-anim">Process</h2>
                            <h3 class="sec-title title-anim">Our Working Process</h3>
                        </div>

                        <swiper :modules="modules" :slides-per-view="4" :space-between="50" :navigation="false"
                            :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">

                            <swiper-slide>
                                <div class="swiper-slide team__slide">
                                    <a href="team-details.html">
                                        <img src="../../../assets/imgs/about/process1.png" alt="Team Member">
                                        <div class="team__info">
                                            <h4 class="team__member-name"> Analyze Project</h4>
                                            <h5 class="team__member-role">First and foremost, we assess your project, its
                                                current
                                                stage,competitors,and future goals</h5>
                                        </div>
                                    </a>
                                </div>
                            </swiper-slide>

                            <Swiper-slide>
                                <div class="swiper-slide team__slide">
                                    <a href="team-details.html">
                                        <img src="../../../assets/imgs/about/process3.png" alt="Team Member">
                                        <div class="team__info">
                                            <h4 class="team__member-name"> Start Execution</h4>
                                            <h5 class="team__member-role"> Afterwards, we start implementing the ideas or
                                                plans
                                                created to
                                                optimize your business.</h5>
                                        </div>
                                    </a>
                                </div>
                            </Swiper-slide>

                            <Swiper-slide>
                                <div class="swiper-slide team__slide">
                                    <a href="team-details.html">
                                        <img src="../../../assets/imgs/about/process4.png" alt="Team Member">
                                        <div class="team__info">
                                            <h4 class="team__member-name"> Deliver</h4>
                                            <h5 class="team__member-role"> We cover every possible aspect of business
                                                solution
                                                to reach our
                                                target.</h5>
                                        </div>
                                    </a>
                                </div>

                            </Swiper-slide>

                            <swiper-slide>
                                <div class="swiper-slide team__slide">
                                    <a href="team-details.html">
                                        <img src="../../../assets/imgs/about/process1.png" alt="Team Member">
                                        <div class="team__info">
                                            <h4 class="team__member-name"> Analyze Project</h4>
                                            <h5 class="team__member-role">First and foremost, we assess your project, its
                                                current
                                                stage,competitors,and future goals</h5>
                                        </div>
                                    </a>
                                </div>
                            </swiper-slide>

                            <Swiper-slide>
                                <div class="swiper-slide team__slide">
                                    <a href="team-details.html">
                                        <img src="../../../assets/imgs/about/process3.png" alt="Team Member">
                                        <div class="team__info">
                                            <h4 class="team__member-name"> Start Execution</h4>
                                            <h5 class="team__member-role"> Afterwards, we start implementing the ideas or
                                                plans
                                                created to
                                                optimize your business.</h5>
                                        </div>
                                    </a>
                                </div>
                            </Swiper-slide>

                            <Swiper-slide>
                                <div class="swiper-slide team__slide">
                                    <a href="team-details.html">
                                        <img src="../../../assets/imgs/about/process4.png" alt="Team Member">
                                        <div class="team__info">
                                            <h4 class="team__member-name"> Deliver</h4>
                                            <h5 class="team__member-role"> We cover every possible aspect of business
                                                solution
                                                to reach our
                                                target.</h5>
                                        </div>
                                    </a>
                                </div>

                            </Swiper-slide>



                        </swiper>



                    </section>
                    <!-- Team area end -->



                    <!-- Brand area start -->

                    <!-- Brand area end -->


                    <!-- Testimonial area start -->

                    <!-- Testimonial area end -->


                    <!-- CTA area start -->

                    <!-- CTA area end -->


                </main>
            </div>
        </div>
    </MainLayout>
</template>

<script>

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MainLayout from '~/layout/MainLayout.vue';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    components: {
        Swiper,
        SwiperSlide,
        MainLayout
    },
    setup() {
        // const swiperSlide = useSwiperSlide();
        // const onSwiper = (swiper) => {
        //     swiper.value = swiper;
        // };

        // const onSlideChange = () => {
        //     console.log('slide change');
        // };
        return {
            // onSwiper,
            // onSlideChange,
            // swiperSlide,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>

<style scoped>.swiper-slide:nth-child(even) {
    padding-top: 100px !important;
}</style>