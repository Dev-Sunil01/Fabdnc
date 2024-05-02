<template>
  <section class="team__area-7">
    <h2 class="team__title-7 title-anim">{{ title }}</h2>
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="sec-text pb-100 text-anim">
            <p>
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row team-margin-bottom">
        <div class="col-xxl-12">
          <div class="team__items-7" ref="container">
            <a href="team-details.html" v-for="item in images" :key="item" @mousemove="handleMouseMove">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">01</p>

                  <h3 class="tm-name">{{ item.name }}</h3>
                </div>
                <h4 class="tm-role">{{ item.designation }}</h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div :style="{ 'background-image': 'url(' + item.team_profile + ')' }"
                  class="team__hover-7  bg-center team-hover-bgimg image"></div>
              </div>
            </a>


            <!-- <a href="team-details.html" @mousemove="handleMouseMove">
          <div class="team__item-7 fade_bottom_3">
            <div class="team__name-wrap-7">
              <p class="tm-serial">02</p>

              <h3 class="tm-name">Pradeep Koundal</h3>
            </div>
            <h4 class="tm-role">Head, <br> Digital Marketing</h4>
            <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="team__hover-7 team-hover-bgimg2 image"></div>
          </div>
        </a>


        <a href="team-details.html" @mousemove="handleMouseMove">
          <div class="team__item-7 fade_bottom_3">
            <div class="team__name-wrap-7">
              <p class="tm-serial">03</p>

              <h3 class="tm-name">Riya Sharma</h3>
            </div>
            <h4 class="tm-role">Human <br> Resource </h4>
            <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="team__hover-7 team-hover-bgimg3 image"></div>
          </div>
        </a>

        <a href="team-details.html" @mousemove="handleMouseMove">
          <div class="team__item-7 fade_bottom_3">
            <div class="team__name-wrap-7">
              <p class="tm-serial">04</p>
              <h3 class="tm-name">Lakhvir Singh</h3>
            </div>
            <h4 class="tm-role">Head, <br> Web Application</h4>
            <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="team__hover-7 team-hover-bgimg4 image"></div>
          </div>
        </a>

        <a href="team-details.html" @mousemove="handleMouseMove">
          <div class="team__item-7 fade_bottom_3">
            <div class="team__name-wrap-7">
              <p class="tm-serial">05</p>
              <h3 class="tm-name">Vivek Kumar</h3>
            </div>
            <h4 class="tm-role"> UI/UX <br> Designer </h4>
            <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="team__hover-7 team-hover-bgimg5 image"></div>
          </div>
        </a>

        <a href="team-details.html" @mousemove="handleMouseMove">
          <div class="team__item-7 fade_bottom_3">
            <div class="team__name-wrap-7">
              <p class="tm-serial">06</p>
              <h3 class="tm-name">Ritika Goyal</h3>
            </div>
            <h4 class="tm-role"> Web Application</h4>
            <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="team__hover-7 team-hover-bgimg6 image"></div>
          </div>
        </a>
        <a href="team-details.html" @mousemove="handleMouseMove">
          <div class="team__item-7 fade_bottom_3">
            <div class="team__name-wrap-7">
              <p class="tm-serial">07</p>
              <h3 class="tm-name">Gautam Sharma</h3>
            </div>
            <h4 class="tm-role"> Full Stack <br> Developer </h4>
            <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="team__hover-7 team-hover-bgimg7 image"></div>
          </div>
        </a> -->


            <div class="team7__img-wrap">
              <div class="team7__img"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import Preloader from '../../components/Pre-loader.vue'
// import TeamSlider from './TeamComponents/teamSlide.vue'
import axios from 'axios';
import MainLayout from '~/layout/MainLayout.vue';


export default {

  data() {
    return {
      apiData: null,
      images: null
    }
  },

  components: {
    Preloader,
    // TeamSlider,
    MainLayout
  },
  mounted() {
    this.container = this.$refs.container;

    const apiUrl = 'https://fabdnc.com/laravel/api/team';
    axios.get(apiUrl)
      .then((response) => {
        this.apiData = response.data;
        this.title = response.data[0].team_title;
        this.description = response.data[0].team_description;
        this.images = response.data[0].images_section;



      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  },

  methods: {

    handleMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const center = viewportWidth / 1;
      const centerHeight = viewportHeight / 1;
      const deltaX = x > center ? 15 : -15;
      const deltaY = y > centerHeight ? 15 : -15;

      // Apply transition to each image
      this.$nextTick(() => {
        const imageList = this.$el.querySelectorAll('.image'); // Adjust this selector based on your HTML structure
        imageList.forEach((image) => {
          image.style.transition = 'transform 0.5s ease';
          image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
      });
    },

    handleMouseMove(event) {
      // Get the target element (team item)
      const teamItem = event.currentTarget;

      // Get the bounding rect of the team item
      const contentBox = teamItem.getBoundingClientRect();

      // Calculate the mouse position relative to the team item
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;

      // Apply transform style to the hover element within the team item
      teamItem.querySelector('.team__hover-7').style.transform = `translate(${dx}px, ${dy}px)`;
    }
  }

}
</script>

<style>
.bg-center {
  background-position: center;
}

/* .team-hover-bgimg1 {
  background-image: url(../../assets/images/sunilsir.JPG);
  z-index: 9999;
}

.team-hover-bgimg2 {
  background-image: url(../../assets/images/pradeepsir.jpg);
  background-position: center;
}

.team-hover-bgimg3 {
  background-image: url(../../assets/images/Riya-mam.jpg);
}

.team-hover-bgimg4 {
  background-image: url(../../assets/images/office-work.jpg);
}

.team-hover-bgimg5 {
  background-image: url(../../assets/images/vivek-new.JPEG);
}

.team-hover-bgimg6 {
  background-image: url(../../assets/images/ritika.jpg);
}

.team-hover-bgimg7 {
  background-image: url(../../assets/images/gautam-1.jpg);
  background-position: center;
} */


.team-margin-bottom {
  margin-bottom: 100px;
}
</style>