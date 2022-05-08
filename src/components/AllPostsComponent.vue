<template>
  <main id="home-logged">
    <section class="second-section">
        <h3>Posts</h3>
        <hr>
        <div class="posts-row">
           show all post
        </div>
    </section>

<!-- Post -->
<article class="post">
    <h1>{{title}}</h1>
    <h2><span>{{category}}</span></h2>
    <p>{{content}}</p>
    <a href="#/delete/" id="delete-button">Delete</a>
    <a href="#/details/" id="details-button">Details</a>
    <a href="#/edit/" id="edit-button">Edit</a>
</article>

</main>



</template>

<script>
export default {

}
</script>


<style scoped>


.second-section {
  height: 70vh;
  width: 100%;
  padding: 2% 5%;
}

.second-section h3 {
  font-size: 34px;
  text-align: center;
}

.second-section hr {
  border: 2px solid rgb(255, 102, 0);
  border-radius: 100px;
  width: 10%;
  margin: 1% auto 3% auto;
}

.second-section .post {
  position: relative;
  word-wrap: break-word;
  box-shadow: 1px 1px 5px gray;
  padding: 20px;
  border-radius: 5px;
  min-width: 35%;
  height: 70%;
  margin: 30px 20px;
}

.post h1 {
  font-size: 24px;
  text-align: center;
  color: rgb(255, 102, 0);
  margin-bottom: 20px;
}

.post h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.post p {
  margin: 1% 0;
}

.post span {
  color: rgb(255, 102, 0);
}

.posts-row {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

#delete-button,
#edit-button {
  position: absolute;
  text-align: center;
  bottom: 20px;
  font-size: 18px;
  border: none;
  background: rgb(255, 102, 0);
  color: #fff;
  padding: 10px;
  width: 100px;
  text-decoration: none;
}

#delete-button {
  right: 20px;
}

#edit-button {
  left: 20px;
}

#edit-button:hover,
#delete-button:hover,
#details-button {
  cursor: pointer;
}

.edit-posts {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-position: center;
}

.edit-form {
  position: fixed;
  z-index: 100;
  box-shadow: 1px 1px 5px gray;
  top: 8%;
  animation: appear 1 0.5s;
}

.edit-form a {
  color: black;
  position: absolute;
  top: -36px;
  right: -10px;
}

.edit-form a:hover {
  transform: none;
}

.edit-posts a:hover {
  transform: none;
}

#close-btn {
  background: none;
  padding: 0;
}

img {
  width: 25px;
  position: absolute;
  top: 10px;
  right: 25px;
}

#details-button {
  text-decoration: none;
  display: inline-block;
  margin-top: 6px;
  color: blue;
}



</style>
