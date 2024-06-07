<!-- ScrollGallery.vue -->
<template>
    

      
            <section ref="horizGallery"  class="workflow__area-3 horiz-gallery-wrapper">
                        <div class="workflow__wrapper-3 horiz-gallery-strip">
                            <div class="choose-wrapper wf_panel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="choose-title-wrapper">
                                                <h2 class="choose-title title-anim">Working Process</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="research__area wf_panel pt-150">
                                <div class="container inner_content">
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-sub-title">Working Process</h2>
                                                <h3 class="sec-title">Our Working Process - How We Work For Our Customers
                                                </h3>
                                                <p>Attention, we take out our round glasses and our sweater with elbow
                                                    patches to go back to the
                                                    origins of the user experience: the first mention of the user and its
                                                    importance was born in the
                                                </p>
                                            </div>
                                            <ul class="research__tools">
                                                <li><a href="#">Google</a></li>
                                                <li><a href="#">pinterest</a></li>
                                                <li><a href="#">Instagram</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                                            <div class="research__list">
                                                <div class="research__item">
                                                    <div class="research__number">
                                                        <span>60%</span>
                                                    </div>
                                                    <div class="research__info">
                                                        <h4 class="research__title"> Analyze Project</h4>
                                                        <p> First and foremost, we assess your project, its current stage,
                                                            competitors, and future
                                                            goals</p>
                                                    </div>
                                                </div>

                                                <div class="research__item">
                                                    <div class="research__number">
                                                        <span>95%</span>
                                                    </div>
                                                    <div class="research__info">
                                                        <h4 class="research__title"> Find Out-of-the-Box Ideas</h4>
                                                        <p> Next, we prepare marketing solution ideas that can help you
                                                            reach your full potentials.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="research__item">
                                                    <div class="research__number">
                                                        <span>70%</span>
                                                    </div>
                                                    <div class="research__info">
                                                        <h4 class="research__title"> Start Execution</h4>
                                                        <p> Afterwards, we start implementing the ideas or plans created to
                                                            optimize your business.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="counter__area-3 wf_panel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-sub-title">Why <br>Choose Us</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div class="counter__wrapper-3">
                                                <div class="counter__item-3">
                                                    <h2 class="counter__number">25k</h2>
                                                    <p>Project <br>completed</p>
                                                </div>
                                                <div class="counter__item-3">
                                                    <h2 class="counter__number">8k</h2>
                                                    <p>Happy <br>customers</p>
                                                </div>
                                                <div class="counter__item-3">
                                                    <h2 class="counter__number">15</h2>
                                                    <p>Years <br>experiences</p>
                                                </div>
                                                <div class="counter__item-3">
                                                    <h2 class="counter__number">98</h2>
                                                    <p>Awards <br>achievement</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div class="counter__img-3">
                                                <img height="" width="" src="../assets/images/designer-team.jpg" alt="Counter Image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- CTA area start -->
                            <div class="cta__area-3 wf_panel">
                                <div class="container pt-150 pb-150">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="cta__content-3">
                                                <p class="cta__sub-title-2">Have you project in mind?</p>
                                                <h2 class="cta__title-2">Let’s make something great together!</h2>
                                                <div class="btn_wrapper">
                                                    <a href="contact.html"
                                                        class="wc-btn-black btn-hover btn-item"><span></span>Contact
                                                        <br>with
                                                        us <i class="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- CTA area end -->

                        </div>
                    </section>
       
</template>
  
<script>


import { onMounted, onUnmounted, ref } from 'vue';



export default {
    data() {
        return {
        
        };
    },
    mounted() {
        
    },
    methods: {
       
    },
};
</script>
  
<style scoped>
/* Your component-specific styles go here */
/* .row, .section, section {
    position: relative;
    overflow: hidden;
}
.section, section {
    padding: 80px 0;
    text-align:center;
}
section:nth-child(1) {
  background:blue;
  color:white;
}
section:nth-child(3) {
  background:green;
  color:white;
}
.container-fluid {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}

.horiz-gallery-strip, .horiz-gallery-wrapper {
   display: flex;
   flex-wrap: nowrap;
   will-change: transform;
  position:relative;
}

.project-wrap {
    width: 50vw;
    padding: 2rem;
    box-sizing: content-box;
}
.project-wrap img {
    width:100%;
    height:auto;
} */


</style>
  