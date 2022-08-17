<template>
  <div class="solar-page">
    <div class="block">
      <div class="text-block">
        <div class="title"><span>solar-system</span></div>
        <div class="text">
          <span>my first pet project </span>
        </div>
      </div>
      <div class="logo-block"><img src="@/assets/navbar-sun.svg" /></div>
    </div>
    <div class="screen" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="pre-screen" :class="{ active: hover }">
        <a
          href="https://resume-lake-rho.vercel.app/space-store"
          target="_blank"
        >
          <button
            class="button-5"
            :class="{ active: hover || showButton }"
            role="button"
          >
            Watch
          </button></a
        >
      </div>
      <img src="@/assets/preSolar.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SolarPage",
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
