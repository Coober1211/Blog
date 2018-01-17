<template>
  <div class="main">
    <div class="post-form">
      <div class="title">
        <input type="text" name="title" id="" placeholder="Title">
      </div>
      <div class="types">
        <div class="type" v-for="t in this.types" :key="t.key">
          <input type="radio" name="type" :id="t" :value="t">
          <label :for="t">{{t}}</label>     
        </div> 
        <h4>choice type</h4>
      </div>
      <div class="tags">
        <div class="tag" v-for="c in this.choices" :key="c.key">
          <input type="checkbox" name="tags" :id="c" :value="c">          
          <label :for="c">{{c}}</label>
        </div>
        <h4>choice tags</h4>        
      </div>
      <div class="abstract">
        <textarea name="abstract" id="" cols="40" rows="3" placeholder="Abstract"></textarea>
      </div>
      <button type="submit" @click="submitPost">Post it!</button>
      <div class="editor post-content">
        <textarea v-model="content" ></textarea>
        <div v-html="compiledMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import { $, $$ } from '../../assets/javascripts/bling';
import ArticleService from '../../services/AticleService';

export default {
  data() {
    return {
      types: ['Coding', 'Design', 'Travel', 'Life'],
      choices: ['Vue.js', 'D3.js', 'CSS Grid', 'Node.js', 'Express', 'RestFul Api', 'Hong Kong'],
      content: '# Hello',
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content, { sanitize: true });
    },
  },
  methods: {
    async submitPost(e) {
      e.preventDefault();
      const article = {
        title: $('input[name=title]').value,
        type: $('input[name=type]').value,
        abstract: $('textarea[name=abstract]').value,
        tags: $$('input[name=tags]').filter(input => input.checked === true).map(input => input.value),
        content: this.content,
      };
      try {
        await ArticleService.createArticle(article);
        this.$router.push({
          name: 'Articles',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/content.scss';

.main {
  display: grid;
  min-height: 130vh;
  grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  font-family: 'Ovo', serif;
}

.post-form {
  grid-column: 2/6;
  margin-top: 10vh;
}

.title, .abstract {
  display: flex;
  justify-content: center;
}

.title input {
  border: none;
  font-size: 20px;
  background-color: lighten($color: #58B2DC, $amount: 20);
  font-weight: bold;
  border-bottom: 2px solid darken($color: #58B2DC, $amount: 20);
  margin-bottom: 20px;
  width: 400px;
  height: 40px;
}

.tags, .types {
  margin: 0;
  position: relative;
  padding: 0 0 5px 0;
  border-bottom: darken($color: #58B2DC, $amount: 20) solid 1px;
  list-style: none;
  display: flex;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tags h4, .types h4 {
  margin: 0;
  color: darken($color: #58B2DC, $amount: 20);
  position: absolute;
  right: 0;
  bottom: 0;
}

.tag, .type {
  display: block;
  margin-right: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tag input, .type input {
  width: auto;
  right: -1.5rem;
  margin-right: -1rem;
  position: relative;
  z-index: 2;
}

.tag label, .type label {
  background: #ccc;
  padding: 1rem 1rem 1rem 4rem;
}

.tag input:checked + label, .type input:checked + label{
  background-color: #F7C242;
}

.abstract textarea {
  resize: none;
  font-size: 16px;
}

button {
  width: 30%;
  height: 50px;
  margin: 20px 0 20px 50%;
  transform: translateX(-50%);
  border-radius: 3%;
  border: solid 2px #58B2DC;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: #58B2DC
}

textarea, .editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  resize: vertical;
  outline: none;
  background-color: lighten($color: #58B2DC, $amount: 20);
  font-size: 1em;
  // font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>


