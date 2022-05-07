<template>
  <main id="home-logged">
    <section class="first-section">
        <section class="background-container">
            <form action="#/edit/{{objectId}}" method="POST" class="edit-form">
                <h1>Edit Post</h1>
                <label for="title">Title</label>
                <input type="text" name="title" value="title">
                <label for="category">Category</label>
                <input type="text" name="category" value="{{category}}">
                <label for="content">Content</label>
                <textarea name="content" cols="30" rows="7">content</textarea>
                <button>Edit</button>
                <a href="" id="close-btn"><img src="@/assets/images/close.png"></a>
            </form>
        </section>
    </section>
    <section class="second-section">
        <h3>Posts</h3>
        <hr>
        <div class="posts-row">
           show all post
        </div>
    </section>
</main>
</template>

<script>
export default {
  data: () => ({
    title: 'title',
    category: 'category',
    content: 'content',
  }),

}
</script>


<style scoped>


.background-container {
  flex: 1;
  background: hsla(0, 0%, 13%, 0.384);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.background-container  h1 {
  color: rgb(39, 36, 36);
  font-size: 50px;
}

.background-container a {
  display: inline-block;
  color: #212121;
  background: rgb(53, 13, 122);
  padding: 10px 25px;
  font-size: 20px;
  margin: 50px 20px;
  transition: transform 0.3s;
  border:2px solid rgb(113, 113, 211);
  border-radius: 12px;
      /* box-sizing: border-box; */
}


/* Logged In */
.first-section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("@/assets/images/home.jpg");
  background-size: cover;
  background-position: center;
}

.first-section form,
.edit-posts form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  width: 450px;
  padding: 30px;
  margin-top: 60px;
  border-radius: 5px;
}

.edit-posts form {
  margin: 0;
  position: relative;
  height: 80vh;
}

.first-section form h1,
.edit-posts form h1 {
  align-self: center;
  font-size: 26px;
  margin: 10px 0 15px;
}

.first-section form input,
.first-section form textarea,
.edit-posts form input,
.edit-posts form textarea {
  border: none;
  background: rgb(240, 240, 240);
  font-size: 16px;
  padding: 10px;
  resize: none;
}

.first-section form label,
.edit-posts form label {
  margin: 10px 0;
}

.first-section form button,
.edit-posts form button {
  margin-top: 22px;
  padding: 12px;
  border: none;
  background: #212121;
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
}




.edit-posts {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("@/assets/images/home.jpg");
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


</style>
