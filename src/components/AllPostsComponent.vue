<template>
  <main id="home-logged">
    <section class="second-section">
      <h3>Posts</h3>
      <hr />
   </section>
      <div class="posts-row">

        <!-- Post -->
        <article class="post" v-for="(post, id) in allPosts" :key="id"  :id="post.id">
          <h1>{{ post.title }}</h1>
          <h2>
            <span>{{ post.category }}</span>
          </h2>
          <p>{{ post.content }}</p>
          <div class="buttons">
            <a @click="onBtnDetails" id="details-button">Details</a>
            <a @click="onBtnEdit" id="edit-button">Edit</a>
            <a @click="onBtnDelete" id="delete-button">Delete</a>
          </div>
         </article>
      </div>
 
  </main>
</template>

<script>
import {getAllPosts, posts}from "@/services/getAllPosts";
import deletePost from '@/services/deletePost'

export default {
  data: () =>({
     allPosts: posts,
  }),


  methods:{
   onBtnDelete(e){
     let currentPost =e.currentTarget.parentNode.offsetParent 
     deletePost(currentPost.id)
     .then(e => console.log('Delete Success', currentPost.title))
     .catch(error => console.log(error))
 
   }

  },
  
  mounted(){
      // getAllPosts()
      // getAllPosts().then(posts => this.allPosts = posts)
      // this.allPosts 
  },
  
  // updated(){
  //   // console.log(posts);
  //     this.allPosts = posts
  // }

  
};
</script>


<style scoped>

.posts-row{
  display: flex;
  flex-wrap: wrap;
  background: black;
  justify-content: space-around;
}


.second-section h3 {
  color: antiquewhite;
  font-size: 34px;
  text-align: center;
}

.second-section hr {
  border: 2px solid rgb(255, 102, 0);
  border-radius: 100px;
  width: 10%;
  margin: 1% auto 3% auto;
}

.post {
position: relative;
word-wrap: break-word;
box-shadow: 1px 1px 5px gray;
padding: 20px;
border-radius: 5px;
min-width: 20em;
height: 70%;
margin: 30px 20px;
background: wheat;
max-width: 20em;
min-height: 16em;
max-height: 16em;

}

/* title */
.post h1 {
  font-size: 24px;
  text-align: center;
  color: rgb(255, 102, 0);
  margin-bottom: 20px;
}
/* 
category */
.post h2 {
  font-size: 18px;
  margin-bottom: 10px;
}
/* content */
.post p {
  margin: 1% 0;
  padding: 1em;
}

.post span {
  color: rgb(255, 102, 0);
}

.posts-row {
  height: 100%;
  display: flex;
  /* flex-wrap: nowrap;
  overflow-x: scroll; */
}

.buttons {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15em;
}

#details-button,
#delete-button,
#edit-button {
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  bottom: 20px;
  font-size: 18px;
  border: none;
  background: rgb(255, 102, 0);
  color: #fff;
  /* margin-right:1em; */
  padding: 10px;
  width: 80px;
}

#details-button {
  right: 0px;
  background: rgb(145, 165, 33);
}

#edit-button {
  left: 30px;
  background: rgb(11, 109, 207);
  margin-left: 10px;
}

#delete-button {
  right: 0px;
  background: red;
  margin-left: 10px;
}

#edit-button:hover,
#delete-button:hover,
#details-button {
  cursor: pointer;
}
</style>
