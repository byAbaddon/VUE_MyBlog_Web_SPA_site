<template>
<v-app>
   <header-component /> 
      <v-main class="main">
          <router-view />
       </v-main> 
    <footer-component/>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },

  data: () => ({

  }),
  created () {
    // if (localStorage.getItem("auth") == null) {
    //   this.$router.push("/").catch({});
    // }
  }
}
</script>

<style lang="scss">

html, body {
   height:100%;
   width:100%;
   padding:0;
   margin:0;
}

body  {
display: flex;
flex-direction: column;
}

.main{
  flex: auto;
  color:red;
 
}
</style>
