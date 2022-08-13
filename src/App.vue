<template>
  <div class="resume">
    <div class="wrapper">
      <InfoBar
        @close="closeBar"
        :class="{ deactivate: deactivationBar }"
        class="infobar"
      />
      <div class="main">
        <ElementalPage
          :class="{ deactivate: deactivationBar }"
          class="elemental page"
          :style="{ top: topPage + 'px' }"
        />
        <div
          class="next page"
          :style="{ top: topPage + 981 + 'px' }"
          :class="{ deactivate: deactivationBar }"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum vehicula nunc non rutrum. Nam eu orci sed nisl interdum
          venenatis. Aenean viverra nibh leo, congue bibendum leo pellentesque
          id. Nam rhoncus, ipsum id tincidunt cursus, felis purus rutrum lorem,
          ut iaculis nibh velit id mauris. In quam sem, luctus id faucibus sed,
          porta at arcu. Maecenas posuere vestibulum dolor, ut sollicitudin orci
          hendrerit eu. Suspendisse convallis sodales odio, quis varius risus
          eleifend ut. Aenean eu libero lorem. Quisque tristique tortor non
          suscipit lobortis. Duis a elit justo. Nam metus turpis, blandit eget
          lacus in, dapibus suscipit justo. Donec vel diam magna. Praesent
          pellentesque molestie faucibus. Nulla non faucibus nisl, porta mollis
          nibh. Sed eu justo volutpat, molestie ipsum eu, aliquam dui. Sed sed
          mollis metus. Nunc et libero eu sapien bibendum aliquam. Praesent ut
          lacus eu felis scelerisque tempus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse sagittis quam ac consectetur
          euismod. Donec placerat congue eros, vitae vulputate tortor pulvinar
          et. Fusce ac tristique ipsum, sit amet convallis orci. Mauris semper
          elementum tortor. Duis quis tempor urna, ut aliquam tortor. Phasellus
          consectetur nisi id pharetra mattis. Suspendisse blandit laoreet ante,
          et commodo nunc varius ac. Ut imperdiet efficitur erat, sed tristique
          turpis viverra vitae. Nam volutpat neque sit amet ultrices
          consectetur. Donec sit amet pulvinar velit. Mauris id efficitur
          lectus. Donec rutrum mauris ac augue porttitor, nec maximus arcu
          venenatis. Aenean a pharetra ipsum. Sed vehicula quam urna, non
          pharetra diam sagittis vel. Pellentesque imperdiet, elit a venenatis
          cursus, magna neque maximus ante, non varius eros eros vitae risus.
          Quisque id pharetra arcu. Curabitur ultricies molestie pellentesque.
          Pellentesque rhoncus lobortis nulla, non sagittis lectus malesuada
          non. Maecenas auctor semper egestas. Suspendisse venenatis odio nec
          metus commodo convallis. Pellentesque malesuada facilisis purus, ut
          ornare elit scelerisque aliquam. Donec ut auctor velit, quis suscipit
          odio. Nulla facilisis iaculis dui nec molestie. Phasellus tincidunt
          molestie diam, vel viverra dolor dignissim imperdiet. Maecenas ac
          sagittis neque, in scelerisque velit. Etiam imperdiet mollis dui, at
          mollis arcu vestibulum ac. Fusce odio metus, eleifend eget commodo
          egestas, tincidunt a sem. Ut ornare ipsum quis maximus viverra. Aenean
          accumsan in lorem consequat blandit. Proin leo leo, vulputate in
          eleifend non, fringilla id nibh. Donec sit amet dui sed velit dictum
          viverra. Donec neque eros, volutpat pellentesque lacus a, tempor
          dapibus dui. Suspendisse egestas mi vitae sapien dignissim congue.
          Aenean scelerisque felis ac ultricies venenatis. Nulla suscipit sapien
          at urna blandit euismod. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Quisque
          lacinia risus at mauris ultricies accumsan. In hendrerit elementum
          urna, non congue ante varius a. Praesent sit amet mauris lorem. Nunc
          ultricies, magna quis lobortis pulvinar, nibh risus vehicula tellus,
          vel dictum est neque eget sem. Proin volutpat nunc eu ex aliquet, id
          ultrices massa efficitur. Maecenas arcu lectus, tempor ut sagittis
          vel, molestie sed risus. Ut tempus, lorem sed efficitur ultrices, erat
          sem facilisis erat, id feugiat elit arcu non ante. Nunc nec ultrices
          nisi, suscipit ullamcorper quam.
        </div>
        <Navbar class="navbar" @nav="changePage" />
      </div>
    </div>
  </div>
</template>

<script>
import InfoBar from "./components/InfoBar.vue";
import Navbar from "@/components/NavBar.vue";
import ElementalPage from "@/components/ElementalPage.vue";

export default {
  name: "App",
  components: {
    ElementalPage,
    Navbar,
    InfoBar,
  },
  data() {
    return {
      deactivationBar: false,
      topPage: 0,
    };
  },
  methods: {
    closeBar() {
      this.deactivationBar = !this.deactivationBar;
      console.log("deactivate");
    },
    changePage(value) {
      if (value === 1) {
        this.topPage = 0;
      } else if (value === 2) {
        this.topPage = -981;
      }
    },
  },
};
</script>

<style>
@import url("@/assets/standart.css");
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
  align-items: flex-end;
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
}
.infobar.deactivate {
  width: 70px;
}
.navbar {
  position: absolute;
  right: 515px;
  top: 710px;
  transform: rotate(-100grad);
}
.elemental.page {
  position: absolute;
  left: 415px;
  width: calc(100% - 415px);
  transition: 0.3s ease;
  padding-top: 70px;
}
.next.page {
  position: absolute;
  top: 981px;
  left: 415px;
  width: calc(100% - 415px);
  transition: 0.3s ease;
}
.next.page.deactivate {
  left: 130px;
}
.elemental.page.deactivate {
  left: 130px;
}
.page {
  max-width: 1170px;
  height: 981px;
}
</style>
