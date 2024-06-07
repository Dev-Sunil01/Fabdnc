<template>
    <MainLayout>

        <!-- Hero area start -->
        <section class="hero__area-7">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="hero__title-wrap-7">
                            <h1 class="hero__title-7">Award-winning <img height="" width="" src="../assets/images/shape-1.png" alt="shape">
                                digital solution
                                agency <img height="" width="" src="../assets/images/shape-2.png" alt=""></h1>
                        </div>
                        <div class="hero__text-7">
                            <h2 class="about">service</h2>
                            <p>We question and try to see everything from every perspective. Our passion lies in making
                                everything
                                universal human values, to expand the possibility.</p>
                        </div>
                    </div>
                </div>
            </div>

            <img height="" width="" src="../assets/images/shape-3.png" alt="Shape" class="shape-1">
        </section>
        <!-- Hero area end -->


        <!-- Service area start -->
        <section class="service__area-7 pt-130">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="service__items-7 animation_service_7">
                            <div class="service__item-7" v-for="service in services"  :key="service" > 
                                <a href="service-details.html">
                                    <h3 class="service__title-7">{{ service.title }}</h3>
                                </a>
                                <p>{{ service.description }}
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


        <!-- CTA area start -->
        <section class="cta__area cta__area-7 pt-130">
            <div class="container pb-110">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="cta__content">
                            <p class="cta__sub-title">Work with us</p>
                            <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                            <div class="btn_wrapper">
                                <a href="contact.html" class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us
                                    <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA area end -->


    </MainLayout>
</template>



<script>
import MainLayout from "../layout/MainLayout.vue"

import axios from 'axios';

export default {

    components: {
        MainLayout
    },

    data() {
        return {
            services: null,
        };
    },
    methods: {

    }
    ,

    mounted() {
        const apiUrl = 'https://fabdnc.com/laravel/api/home_complete';
        axios.get(apiUrl)
            .then((response) => {
                this.services = response.data[0].services;
                console.log(this.services)
            })

            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }
};
</script>


<style scoped> 

.img {
     width: 280px;
     height: 380px;
     object-fit: cover;
     opacity: 0;
 }

 .hero__area-7 { 
    background-image: url(../assets/images/hero-bg.png);
 }

 .active {
     opacity: 1;
 }
 
 

 
 </style>
