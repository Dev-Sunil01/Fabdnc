<template>
  <MainLayout>

  
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <!-- Hero area start -->

       
        <section class="hero__about">
          <div class="container g-0 line">
            <span class="line-3"></span>
            <div class="row">
              <div class="col-xxl-12">
                <div class="hero__about-content">
                  <h1 class="hero-title animation__word_come">
                    {{ aboutTitle }}
                  </h1>
                  <div class="hero__about-info">
                    <div class="hero__about-btn">
                      <div class="btn_wrapper">
                        <a href="service.html" class="wc-btn-primary btn-hover btn-item"><span></span> 
                          {{ aboutButton }}
                          <i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                    <div class="hero__about-text title-anim">
                      <p>
                        {{ aboutDescription }}
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="row hero__about-row">
              <div class="col-xxl-12">
                <div class="hero__about-video">
                  <video loop muted autoplay playsinline>
                    <source src="../assets/video/business-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Hero area end -->
        

        <!-- Story area start -->
        <section class="story__area">
          <div class="container g-0 line pt-140">
            <span class="line-3"></span>
            <div class="sec-title-wrapper">
              <div class="from-text">from <span>1990</span></div>

              <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <!-- <h2 class="sec-sub-title title-anim">Digital Studio</h2> -->
                  <h3 class="sec-title title-anim">{{ whoWe }}</h3>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div class="story__text">
                    <p>

                      Fab D&C works with companies in varied domains & industry verticals. Having expertise service in
                      graphic design, Internet marketing, mobile application, development & e-commerce market place Fab
                      D&C is a full fledged IT solution provider. Having around 10 years of industry experience, the
                      founder strives to meetup to each & every client expectations by providing spectacular web and
                      mobile solution. 
                    </p>
                    <p>
                      Why look further for web design, development, marketing, mobile app creation if you
                      can have it all under 1 roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div class="story__img-wrapper">
                  <img src="../assets/images/cloud-solution.jpeg" alt="Story Thumbnail" class="w-100" />
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="story__img-wrapper img-anim">
                  <img src="../assets/images/designer-graphic.jpg" alt="Story Thumbnail" data-speed="auto" />
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="story__img-wrapper">
                  <img src="../assets/images/designer-graphic.jpg" class="story-img-short" alt="Story Thumbnail" />
                  <img src="../assets/images/cloud-solution.jpeg" alt="Story Thumbnail" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Story area end -->

        <!-- Counter area start -->
        <section class="counter__area">
          <div class="container g-0 line pb-140 pt-140">
            <span class="line-3"></span>

            <div class="row">
              <div class="col-xxl-12">
                <div class="counter__wrapper-2 counter_animation">
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">25k</h2>
                    <p>Project <br />completed</p>
                    <span class="counter__border"></span>
                  </div>
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">8k</h2>
                    <p>Happy <br />customers</p>
                    <span class="counter__border"></span>
                  </div>
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">15</h2>
                    <p>Years <br />experiences</p>
                    <span class="counter__border"></span>
                  </div>
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">98</h2>
                    <p>Awards <br />achievement</p>
                    <span class="counter__border"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Counter area end -->

        

        <!-- CTA area start -->
        <section class="cta__area">
          <div class="container line pb-110 dark-p">
            <div class="line-3"></div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="cta__content">
                  <p class="cta__sub-title">Work with us</p>
                  <h2 class="cta__title title-anim">
                    We would love to hear more about your project
                  </h2>
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


      </div>
    </div>
  </MainLayout>
</template>

<script setup >

const { data: items } = await useFetch("https://fabdnc.com/laravel/api/about_us")

const aboutTitle = items._value[0].title
const aboutDescription = items._value[0].description
const aboutButton = items._value[0].button_text
const whoWe = items._value[0].who_we_are


</script>

<script>


import HorizontalVue from '../components/Horizontal.vue';
// import Offcanvas from '../components/Offcanvas.vue'
import MainLayout from '~/layout/MainLayout.vue';

export default {
  components: {

    HorizontalVue,
    MainLayout,
    

    // Offcanvas

  },





}
</script>