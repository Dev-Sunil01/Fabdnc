<template>


      <div class="row">
        <div class="col-xxl-12">
          <div class="team__items-7" @mousemove="handleMouseMove">
            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">01</p>

                  <h3 class="tm-name">Sunil Kumar</h3>
                </div>
                <h4 class="tm-role">Managing <br> Director</h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/1.jpg);"></div>
              </div>
            </a>

            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">02</p>

                  <h3 class="tm-name">Pradeep Koundal</h3>
                </div>
                <h4 class="tm-role">Head,  <br> Digital Marketing</h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/2.jpg);"></div>
              </div>
            </a>

            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">03</p>
                  <h3 class="tm-name">Vivek Kumar</h3>
                </div>
                <h4 class="tm-role"> UI/UX <br> Designer </h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/3.jpg);"></div>
              </div>
            </a>
            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">04</p>
                  <h3 class="tm-name">Lakhvir Singh</h3>
                </div>
                <h4 class="tm-role">Head, <br>  Web Application</h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/4.jpg);"></div>
              </div>
            </a>
            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">07</p>
                  <h3 class="tm-name">Ritika Goyal</h3>
                </div>
                <h4 class="tm-role"> Web Application</h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/7.jpg);"></div>
              </div>
            </a>
            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">05</p>
                  <h3 class="tm-name">Gautam Sharma</h3>
                </div>
                <h4 class="tm-role"> Full Stack <br> Developer </h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/5.jpg);"></div>
              </div>
            </a>
            <a href="team-details.html">
              <div class="team__item-7 fade_bottom_3">
                <div class="team__name-wrap-7">
                  <p class="tm-serial">06</p>
                  <h3 class="tm-name">Sukhvir Singh</h3>
                </div>
                <h4 class="tm-role">UI Developer </h4>
                <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="team__hover-7" style="background-image: url(../assets/imgs/team/6.jpg);"></div>
              </div>
            </a>
           
            <div class="team7__img-wrap">
              <div class="team7__img"></div>
            </div>
          </div>
        </div>
      </div>

</template>

<script>

import Preloader from '../../components/Pre-loader.vue'
// import TeamSlider from './TeamComponents/teamSlide.vue'
import MainLayout from '~/layout/MainLayout.vue';


export default {

  components: {
    Preloader,
    // TeamSlider,
    MainLayout
  },

  methods: {         
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

<style></style>