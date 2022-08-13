<template>
  <div class="nav-bar">
    <div class="wrapper-navbar">
      <div class="icon elem" @click="$emit('nav', 1)">
        <img src="@/assets/navbar-elem.svg" alt="" />
      </div>
      <div class="icon solar" @click="$emit('nav', 2)">
        <img src="@/assets/navbar-sun.svg" alt="" />
      </div>
      <div class="icon tabata">
        <img src="@/assets/navbar-tabata.svg" alt="" />
      </div>
      <div class="icon other">
        <img src="@/assets/navbar-other.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style scoped>
.nav-bar {
  width: 100px;
  height: 415px;
  background-color: #ababab;
  border-radius: 10px;
  -webkit-box-shadow: -5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: -5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: -5px 5px 5px -5px rgba(34, 60, 80, 0.6);
}
.wrapper-navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
}
.icon {
  width: 80px;
  height: 80px;
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
  transform: rotate(100grad);
}
</style>
