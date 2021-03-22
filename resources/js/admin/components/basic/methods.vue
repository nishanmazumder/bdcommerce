<template>
  <div>
    <h1>Views : {{ views }}</h1>
    <button @click="updateCounter(1)">Increases</button>
    <button @click="updateCounter(-1)">Decreases</button>

    <br />
    <br />
    <br />

    <h1>Blog</h1>
    <div v-for="blog in blogs" :key="blog.id">
      <!-- <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length"> -->
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.post }}</p>
    </div>

    <br />
    <br />
    <br />

    <div>
      <span v-if="showItem">Show Item</span>
      <span v-if="!showItem">Hide Item</span>

      <button @click="showItem = !showItem">Show/Hide</button>
      <!-- <button @click="showHide()">Show/Hide</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      views: 0,
      blogs: [],
      showItem: false,
    };
  },

  methods: {
    updateCounter(number) {
      this.views += number;
    },

    showHide() {
      this.showItem = !this.showItem;
    },
  },

  created() {
    //Counter set
    this.views = 100;

    //Blogs
    let posts = [
      { title: "Blog 1", post: "Post 1", id: 1 },
      { title: "Blog 2", post: "Post 2", id: 2 },
      { title: "Blog 3", post: "Post 3", id: 3 },
    ];

    this.blogs = posts;
  },
};
</script>
