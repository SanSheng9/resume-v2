<template>
  <div class="other-page">
    <div class="wrapper" :style="{ zIndex: 50 }">
      <div class="title">other-projects</div>
      <div class="text">
        <a href="https://github.com/SanSheng9/blog-test" target="_blank"
          ><b>blog-test</b></a
        >
        - a simple blog with the ability to comment on posts by authorized
        users. Backend: Django + Django REST Framework. Frontend: Nuxt.js.
      </div>
      <div class="text">
        <a href="https://github.com/SanSheng9/secret_shop" target="_blank"
          ><b>secret_shop</b></a
        >
        - backend-store is a Django DRF application with JTW authorization.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherPage",
};
</script>
