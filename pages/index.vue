
<template>
    <MainLayout>

        <div>

            <!-- Preloader -->


            <Preloader v-if="isLoading" />
            <!-- <div v-if="isAppLoading" class="loader">Loading...</div> -->





            <div v-else id="scroll-container" ref="scrollContainer">
                <div id="smooth-content">



                    <!-- Hero area start -->
                    <!-- hero -->
                    <section class="hero__area-4 sp-x">
                        <div class="d-flex align-items-center w-100 h-100">
                            <div class="row w-100">
                                <div class="col-md-7" data-aos="zoom-in">
                                    <div   class="hero__content-8 position-relative">
                                        <h2 id="TitleHome"  class="sec-title-4 sec-title-5 animation__char_come">
                                            <!-- <img height="" width="" src="../assets/images/23.png" alt="shape" /> -->
                                            {{ titleValue }}
                                        </h2>
                                    
                                        

                                        <div class="scroll-wrapper">
                                            <div class="scroll-down">
                                                <span>scroll</span>
                                                <img height="" width="" src="../assets/images/arrow-down.svg" alt="Scroll Down">
                                            </div>
                                            <!-- <p class="discription hero__text-animation">{{ bannerDescription }}</p> -->
                                            <p class="discription hero__text-animation">Static and dynamic secure code review
                                                can prevent a 0day
                                                before your product is
                                                even
                                                released. We can integrate with your dev environment
                                            </p>
                                        </div>
                                        <!-- <div class="home-vector">
                                    <img height="" width="" src="../assets/images/home-vector.png" />
                                </div> -->
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div
                                        class="homeBanner-anime-wrap w-100 d-flex align-items-center justify-content-center h-100">

                                        <HomeBanner />


                                    </div>
                                </div>
                                <!-- <div class="home-vector">
                                    <img height="" width="" src="../assets/images/home-vector.png" alt="home-vector"/>
                                </div> -->
                            </div>
                        </div>
                    </section>

                    <!-- Hero area end -->


                    


                    <!-- About area start -->
                    <section class="about__area-7">
                        <div class="container pt-130 pb-110">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <div class="sec-title-wrapper">

                                        <h2 class="sec-title title-anim"  data-aos="zoom-in" :v-html="fetchedText">
                                            <!-- {{ businessTitle }} -->
                                            We want to bring<br>business and the digital <br>world <Span
                                                class="color-primary">together</Span>.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                    <div class="about__left-7 digi-image-anime digi-image-anime1">
                                        <img height="" width="" :src="bdImage1" alt="Image" data-speed="auto">
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4" >
                                    <div class="about__mid-7 text-anim" >
                                        <p data-aos="zoom-in">
                                            {{ businessDescription }}
                                        </p>
                                        <p data-aos="zoom-in">We were tired of stale design solutions. We felt strongly that design was
                                            more than pretty
                                            pictures: it was a powerful tool that could really transform business.</p>
                                        <img height="" width="" src="../assets/images/shape-5.png" alt="Shape"
                                            class="signature">
                                        <img height="" width="" :src="bdImage2" alt="Image"
                                            class="image-1 digi-image-anime digi-image-anime2">
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4  col-lg-3 col-md-3">
                                    <div class="about__right-7 digi-image-anime digi-image-anime3">
                                        <img height="" width="" :src="bdImage3" alt="Image" data-speed="0.7">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <img height="" width="" src="../assets/images/shape-4.png" alt="Shape" class="shape-1"> -->
                    </section>
                    <!-- About area end -->


                    <!-- Service area start -->
                    <section class="service__area-7 pt-130">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <div class="service__items-7 animation_service_7">
                                        <div class="service__item-7" v-for=" service in services " :key="service">
                                            <a href="service-details.html">
                                                <h3 class="service__title-7"> {{ service.title }} </h3>
                                            </a>
                                            <p>{{ service.description }}
                                            </p>
                                            <ul>
                                                <li><span class="color-primary"> + </span> Logo Design</li>
                                                <li> <span class="color-primary"> + </span> Advertisement</li>
                                                <li> <span class="color-primary"> + </span> Promotion</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Service area end -->



                    <!-- case study section start here  -->

                    <caseStudy />

                    <!-- case study section end here  -->



                    <!-- Team area start -->


                    <Team />


                    <!-- Team area end -->





                    <!-- CTA area start -->
                    <section class="cta__area cta__area-7 pt-130">
                        <div class="container pb-110">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <div class="cta__content" v-for="talkus in talkUs" :key="talkus">
                                        <p class="cta__sub-title">{{ talkus.talk_title }}</p>
                                        <h2 class="cta__title title-anim"> {{ talkus.talk_description }} </h2>
                                        <div class="btn_wrapper">
                                            <a href="contact.html" class="wc-btn-primary btn-hover btn-item"><span></span>{{
                                                talkus.button_text }} <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- CTA area end -->









                </div>
            </div>

        </div>
    </MainLayout>
</template>


<script defer setup>


// const { data: posts } = await useFetch('https://fabdnc.com/laravel/api/home_complete')

// const bannerDescription = posts._value[0].description
// const businessTitle = posts._value[0].bd_title
// const businessDescription = posts._value[0].bd_description


// const { data: services } = await useFetch('https://fabdnc.com/laravel/api/services')


</script>

<script>

import axios from 'axios';
import HomeBanner from '../components/homeBanner.vue'
import Preloader from '../components/Pre-loader.vue'
import HorizontalVue from '../components/Horizontal.vue';
import MainLayout from '~/layout/MainLayout.vue';
import caseStudy from '../components/case-study.vue';
import Team from "~/pages/Team/team.vue";

export default {

    data() {
        return {
            isLoading: false,
            apiData: null,
            titleValue: null,
            data: null,
            bdImage1: null,
            bdImage2: null,
            bdImage3: null,
            services: null,
            talkUs: null
        };
    },
    components: {

        Preloader,
        HorizontalVue,
        MainLayout,
        caseStudy,
        Team,
        HomeBanner


    },

    // beforeCreate(){
    //     isLoading: false,
    // },


    mounted() {




        const apiUrl = 'https://fabdnc.com/laravel/api/home_complete';
        axios.get(apiUrl)
            .then((response) => {
                this.apiData = response.data;
                this.titleValue = response.data[0].title;
                // const apiText = "hello i am <br/> Spiderman "
                const textHtml = document.getElementById('TitleHome');
                textHtml.innerHTML = this.titleValue;                
                this.bdImage1 = response.data[0].bd_image_one;
                this.bdImage2 = response.data[0].bd_image_two;
                this.bdImage3 = response.data[0].bd_image_three;
                this.services = response.data[0].services;
                this.talkUs = response.data[0].talk_us;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        this.isLoading = false;


    },


    methods: {








    }


}
</script>

<style scoped>
.sec-title-4 {
    position: relative;
    z-index: 999;
}</style>


