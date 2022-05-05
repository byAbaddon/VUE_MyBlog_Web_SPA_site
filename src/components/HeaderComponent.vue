<template>
 <div id="header">
    <h1>MyBlog</h1>
    <h2>Welcome <span>{{email}}!</span>!</h2>
  <nav id="nav">
      <ul>
        <router-link to="/logout">Logout</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/about">About</router-link>
      </ul>
    </nav>
</div>
</template>

<script>
export default {
  data: ()=> ({
    email: 'noEmail'

  }),
  objects:{
  
  }

}
</script>

<style scoped>
#header {
  background: #212121da;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  /* width: 100%;
  position: absolute;
  left: 0;
  top: 0;
 */
}

#header h1 {
  color: #fff;
}

#nav {
  display: flex;
}

#nav ul {
  display: flex;
  list-style: none;
}

#nav li {
  margin: 0 15px;
}

#nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px;
  margin:10px;
  text-align: center;
  transition: 0.5s;
}

#nav a:hover {
  background: #fff;
  color: #212121;
  padding: 2px;
}

#header h2 {
  color: #fff;
  font-weight: 550;
}

#header h2 span {
  color: rgb(255, 102, 0);
}
</style>
