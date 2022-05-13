<template>
  <main>
    <section class="section">
      <h3>Posts</h3>
      <hr />
    </section>
    <div class="posts-row">
      <!-- Post -->
      <article
        class="post"
        v-for="(post, id) in allPosts"
        :key="id"
        :id="post.id"
      >
        <h1>{{ post.title }}</h1>
        <h2>
          <span>{{ post.category }}</span>
        </h2>
        <p>{{ post.content }}</p>
        <div class="buttons">
          <a @click="onBtn" id="details-button">Details</a>
          <a @click="onBtn" id="edit-button">Edit</a>
          <a @click="onBtn" id="delete-button">Delete</a>
        </div>
      </article>
    </div>
      <details-dialog />
      <delete-dialog />
      <edit-dialog />
  </main>
</template>

<script>
import DetailsDialog from "./modalDialogs/DetailsDialog"
import EditDialog from "./modalDialogs/EditDialog"
import DeleteDialog from "./modalDialogs/DeleteDialog"
import emitter  from 'tiny-emitter/instance'
import listenerRealTime from "@/services/listenerRealTime"


export default {
   components: {
     DetailsDialog,
     EditDialog,
     DeleteDialog

   },
  data: () => ({
    allPosts: ''
  }),

  methods: {
     onBtn(e){
       const btnName = e.target.textContent
       const currentPostId = e.currentTarget.parentNode.offsetParent.id
       console.log(currentPostId);
       if (btnName == 'Details') emitter.emit('on-details', currentPostId)
       if (btnName == 'Edit') emitter.emit('on-edit', currentPostId)
       if (btnName == 'Delete') emitter.emit('on-delete', currentPostId)
     }
  },
  

 mounted() {
   console.log('load collection' , this.$allPosts);
  setTimeout(() => {
    this.$allPosts = listenerRealTime
    this.allPosts = this.$allPosts
    console.log('Mounted Component ',  listenerRealTime)
  }, 700);

  
  
  },

};
</script>



<style scoped>


.posts-row {
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(rgba(9, 9, 11, 0.99), rgba(2, 10, 30, 0.91));
  justify-content: space-around;
}
/* background-size: cover; */
.section {
  background: linear-gradient(rgba(69, 92, 159, 0.7), rgba(9, 26, 77, 0.91)),
    url("../assets/images/posts/Blog-Posts.png");
  background-position: center;
  height: 10vh;
  width: 100%;
}
.section h3 {
  margin: 0;
  color: khaki;
  font-size: 34px;
  text-align: center;
  padding-top: 0.3em;
}

.section hr {
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
  color: grey;
  text-decoration: underline;
   margin-left: 1em;
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


