<template>
  <div class="main">
    <hero :type="post.type"></hero>
    <div class="title">
      <router-link to="">{{post.title}}</router-link>
    </div>
    <div class="date">{{handleTime(post.created)}}</div>
    <div class="tags">
      <div class="tag" v-for="tag in post.tags" :key="tag.key">
        <div class="tag--link">            
          <div class="tag--text">#{{tag}}</div>
        </div>
      </div>
    </div>
    <div class="post-content" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked';
import hero from './Hero';

export default {
  name: 'post',
  components: {
    hero,
  },
  data() {
    return {
      post: {},
    };
  },
  created() {
    this.setPost();
  },
  methods: {
    async setPost() {
      const slug = this.$route.params.slug;
      let articles = this.$store.state.articles;
      if (articles.length === 0) {
        await this.$store.dispatch('getArticles');
        articles = this.$store.state.articles;
      }
      this.post = articles.filter(article => article.slug === slug)[0];
    },
    handleTime(time = '') {
      return time.split('T')[0];
    },
  },
  computed: {
    compiledMarkdown() {
      if (!this.post.content) return false;
      return marked(this.post.content, { sanitize: true });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  min-height: 130vh;
  grid-template-columns: repeat(6, 2fr);
  font-family: 'Ovo', serif;
}

.hero {
  grid-column: 2/6;
}

.title {
  grid-column: 2/5;
  font-size: 80px;
  letter-spacing: 1px;
  transform: skew(0deg, -3deg);
  font-weight: bold;
  line-height: 1.1;
  margin: 0px;
}

.title a {
  background-image: linear-gradient(to right, #F7C242 100%, #F7C242 50%);
  border-bottom: 0px;
  text-decoration: none;
  color: darken($color: #58B2DC, $amount: 10);
}

.date {
  grid-column: 3;
  font-size: 24px;
  justify-self: end;
  align-self: end;
  font-style: italic;
  opacity: 0.6;
  padding: 0;
  border-bottom: 2px solid darken($color: #58B2DC, $amount: 10);
}

.tags {
  grid-column: -3;
  font-size: 24px;
  justify-self: end;
  align-self: end;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: block;
  margin-right: 1rem;
}

.tag--link {
  background-color: #F7C242;
  color: darken($color: #58B2DC, $amount: 20);
  display: flex;
  padding-left: 10px;
  clip-path: polygon(10px 0%, 100% 1%, 100% 100%, 10px 100%, 0% 50%);
}

.post-content {
  grid-column: 2/6;
  padding: 20px;
}

</style>


