<template>
  <div>
    <header-component />
    <div class="main">
      <router-view  />
    </div>
    <footer-component />
  </div>
</template>

<script>   
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  data:()=>({
  }),

  components: {
    HeaderComponent,
    FooterComponent,
  },


  created() {
    if (localStorage.getItem("auth") == null) {
      this.$router.push("/").catch({});
    }
  },
};
</script>

<style lang="scss">

html {
  font-family: sans-serif;
}

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
}


</style>
