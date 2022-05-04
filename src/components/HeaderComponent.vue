<template>
 <div id="header">
    <h1>MyBlog</h1>
    <h2>Welcome <span>{{email}}!</span>!</h2>
  <nav id="nav">
      <ul>
        <li><a href="#/logout">Logout</a></li>
        <li><a href="#/">Home</a></li>
        <li><a href="#/login">Login</a></li>
        <li><a href="#/register">Register</a></li>
      </ul>
    </nav>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
  background: #212121da;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px ;
  position: absolute;
  width: 100%;
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
  padding: 10px 15px;
  text-align: center;
  transition: 0.5s;
}

#nav a:hover {
  background: #fff;
  color: #212121;
  padding: 6px 12px;
}

#header h2 {
  color: #fff;
  font-weight: 550;
}

#header h2 span {
  color: rgb(255, 102, 0);
}
</style>
