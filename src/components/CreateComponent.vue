<template>
  <main id="home-logged">
    <section class="first-section">
        <section class="background-container">
            <form class="edit-form" @submit.prevent="createdSubmit">
                <h1>Create Post</h1>
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="Required, minlength 2">
                <label for="category">Category</label>
                <input type="text" name="category" placeholder="Required, minlength 2" >
                <label for="content">Content</label>
                <textarea name="content" cols="30" rows="7"  placeholder="Required, maxlength 130"></textarea>
                <button >Create</button>
                <a @click="onBtnExit"  id="close-btn"><img src="@/assets/images/close.png"></a>
            </form>
        </section> 
    </section>

     <div v-show="showMessage"  class="message"> 
       <h2>Success add new post, to base!</h2>
       <h2>Press button <span>[All posts]</span> to see posts collection... </h2>
     </div> 
</main>
</template>

<script>
import addPost from '@/services/createdPost'
import {getAllPosts} from '@/services/getAllPosts'


export default {
  

  data: () => ({
   showMessage: false
  }),

  methods:{
   createdSubmit(e){
    const form = new FormData(e.target)
    const title = form.get('title')
    const category = form.get('category')
    const content = form.get('content')
    const creatorEmail = JSON.parse(localStorage.getItem('auth')).email
    console.log('click error not fill fields');
    if (title && category && content && (content.length > 2 && content.length <= 120)) {
      console.log('Success add new post', title); 
      addPost({title,category ,content, creatorEmail})
      e.target.reset()
      document.querySelector('.first-section').style =" display: none"
      getAllPosts()
      this.showMessage = true
     
    }
    
   },

    onBtnExit(e){
      console.log(e.target.parentElement.parentNode);
      document.querySelector('.first-section').style =" display: none"
    }
  }

}
</script>


<style scoped>
.message{
  margin-top:10em;
}


.message h2{
  color: cornsilk;
  text-align: center;
  font-size: xx-large;
  text-shadow: 4px 1px blueviolet;
  margin-top: 1em;
}

.message h2 span{
  color: rgb(32, 30, 22);
  font-size: xx-large;
  text-shadow: 1px 1px rgb(187, 158, 214);
}
.background-container {
  flex: 1;
  background: hsla(0, 0%, 13%, 0.384);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 87vh;
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



.first-section form,
.edit-posts form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  width: 450px;
  padding: 30px;
  margin-top: 90px;
  border-radius: 5px;
}

.edit-posts form {
  margin: 0;
  position: relative;
  height: 90vh;
}

/*title */
.first-section form h1{
  align-self: center;
  font-size: 26px;
  margin: 10px 0 15px;
  border-bottom: 3px dotted rgb(116, 109, 214);
  color: rgb(116, 109, 214);;
}

.first-section form input,
.first-section form textarea {
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

button {
  font-size: 18px;
  padding: 8px 10px;
  background: rgb(116, 109, 214);
  color: #fff;
  margin-top: 30px;
  border: double;
  border-radius: 5px;
}

button:hover{
  cursor:pointer;
  background: rgb(96, 109, 214);
}
</style>
