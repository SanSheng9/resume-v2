<template>
  <div class="info-bar">
    <div class="info-wrapper" :class="{ deactivate: show }">
      <div class="personal-block">
        <div class="telegram-block">
          <div class="avatar">
            <img src="@/assets/avatar.svg" alt="" />
          </div>
          <div class="username">
            <a href="https://t.me/SanSheng9" target="_blank">@sansheng9</a>
          </div>
        </div>
        <div class="text-block">
          <div class="title"><span>Sergey Chistyakov</span></div>
          <div class="post-title"><span>frontend-developer</span></div>
          <div class="text">
            <p>
              My name is Sergey Chistyakov. I’m 23 years old. I’m developing
              Frontend on Vue.js . At the moment, I’m improving my knowledge by
              creating pet-projects.
            </p>
          </div>
        </div>
      </div>
      <div class="link-block">
        <div class="link">
          <div class="logo-link"><img src="@/assets/local.svg" /></div>
          <a
            target="_blank"
            href="https://goo.gl/maps/9rDLXFkuZGBxJsE68"
            class="title-link"
          >
            <div class="pre-title"><span>position</span></div>
            <div class="title"><span> Primorsky Krai, Vladivostok</span></div>
          </a>
        </div>
        <div class="link">
          <div class="logo-link"><img src="@/assets/email.svg" alt="" /></div>
          <a
            href="mailto: sansheng9@yandex.ru"
            target="_blank"
            class="title-link"
          >
            <div class="pre-title"><span>e-mail</span></div>
            <div class="title"><span>sansheng9@yandex.ru </span></div>
          </a>
        </div>
        <div class="link">
          <div class="logo-link"><img src="@/assets/github.svg" alt="" /></div>
          <a
            href="https://github.com/SanSheng9"
            target="_blank"
            class="title-link"
          >
            <div class="pre-title"><span>github</span></div>
            <div class="title"><span>github.com/SanSheng9</span></div>
          </a>
        </div>
      </div>
    </div>
    <div class="cross" @click="closeBar">
      <img v-if="!show" src="@/assets/cross.svg" alt="" />
      <img v-else src="@/assets/burger.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeBar() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.info-bar {
  background-color: teal;
  height: 100%;
  max-width: 400px;
  overflow: hidden;
  color: #f5f5f5;
  line-height: 25px;
  font-style: normal;
  font-size: 20px;
  z-index: 10;
  font-weight: 300;
  border-top-left-radius: 10px;
}
@media (max-width: 400px) {
  .info-bar {
    max-width: 100vw;
  }
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  transition: display 0.5s ease;
}
.info-wrapper.deactivate {
  display: none;
}
.personal-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 390px;
  margin-top: 57px;
  margin-bottom: 291px;
}
.telegram-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
}
.username {
  font-size: 14px;
  color: #c8c8c8 !important;
}
.username a {
  color: #c8c8c8 !important;
}
.text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}
.text-block .title {
  font-size: 20px;
}
.post-title {
  font-size: 14px;
  color: #c8c8c8;
  margin-bottom: 11px;
}
.text {
  text-align: center;
  font-size: 20px;
  max-width: 300px;
  line-height: 25px;
}
.link {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;
}
.link a {
  color: #f5f5f5;
}
.title-link {
  margin-left: 5px;
}
.pre-title {
  font-size: 14px;
  line-height: 18px;
  color: #c8c8c8;
}
.link .title {
  padding-left: 3px;
}
.cross {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
@media (max-height: 981px) {
  .personal-block {
    margin-top: 30px;
    margin-bottom: 20vh;
  }
  .info-bar {
    border-top-left-radius: 0;
  }
}
@media (max-height: 715px) {
  .personal-block {
    margin-top: 25px;
    margin-bottom: 7vh;
  }
}
</style>
