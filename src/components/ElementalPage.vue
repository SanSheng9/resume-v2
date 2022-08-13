<template>
  <div class="elemental-page">
    <div class="wrapper-elemental">
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
          <button class="button-5" :class="{ active: hover }" role="button">
            Watch
          </button>
        </div>
        <img src="@/assets/preelem.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementalPage",
  data() {
    return { hover: false };
  },
};
</script>

<style scoped>
.elemental-page {
  margin-left: 5vw;
  display: flex;
}
.block {
  display: flex;
}
.text-block {
  height: 100%;
  margin-right: 10px;
}
.title {
  font-size: 96px;
  line-height: 114px;
  font-family: Jura, sans-serif;
}
.text {
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
}
.logo-block {
  width: 272px;
  height: 264px;
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
}
.logo-block img {
  max-width: 272px;
}
.screen {
  border: 1px solid #dddddd;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
}
.screen img {
  width: 100%;
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
</style>
