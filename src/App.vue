<template>
  <div class="resume" @wheel.prevent="rollingMouse">
    <div class="wrapper">
      <InfoBar
        v-touch:swipe="swipeInfobar"
        @close="closeBar"
        :show="deactivationBar"
        :class="{ deactivate: deactivationBar }"
        class="infobar"
      />
      <div class="main" v-touch:swipe="swipeScreen">
        <ElementalPage
          :class="{ deactivate: deactivationBar }"
          class="elemental page"
          :style="{ top: topPage + 'vh' }"
        />
        <SolarPage
          :class="{ deactivate: deactivationBar }"
          class="solar page"
          :style="{ top: topPage + 100 + 'vh' }"
        />
        <TabataPage
          class="tabata page"
          :style="{ top: topPage + 100 * 2 + 'vh' }"
          :class="{ deactivate: deactivationBar }"
        >
        </TabataPage>
        <OtherPage
          class="other page"
          :style="{ top: topPage + 100 * 3 + 'vh' }"
          :class="{ deactivate: deactivationBar }"
        >
        </OtherPage>
      </div>
    </div>
    <div class="flexbox-navbar">
      <Navbar
        class="navbar"
        :class="{
          deactivate: deactivationBar && moveNavbar,
          dontmove: !moveNavbar,
        }"
        @nav="changePage"
        :position="currentPosition"
      />
    </div>
  </div>
</template>

<script>
import InfoBar from "./components/InfoBar.vue";
import Navbar from "@/components/NavBar.vue";
import ElementalPage from "@/components/ElementalPage.vue";
import SolarPage from "@/components/SolarPage";
import TabataPage from "@/components/TabataPage";
import OtherPage from "@/components/OtherPage";

export default {
  name: "App",
  components: {
    OtherPage,
    TabataPage,
    SolarPage,
    ElementalPage,
    Navbar,
    InfoBar,
  },
  data() {
    return {
      deactivationBar: false,
      topPage: 0,
      mouseValue: 0,
      currentPosition: 1,
    };
  },
  computed: {
    moveNavbar() {
      return document.documentElement.scrollHeight < 983;
    },
  },
  methods: {
    closeBar() {
      this.deactivationBar = !this.deactivationBar;
    },
    changePage(value) {
      this.deactivationBar = true;
      if (value === 1) {
        this.topPage = 0;
        this.currentPosition = value;
      } else if (value === 2) {
        this.topPage = -100;
        this.currentPosition = value;
      } else if (value === 3) {
        this.topPage = -100 * 2;
        this.currentPosition = value;
      } else if (value === 4) {
        this.topPage = -100 * 3;
        this.currentPosition = value;
      }
    },
    swipeScreen(s) {
      console.log("swipe", s);
      if (s === "top") {
        this.rollingMouse(1);
      } else if (s === "bottom") {
        this.rollingMouse(0);
      }
    },
    swipeInfobar(e) {
      if (e === "right") {
        this.deactivationBar = false;
      } else if (e === "left") {
        this.deactivationBar = true;
      }
    },
    rollingMouse(e) {
      this.deactivationBar = true;
      if (e.deltaY > 0 || e === 1) {
        this.mouseValue = 1;
        if (this.topPage === 0) {
          this.topPage = -100;
          this.currentPosition = 2;
        } else if (this.topPage === -100) {
          this.topPage = -(100 * 2);
          this.currentPosition = 3;
        } else if (this.topPage === -(100 * 2)) {
          this.topPage = -100 * 3;
          this.currentPosition = 4;
        }
      } else if (e.deltaY < 0 || e === 0) {
        this.mouseValue = 2;
        if (this.topPage === -100 * 3) {
          this.topPage = -(100 * 2);
          this.currentPosition = 3;
        } else if (this.topPage === -(100 * 2)) {
          this.topPage = -100;
          this.currentPosition = 2;
        } else if (this.topPage === -100) {
          this.topPage = 0;
          this.currentPosition = 1;
        }
      }
    },
  },
};
</script>

