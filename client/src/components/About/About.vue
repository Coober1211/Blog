<template>
  <div class="main">
    <div class="sidebar">
      <info></info>      
    </div>
    <div class="content">
      <div class="title">
        <h1>About Blog</h1>
      </div>
      <description :content="aboutBlog"></description>
      <div class="title">
        <h1>About Me</h1>
      </div>
      <description :content="aboutMe"></description>
      <div class="title">
        <h1>Experience</h1>
      </div>
    </div>
  </div>
</template>

<script>
import info from './Info';
import description from './Description';

export default {
  name: 'About',
  components: {
    info,
    description,
  },
  data() {
    return {
      aboutBlog: '這裡，記錄一些學習筆記，旅遊或生活心情。',
      aboutMe: '還在學習當一個軟體工程師，希望能用科技為世界帶來一點點改變。',
    };
  },
};
</script>

<style lang="scss" scoped>

.main {
  font-family: 'Ovo', serif;
  margin: 10vh 20px 0 20px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.sidebar {
  grid-column: 1;
}

.content {
  grid-column: 2;
}

.content .title {
  font-family: 'Kaushan Script', cursive;
  color: #F7C242;
  text-shadow: 1px 1px #ccc;
}
</style>


