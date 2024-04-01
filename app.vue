<!-- <template>
    <div>
     
        <NuxtPage/>
      
    </div>
  </template>
  
-->



<script>
import { onMounted, onUnmounted, ref } from 'vue';

useHead({
  title: 'dev fabdnc',
  meta: [
    { name: 'fabdnc', content: 'fabdnc services' }
  ],
  bodyAttrs: {
    class: 'devfab'
  },
  script: [ { innerHTML: 'console.log(\'i am spiderman\')' } ]
})


useSeoMeta({
  title: 'dev fabdnc',
  ogTitle: 'fabdnc services ',
  description: 'this is our web services website and we provides web services',
  ogDescription: 'we provides top services in mohali, punjab',
  ogImage: 'https://www.freepik.com/free-vector/illustration-web-design_2807782.htm#fromView=search&page=1&position=0&uuid=50e30803-cd71-4b18-9973-a9f6a0719269',
  twitterCard: 'summary_large_image',
})



export default {

  
  

  mounted() {
    // add the event listener
    document.addEventListener('mousemove', this.mousemoveHandler)
  },
  beforeDestroy() {
    // remove the event listener
    document.removeEventListener('mousemove', this.mousemoveHandler)
  },
  methods: {
    mousemoveHandler(e) {
      try {
        const target = e.target

        let tl = this.$gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY
          }
        })
        let t2 = this.$gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY
          }
        })

        // Home Page Client Cursor
        if (target.closest('.testimonial__img')) {
          tl.to(this.$refs.client_cursor, {
            opacity: 1,
            ease: 'power4.out'
          }, '-=0.3')
        } else {
          t2.to(this.$refs.client_cursor, {
            opacity: 0,
            ease: 'power4.out'
          }, '-=0.3')
        }

        // Team Page Team Cursor
        if (target.closest('.team__slider')) {
          tl.to(this.$refs.team_cursor, {
            opacity: 1,
            ease: 'power4.out'
          }, '-=0.3')
        } else {
          t2.to(this.$refs.team_cursor, {
            opacity: 0,
            ease: 'power4.out'
          }, '-=0.3')
        }

        // Portfolio Cursor
        if (target.closest('.portfolio__item-6')) {
          tl.to(this.$refs.portf_cursor_6, {
            opacity: 1,
            ease: 'power4.out'
          }, '-=0.3')
        } else {
          t2.to(this.$refs.portf_cursor_6, {
            opacity: 0,
            ease: 'power4.out'
          }, '-=0.3')
        }

        // Featured Cursor
        if (target.closest('.portfolio__slider-3')) {
          tl.to(this.$refs.featured_cursor, {
            opacity: 1,
            ease: 'power4.out'
          }, '-=0.3')
        } else {
          t2.to(this.$refs.featured_cursor, {
            opacity: 0,
            ease: 'power4.out'
          }, '-=0.3')
        }

        // Portfolio Cursor
        if (target.closest('.portfolio__area-5')) {
          tl.to(this.$refs.portfolio4_cursor, {
            opacity: 1,
            ease: 'power4.out'
          }, '-=0.3')
        } else {
          t2.to(this.$refs.portfolio4_cursor, {
            opacity: 0,
            ease: 'power4.out'
          }, '-=0.3')
        }

        // Main Cursor Moving
        tl.to('.cursor1', {
          ease: 'power2.out'
        }).to(
          '.cursor2',
          {
            ease: 'power2.out'
          },
          '-=0.4'
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  

};
</script>

<template>
  <div >
    <div class="cursor1">
    <!-- some content -->
  </div>
  <div class="cursor2">
    <!-- some content -->
  </div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <!-- <header class="header">
        <h1 class="title">GreenSock ScrollSmoother on a Nuxt3 App</h1>
        <button class="button" @click="scrollTo">Jump to C</button>
      </header>
      <div class="box box-a" data-speed="0.5">a</div>
      <div class="box box-b" data-speed="0.8">b</div>
      <div class="box box-c" data-speed="1.5">c</div>
    
      <div class="line"></div> -->
   
      <NuxtPage ref="{main}" />
     
    </div>
    </div>

    

  </div>
  <!-- <footer>
    <a href="https://greensock.com/scrollsmoother">
      <img
        alt="ScrollSmoother"
        class="greensock-icon"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-smoother-logo-light.svg"
        width="220"
        height="70"
      />
    </a>
  </footer> -->
</template>
