<template>
         
 <section id="home">
        <div v-if="!isA" class="secondTabLinks"> 
            <router-link to="/create">Create</router-link>
            <router-link to="/edit">Edit</router-link>
            <router-link to="/details">Details</router-link>
            <router-link to="/delete">Delete</router-link>
         </div>
        
         <!-- <v-slot class="slotContent edit">  <edit-component /> </v-slot> -->

    <section class="background-container" v-show="isA"  >
        <h1>Welcome to MyBlog!</h1>
      <div class="auth-buttons"  >
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </section>
           
  </section>
            
 
</template>

<script>
import EditComponent from '../components/EditComponent.vue'


export default {
  components: { 
    // EditComponent
  },
  data: () => ({
    isA : localStorage.getItem('auth') == null  //user not login
  }),

  methods: {},
  created(){
   
  },
}
</script>

<style scoped>
.slotContent{
 color: white;
}

.secondTabLinks{
  display: flex;
  justify-content: center;
  background: darkgray;
padding: 0.3em;
}
.secondTabLinks a {
  color: #212121;
  margin: 0 1em;
  text-decoration: none;
  font-weight: bold;
}

.secondTabLinks a:hover{
  color: white;
} 


#home {
  background: url("@/assets/images/home.jpg");
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100%;
  
}


.background-container {
  flex: 1;
  background: hsla(0, 0%, 13%, 0.384);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.background-container>h1 {
  color: #fff;
  font-size: 50px;
}

.background-container a {
 display: inline-block;
color: darkblue;
text-decoration: none;
background: gainsboro;
padding: 10px 25px;
font-size: 20px;
margin: 50px 20px;
transition: transform 0.3s;
border: 1px solid darkblue;
border-radius: 12px;
transition: transform 0.3s;
}

.background-container a:hover {
  transform: scale(1.1);
}

/* Logged In */
.first-section {
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
   background: url('@/assets/images/home.jpg');
  background-size: cover;
  background-position: center;
}

</style>
