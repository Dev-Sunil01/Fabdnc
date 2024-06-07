<template>
    <div>



        <section class="portfolio__area-7">
            <div class="container pt-140 ">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="sec-title-wrapper text-anim">

                            <h2 class="sec-title title-anim">Featured  <span class="color-primary">Projects</span></h2>
                            <p class="sec-text">{{ mainDescription }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper portfolio__slider-7">
                <div class="swiper-wrapper">
                    <swiper :slidesPerView="1" :navigation="true"  :modules="modules" @swiper="onSwiper"
                        @slideChange="onSlideChange" :pagination="{ clickable: true }" :breakpoints="{
                                '640': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '768': {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                '1024': {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }">
                        <swiper-slide v-for="image in images" :key="image">
                            <div class="portfolio__slide-7">
                                <div class="slide-img">
                                    <a href="portfolio-details.html"><img height="" width="" :src="image.image"
                                            alt="Portfolio Image"></a>        
                                </div>
                                <div class="slide-content">
                                        <a href="portfolio-details.html">
                                            <h2 class="title"> {{ image.image_title }} </h2>
                                        </a>
                                        <h4 class="date">{{ image.image_description }}</h4>
                                </div>
                                
                            </div>


                        </swiper-slide>

                    </swiper>
                </div>
            </div>
        </section>



    </div>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

export default {

    data() {
        return {
            services: null,
            mainTitle: null,
            mainDescription: null,
            images: null
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        replaceWithBr() {
            return this.haiku.replace(/\n/g, "<br />")
        }
    },

    mounted() {

        // this.fetchData()

        const apiUrl = 'https://fabdnc.com/laravel/api/homepage/case_study';
        axios.get(apiUrl)
            .then((response) => {
                this.apiData = response.data;
                this.mainTitle = response.data[0].main_title;
                this.mainDescription = response.data[0].main_description;
                this.images = response.data[0].images_section
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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
            modules: [Navigation, Pagination, A11y, Autoplay],
        };
    },
};
</script>

<style>
.slide-img img {
    max-width: 600px;
    width: 100%;
    
    object-fit: contain;
}

.slide-img {
    position: relative;
    border-radius: 10px;
    height: 347px;
}

.slide-img:hover:before {
    height: 250%;
    -webkit-transition: all 900ms linear;
    transition: all 900ms linear;
    background-color: transparent;
}

.swiper-wrapper { 
    padding-top: 100px;
}


.swiper-button-next, 
.swiper-button-prev { 
    top: 45px !important;
}

.swiper-button-prev { 
    right: 76px !important;
    left: auto !important;
}

.slide-img:before {
 
    position: absolute;
    width: 200%;
    height: 0%;
    left: 50%;
    top: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
    content: "";
    z-index: 1;

}


.card-hover-effect {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    
}

.slide-img:hover .card-hover-effect {
  opacity: 1;
  visibility: visible;
}


/* .portfolio__slide-7 { 
    widows: 60%;
    height: 500px;
}



.slide-img {
    width: 100%;
    height: 100%;
}

.slide-img a {
    width: 100%;
    height: 100%;
    display: inline-block;
}

.slide-img img { 
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.slide-content h2,
.slide-content h4 { 
   color: var(--black-2) !important;
} */
</style>