<template>
    <div id="team-slide-wrapper">

        <swiper :modules="modules" :slides-per-view="4" :space-between="50" :navigation="false"
            :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>

                <div class="swiper-slide team__slide">
                    <a href="team-details.html">
                        <!-- <img height="" width="" src="../../../../assets/images/team/gautam.jpeg" alt="Team Member"> -->
                        <div class="team__info">
                            <h4 class="team__member-name-6">Gautam Sharma</h4>
                            <h5 class="team__member-role-6">Web Developer</h5>
                        </div>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide team__slide">
                    <a href="team-details.html">
                        <!-- <img height="" width="" src="../../../assets/images/team/vivek-new.JPEG" alt="Team Member"> -->
                        <div class="team__info">
                            <h4 class="team__member-name-6">Vivek Kumar</h4>
                            <h5 class="team__member-role-6">Ui/Ux Designer</h5>
                        </div>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide team__slide">
                    <a href="team-details.html">
                        <!-- <img height="" width="" src="../../../../assets/images/team/team-ledaer.jpg" alt="Team Member"> -->
                        <div class="team__info">
                            <h4 class="team__member-name-6">Harmanjit Singh</h4>
                            <h5 class="team__member-role-6">Development Head</h5>
                        </div>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide team__slide">
                    <a href="team-details.html">
                        <!-- <img height="" width="" src="../../../../assets/images/team/team-ledaer.jpg" alt="Team Member"> -->
                        <div class="team__info">
                            <h4 class="team__member-name-6">Harmanjit Singh</h4>
                            <h5 class="team__member-role-6">Development Head</h5>
                        </div>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide team__slide">
                    <a href="team-details.html">
                        <!-- <img height="" width="" src="../../../../assets/images/team/team-ledaer.jpg" alt="Team Member"> -->
                        <div class="team__info">
                            <h4 class="team__member-name-6">Harmanjit Singh</h4>
                            <h5 class="team__member-role-6">Development Head</h5>
                        </div>
                    </a>
                </div>
            </swiper-slide>
            ... 
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSwiperSlide } from 'swiper/vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
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


<style scoped>
#team-slide-wrapper { 
    padding: 0 30px;
}

.team__slide img { 
    width: 420px;
    height: 400px;
    object-fit: cover;
}

</style>