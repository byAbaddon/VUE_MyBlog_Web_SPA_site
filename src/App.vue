<template>
  <v-row style="">
    <v-col> <header-component /> </v-col>
    <v-col>
      <router-view />
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  components: {
    HeaderComponent
  },

  data: () => ({})
}
</script>

<style lang="scss">
body  {
  margin: 0;
  padding: 0;
}
</style>
