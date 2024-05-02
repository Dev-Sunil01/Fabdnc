<template>
    <MainLayout>

      
        <!-- Preloader -->


        <Preloader />


       
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <!-- Hero area start -->


                <!-- Contact area start -->
                <section class="contact__area-6">
                    <div class="container g-0 line pt-120 pb-110">
                        
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="sec-title-wrapper">
                                    <h2 class="sec-title-2 animation__char_come">Let’s get in touch</h2>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="contact__text">
                                    <p>Great! We're excited to hear from you and let's start
                                        something special togerter. call us for any inquery.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row contact__btm">
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                <div class="contact__info">
                                    <h3 class="sub-title-anim-top animation__word_come">Don't be afraid man ! <br>say hello
                                    </h3>
                                    <ul>
                                        <li><a href="tel:+(2)578365379">+(2) 578 - 365 - 379</a></li>
                                        <li><a href="mailto:hello@example.com">sunil@fabdnc.com</a></li>
                                        <li><span>C-98(B),Ph 7, Ind.Area, Mohali </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                <div class="contact__form">
                                    <form action="assets/mail.php" method="POST">
                                        <div class="row g-3">
                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                <input type="text" name="name" placeholder="Name *">
                                            </div>
                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                <input type="email" name="email" placeholder="Email *">
                                            </div>
                                        </div>
                                        <div class="row g-3">
                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                <input type="tel" name="phone" placeholder="Phone">
                                            </div>
                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                <input type="text" name="subject" placeholder="Subject *">
                                            </div>
                                        </div>
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <textarea name="message" placeholder="Messages *"></textarea>
                                            </div>
                                        </div>
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="btn_wrapper">
                                                    <button class="wc-btn-primary btn-hover btn-item"><span></span> Send
                                                        <br>Messages <i class="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Contact area end -->


            </div>
        </div>
    </MainLayout>
</template>
  
  
<script>

// import Header from '../components/Header.vue'
import Preloader from '../components/Pre-loader.vue'
import HorizontalVue from '../components/Horizontal.vue';
// import Offcanvas from '../components/Offcanvas.vue'
import MainLayout from '~/layout/MainLayout.vue';


export default {
    components: {
        // Header,
        Preloader,
        HorizontalVue,
        MainLayout,
        

        // Offcanvas

    },





}
</script>

