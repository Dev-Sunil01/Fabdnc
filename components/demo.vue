<template>
    <div class="animation__service-2">
    <div
    v-for="(item, index) in serviceItems"
    :key="index"
    class="service__item-2"
    v-bind:class="{ 'is-visible': item.isVisible }"
    @scroll="handleScroll"
    >
    <!-- content -->
    </div>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    serviceItems: [],
    deviceWidth: window.innerWidth,
    };
    },
    created() {
    // Initialize serviceItems with visibility property
    this.serviceItems = Array.from({ length: 10 }, () => ({ isVisible: false }));
    },
    methods: {
    handleScroll() {
    this.serviceItems.forEach((item, index) => {
    // Custom logic to determine if the item should be visible
    // based on scroll position and device width
    if (this.deviceWidth < 1023 && this.isElementInViewport(item)) {
    item.isVisible = true;
    }
    });
    },
    isElementInViewport(el) {
    // Custom viewport logic
    const rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    },
    },
    };
    </script>
    
    <style>
    .service__item-2 {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 2s ease-out, transform 2s ease-out;
    }
    .service__item-2.is-visible {
    opacity: 1;
    transform: translateX(0);
    }
    </style>