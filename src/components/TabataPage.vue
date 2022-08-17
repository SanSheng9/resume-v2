<template>
  <div class="tabata-page">
    <div class="block">
      <div class="text-block">
        <div class="title">
          <span>tabata timer</span>
        </div>
        <div class="text">
          <span>frontend app for mobile devices for practicing tabata </span>
        </div>
      </div>
    </div>
    <div class="screen" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="pre-screen" :class="{ active: hover }">
        <a href="https://resume-lake-rho.vercel.app/tabata" target="_blank"
          ><button
            class="button-5"
            :class="{ active: hover || showButton }"
            role="button"
          >
            Watch
          </button></a
        >
      </div>
      <div class="main-img"><img src="@/assets/PreTabata1.png" alt="" /></div>
      <div class="other-img">
        <img src="@/assets/PreTabata2.png" alt="" />
        <img class="pre-tabata-mini-two" src="@/assets/PreTabata3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabataPage",
  data() {
    return { hover: false };
  },
  computed: {
    showButton() {
      return document.documentElement.scrollWidth < 611;
    },
  },
};
</script>
