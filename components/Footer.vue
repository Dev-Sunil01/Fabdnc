<template>
  <!-- Footer area start -->
  <footer class="footer__area-2 pt-130">
    <div class="container">
      <div class="footer__top-2 text-anim">
        <div class="row">
          <div class="col-xxl-12">
            <h2 class="sec-title-3 title-anim">{{ footerTitle }}</h2>
            <p class="footer__sub-title"> {{ footerDescription }} </p>
          </div>
        </div>
      </div>

      <div class="footer__middle-2">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div class="footer__location-2">
              <!-- <div class="location">
                <h3>London</h3>
                <p>Baltia Squar, Mark Street, <br>
                  London</p>
              </div> -->
              <div class="location">
                <h3>Mohali, Punjab</h3>
                <p>C-98(B),Ph 7, Ind.Area, Mohali <br>
                  </p>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div class="footer__subscribe-2">
              <form action="#">
                <input type="text" name="email" placeholder="Enter your email">
                <button type="submit" class="submit"><img src="../assets/images/arrow-black.png"
                    alt="Arrow Icon"></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__btm-2">
        <div class="row">
          <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
            <div class="footer__copyright-2">
              <p>Copyright © 2024  <a href="https://www.fabdnc.com/" target="_blank">fabdnc.com</a>
              </p>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
            <div class="footer__nav">
              <ul class="footer-menu menu-anim">
                <li><a href="about.html">about us</a></li>
                <li><a href="contact.html">contact</a></li>
                <li><a href="career.html">Career</a></li>
                <li><a href="faq.html">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer area end -->
</template>

<script setup >

const { data: items } = await useFetch('https://fabdnc.com/laravel/api/footer')

const footerTitle = items._value[0].footer_title

const footerDescription = items._value[0].footer_description

const address = items._value[0].address


</script>

<style scoped>
.footer__logo-3 img {
  width: 60px !important;
  margin-bottom: 0 !important;
  margin-right: 10px;
}

.footer__logo-3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}


.footer__area-2 { 
   background-image: none;
}



</style>