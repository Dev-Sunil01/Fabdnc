<template>
    <div class="preloader" v-if="isLoading">
        <div class="loading">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="bar bar4"></div>
            <div class="bar bar5"></div>
            <div class="bar bar6"></div>
            <div class="bar bar7"></div>
            <div class="bar bar8"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
        };
    },

    mounted() {
        // Simulate an asynchronous operation, like fetching data
        setTimeout(() => {
            // After the operation is complete, hide the loader
            this.isLoading = false;
        }, 2000); // Adjust the timeout as needed
    },

}
</script>