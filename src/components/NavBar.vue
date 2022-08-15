<template>
  <div class="nav-bar">
    <div class="wrapper-navbar">
      <div
        class="icon elem"
        :class="{ active: activeIconOne }"
        @click="activeIcon(1)"
      >
        <img src="@/assets/navbar-elem.svg" alt="" />
      </div>
      <div
        class="icon solar"
        :class="{ active: activeIconTwo }"
        @click="activeIcon(2)"
      >
        <img src="@/assets/navbar-sun.svg" alt="" />
      </div>
      <div
        class="icon tabata"
        :class="{ active: activeIconThree }"
        @click="activeIcon(3)"
      >
        <img src="@/assets/navbar-tabata.svg" alt="" />
      </div>
      <div
        class="icon other"
        :class="{ active: activeIconFour }"
        @click="activeIcon(4)"
      >
        <img src="@/assets/navbar-other.svg" alt="" />
      </div>
      <div class="line" :style="{ left: linePosition + 'px' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  props: {
    position: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      activeIconOne: true,
      activeIconTwo: false,
      activeIconThree: false,
      activeIconFour: false,
      linePosition: 12,
    };
  },
  methods: {
    activeIcon(e) {
      this.$emit("nav", e);
      if (e === 1) {
        this.activeIconOne = true;
        this.activeIconTwo = false;
        this.activeIconThree = false;
        this.activeIconFour = false;
        this.linePosition = 12;
      } else if (e === 2) {
        this.activeIconOne = false;
        this.activeIconTwo = true;
        this.activeIconThree = false;
        this.activeIconFour = false;
        this.linePosition = 98;
      } else if (e === 3) {
        this.activeIconOne = false;
        this.activeIconTwo = false;
        this.activeIconThree = true;
        this.activeIconFour = false;
        this.linePosition = 183;
      } else if (e === 4) {
        this.activeIconOne = false;
        this.activeIconTwo = false;
        this.activeIconThree = false;
        this.activeIconFour = true;
        this.linePosition = 268;
      }
    },
  },
  watch: {
    position(newValue) {
      this.activeIcon(newValue);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  width: 350px;
  height: 94px;
  background-color: #515151;
  border-radius: 10px;
  -webkit-box-shadow: -5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: -5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: -5px 5px 5px -5px rgba(34, 60, 80, 0.6);
}
@media (max-width: 425px) or (max-height: 600px) {
  .nav-bar {
    display: none;
  }
}
.wrapper-navbar {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  position: relative;
}
.icon {
  width: 75px;
  height: 75px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease;
}
.icon:hover {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.icon.elem {
  background-color: white;
}
.icon.solar {
  background-color: black;
  border-top: none;
}
.icon.tabata {
  background-color: #008000;
}
.icon.other {
  background-color: white;
}
.other img {
  padding-top: 10px;
}
.icon img {
}
.line {
  position: absolute;
  bottom: 0px;
  min-width: 70px;
  height: 2px;
  border-radius: 1px;
  background-color: #ececec;
  transition: 0.2s ease;
}
.icon.elem {
  margin-left: 5px;
}
.icon.other {
  margin-right: 5px;
}
</style>