<style>
@import url("@/css/standart.css");
:root {
  --index: calc(1vw + 1vh);
}
html {
  overflow: hidden;
}
@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "Mulish";
  src: local("Mulish"), url("./assets/Mulish-ExtraLight.ttf") format("ttf");
}
@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "Jura";
  src: local("Jura"), url("./assets/Jura-Light.ttf") format("ttf");
}
.resume {
  width: 100%;
  height: 100vh;
  background-color: #dddddd;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-family: Mulish, Bahnschrift, sans-serif;
}
.wrapper {
  max-width: 1240px;
  height: 982px;
  margin: 0 auto;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  overflow: hidden;
}
@media (max-height: 982px) {
  .wrapper {
    height: 100vh;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
}
.main {
  width: 1240px;
  position: relative;
}
.infobar {
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 400px;
  transition: 0.3s ease;
  z-index: 49 !important;
}
.infobar.deactivate {
  left: -330px;
}
.flexbox-navbar {
  position: absolute;
  min-width: 100%;
  max-height: 94px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 50;
}
.navbar {
  z-index: 50;
  margin-left: 470px;
  transition: 0.3s ease;
  margin-bottom: 7px;
}
.navbar.deactivate {
  margin-left: 70px;
}
.navbar.dontmove {
  margin-left: 70px;
}
.solar {
  background-color: black;
  left: 70px;
  padding-bottom: 1px;
}
.page.deactivate {
  left: 70px;
}
.page {
  min-height: calc(100vh - (100vh - 981px));
  padding-top: 50px;
  left: 400px;
  min-width: calc(100% - 70px);
  transition: 0.3s ease;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute;
}
@media (max-height: 982px) {
  .page {
    min-height: 100vh;
  }
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
a {
  text-decoration: none;
}
a:visited,
a:hover {
  color: #f5f5f5;
}
a:active {
  color: #d5d5d5;
}
/*NAME_PAGE*/
.elemental-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.solar-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabata-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.elemental-page .block {
  display: flex;
  flex-direction: column-reverse;
}
.solar-page .block {
  display: flex;
}
.text-block {
  height: 100%;
  margin-right: 10px;
  text-align: center;
}
.page .title {
  font-size: calc(var(--index) * 3);
  font-family: Jura, sans-serif;
  text-align: center;
}
.solar-page .title {
  color: #9e9e9e;
}
.text {
  font-size: calc(var(--index) * 1.3);
  line-height: 40px;
  font-weight: 300;
}
.elemental-page .text {
  max-width: 85%;
  margin: 0 auto;
}
.solar-page .text {
  color: #9e9e9e;
}
.logo-block {
  flex: 1 1 150px;
  display: flex;
  justify-content: center;
}
.solar-page .logo-block {
  width: 272px;
  height: 264px;
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
}
.screen {
  max-width: 900px;
  margin-top: 10px;
  position: relative;
}
.tabata-page .screen {
  display: flex;
  justify-content: center;
}
.elemental-page .screen {
  border: 1px solid #dddddd;
}
.solar-page .screen {
  border: 1px solid #6e6e6e;
}
.screen img {
  width: 100%;
}
.tabata-page .screen img {
  max-width: 100%;
  border: 1px solid #dddddd;
}
.tabata-page .main-img {
  flex: 0 0 446px;
  margin-right: 70px;
}
.tabata-page .other-img {
  flex: 0 0 279px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pre-tabata-mini-two {
  padding: 5px;
}
.pre-screen {
  position: absolute;
  top: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transition: 0.5s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.pre-screen.active {
  background-color: rgba(171, 171, 171, 0.2);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.other-page .text a {
  color: black;
}
.other-page .title {
  margin-bottom: calc(var(--index));
}
.other-page .text {
  margin-bottom: calc(var(--index));
}
.button-5 {
  display: none;
  z-index: 50;
}
.button-5.active {
  align-items: center;
  background-clip: padding-box;
  background-color: teal;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-5.active:hover,
.button-5.active:focus {
  background-color: #019d9d;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5.active:hover {
  transform: translateY(-1px);
}

.button-5.active:active {
  background-color: #006969;
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  transform: translateY(0);
}
/*OPTIMISE*/
@media (max-width: 1025px) {
  .page {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0;
    min-width: calc(100vw - 70px) !important;
  }
  .elemental-page {
    justify-content: center !important;
  }
  .block {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 30px;
  }
  /*.block .title {*/
  /*  font-size: 76px;*/
  /*  text-align: center;*/
  /*}*/
  /*.block .text {*/
  /*  font-size: 24px;*/
  /*  line-height: 35px;*/
  /*  max-width: 650px;*/
  /*}*/
  .block .text-block {
    width: min-content;
  }
  .logo-block {
    margin-left: 0 !important;
    margin-top: 15px !important;
    flex: 1 1 150px;
    display: flex;
    justify-content: center;
  }
  .logo-block img {
    max-width: 200%;
  }
  .screen {
    max-width: 100% !important;
    margin-top: 10px;
  }
  .tabata-page .screen {
    max-width: 90% !important;
  }
  .page.tabata-page {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .other-page .title {
    font-size: calc(var(--index) * 3);
    font-family: Jura, sans-serif;
    margin-bottom: 63px;
  }
  .other-page .text {
    font-size: calc(var(--index) * 1.2);
    line-height: 40px;
    font-weight: 300;
    /*max-width: 30vw;*/
    margin-bottom: 54px;
    max-width: 70vw;
  }
}
@media (max-width: 769px) {
  .page {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 0;
  }
  .elemental-page {
    justify-content: center !important;
  }
  .block {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 10px;
  }
  .block .text-block {
    margin-right: 0;
  }
  /*.block .title {*/
  /*  font-size: 52px;*/
  /*  text-align: center;*/
  /*  line-height: 40px;*/
  /*}*/
  /*.block .text {*/
  /*  font-size: 20px;*/
  /*  line-height: 35px;*/
  /*  max-width: 200px;*/
  /*  margin: 0 auto;*/
  /*}*/
  .logo-block {
    margin-left: 0 !important;
    margin-top: 15px !important;
    flex: 1 1 125px;
    display: flex;
    justify-content: center;
  }
  .logo-block img {
    max-width: 200%;
  }
  .screen {
    max-width: 100% !important;
  }
  .tabata-page .screen img {
    max-width: 70%;
    border: 1px solid #dddddd;
  }
  .tabata-page .screen {
    display: block;
  }
  .tabata-page .main-img {
    max-width: 100%;
    margin-right: 0;
  }
  .tabata-page .main-img img {
    max-width: 100%;
  }
  .tabata-page .other-img {
    display: none;
  }
  .other-page .wrapper {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /*.other-page .title {*/
  /*  font-size: 84px;*/
  /*  font-family: Jura, sans-serif;*/
  /*  margin-bottom: 63px;*/
  /*}*/
  /*.other-page .text {*/
  /*  font-size: 32px;*/
  /*  line-height: 40px;*/
  /*  font-weight: 300;*/
  /*  max-width: 600px;*/
  /*  margin-bottom: 54px;*/
  /*  margin: 0 auto;*/
  /*}*/
}
@media (max-width: 426px) {
  .screen img {
    display: none;
  }
  .elemental-page .screen,
  .solar-page .screen {
    border: none;
  }
  .logo-block {
    display: block;
    margin: 0;
    margin-top: 10px;
  }
  .screen {
    width: 100%;
  }
  .pre-screen {
    position: static;
  }
  .pre-screen.active {
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0);
  }
  .other-page .wrapper {
    margin-left: 15px;
  }
  /*.other-page .title {*/
  /*  font-size: 46px;*/
  /*  font-family: Jura, sans-serif;*/
  /*  margin-bottom: 63px;*/
  /*}*/
  /*.other-page .text {*/
  /*  font-size: 28px;*/
  /*  line-height: 40px;*/
  /*  font-weight: 300;*/
  /*  max-width: 300px;*/
  /*  margin-bottom: 54px;*/
  /*  margin: 0 auto;*/
  /*}*/
}
@media (max-width: 376px) {
  /*.block .title {*/
  /*  font-size: 48px;*/
  /*}*/
  /*.other-page .title {*/
  /*  font-size: 32px;*/
  /*  margin-bottom: 30px;*/
  /*}*/
  /*.other-page .text {*/
  /*  font-size: 24px;*/
  /*  max-width: 200px;*/
  /*  margin-bottom: 30px;*/
  /*  margin: 0 auto;*/
  /*}*/
}
@media (max-width: 321px) {
  /*.block .title {*/
  /*  font-size: 38px;*/
  /*}*/
  /*.block .text {*/
  /*  font-size: 16px;*/
  /*}*/
}
@media (orientation: portrait) {
  .navbar {
    display: none;
  }
}
</style>
