<template>
  <div class="elemental-page">
    <div class="block">
      <div class="text-block">
        <div class="title"><span>elementals</span></div>
        <div class="text">
          <span
            >my latest pet project, which will become a “magic” shop and which
            I'm currently working on.
          </span>
          <br />
          <span>design by zgotlove</span>
        </div>
      </div>
      <div class="logo-block"><img src="@/assets/navbar-elem.svg" /></div>
    </div>
    <div class="screen" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="pre-screen" :class="{ active: hover }">
        <a href="https://elements-gamma.vercel.app/" target="_blank"
          ><button
            class="button-5"
            :class="{
              active: hover || showButton,
            }"
            role="button"
          >
            Watch the site
          </button></a
        >
      </div>
      <img src="@/assets/preelem.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementalPage",
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
